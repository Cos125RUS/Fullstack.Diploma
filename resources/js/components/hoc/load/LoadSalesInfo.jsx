import LoadData from "./LoadData";
import SimplePreloader from "../../elements/preloaders/SimplePreloader";
import {salesInfoLoader} from "../../../reducers/loaders/salesInfoLoader";
import SalesInfoNav from "../../elements/header/top/sales/SalesInfoNav";

/**
 * Загрузка списка ссылок в блоке хедера для покупателей
 * @returns {JSX.Element}
 * @constructor
 */
const LoadSalesInfo = () => {
    return (
        <LoadData name="salesInfo" preloader={<SimplePreloader/>} loader={salesInfoLoader}
                  component={(data) => <SalesInfoNav data={data}/>}/>
    );
};

export default LoadSalesInfo;