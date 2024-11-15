import LoadData from "../LoadData";
import SimplePreloader from "../../../elements/preloaders/SimplePreloader";
import {salesInfoLoader} from "../../../../reducers/loaders/salesInfoLoader";
import HeaderMenuNav from "../../../blocks/header/HeaderMenuNav";

/**
 * Загрузка списка ссылок для мобильной версии сайта
 * @param closeMenu
 * @returns {JSX.Element}
 * @constructor
 */
const LoadMediaSalesInfo = ({closeMenu}) => {
    return (
        <LoadData name="salesInfo" preloader={<SimplePreloader/>} loader={salesInfoLoader}
                  component={(data) => <HeaderMenuNav data={data} closeMenu={closeMenu}/>}/>
    );
};

export default LoadMediaSalesInfo;