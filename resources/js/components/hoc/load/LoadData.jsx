import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useLoader} from "../../../hooks/useLoader";

/**
 * Загрузка данных в компанент
 * @param component целевой компонент
 * @param preloader анимация загрузки
 * @param name имя загружаемой сущности
 * @param loader загрузчик сущности
 * @param args аргументы загрузчика
 * @returns {*}
 * @constructor
 */
const LoadData = ({component, preloader, name, loader, args= []}) => {
    const data = useLoader(name, loader, args);
    const loadingStatus = useSelector(state => state.loadingStatus[name]);
    const [firstLoad, setFirstLoad] = useState(data.length === 0);

    useEffect(() => {
        setFirstLoad(data.length === 0);
    }, [data.length]);

    return loadingStatus || firstLoad ? preloader : component(data);
};

export default LoadData;