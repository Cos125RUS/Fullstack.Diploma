import CatalogMainNav from "./main/CatalogMainNav";
import LoadItems from "../../hoc/load/LoadItems";
import {useLocation} from "react-router-dom";
import CatalogCleanBox from "../../elements/catalog/CatalogCleanBox";

/**
 * Основной блок страницы каталога
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogMain = () => {
    const location = useLocation();

    return (
        <section className="catalog-main">
            <CatalogMainNav/>
            {location.search ? <LoadItems/> : <CatalogCleanBox/>}
        </section>
    );
};

export default CatalogMain;