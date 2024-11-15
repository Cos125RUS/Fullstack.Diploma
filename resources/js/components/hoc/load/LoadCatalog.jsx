import LoadData from "./LoadData";
import {catalogLoader} from "../../../reducers/loaders/catalogLoader";
import SimplePreloader from "../../elements/preloaders/SimplePreloader";

/**
 * Загрузка каталога товаров
 * @param component
 * @returns {JSX.Element}
 * @constructor
 */
const LoadCatalog = ({component}) => {
    //TODO: Добавить прелоадер
    return <LoadData component={component} preloader={<SimplePreloader/>} name="catalog" loader={catalogLoader}/>;
};

export default LoadCatalog;