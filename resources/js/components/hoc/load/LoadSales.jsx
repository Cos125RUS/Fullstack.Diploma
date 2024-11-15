import SimplePreloader from "../../elements/preloaders/SimplePreloader";
import LoadData from "./LoadData";
import SalesSections from "../../blocks/sales/main/SalesSections";
import {salesLoader} from "../../../reducers/loaders/salesLoader";

const LoadSales = () => {
    return (
        <LoadData name="sales" preloader={<SimplePreloader/>} loader={salesLoader}
                  component={(data) => <SalesSections data={data}/>}/>
    );
};

export default LoadSales;