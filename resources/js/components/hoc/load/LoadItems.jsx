import SimplePreloader from "../../elements/preloaders/SimplePreloader";
import LoadData from "./LoadData";
import {itemsLoader} from "../../../reducers/loaders/itemsLoader";
import CatalogMainProducts from "../../blocks/catalog/main/CatalogMainProducts";

/**
 * Загрузка товаров
 * @returns {JSX.Element}
 * @constructor
 */
const LoadItems = () => {
    return (
        <LoadData name="items" preloader={<SimplePreloader/>} loader={itemsLoader}
                  component={(data) => <CatalogMainProducts data={data}/>}/>
    );
};

export default LoadItems;