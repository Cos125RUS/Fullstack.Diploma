import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

/**
 * Загрузчик данных в компонент
 * @param name
 * @param loader
 * @param args
 */
export const useLoader = (name, loader, args = []) => {
    const data = useSelector(state => state[name]);
    const loadingError = useSelector(state => state.loadingError[name]);
    const dispatch = useDispatch();
    const [firstLoad, setFirstLoad] = useState(data.length === 0);

    useEffect(() => {
        if (firstLoad) {
            dispatch(loader(...args));
            setFirstLoad(false);
        } else {
            //TODO Добавить механизм обновления данных по отложенному запросу на сервер
            // setInterval(() => {}, );
        }
    }, []);

    useEffect(() => {
        if (loadingError) {
            dispatch(loader());
        }
    }, [loadingError]);

    return data;
};