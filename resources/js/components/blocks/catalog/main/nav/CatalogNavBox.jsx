import CatalogNavMediaInterface from "../../../../elements/catalog/nav/CatalogNavMediaInterface";
import CatalogPromotionInfoLink from "../../../../elements/catalog/nav/CatalogPromotionInfoLink";
import CatalogNav from "./CatalogNav";
import LoadCatalog from "../../../../hoc/load/LoadCatalog";

const CatalogNavBox = () => {
    return (
        <nav className="catalog-main__nav dropdown-menu__nav">
            <div className="catalog-main__nav-box">
                <CatalogNavMediaInterface/>
                <LoadCatalog component={(data) => <CatalogNav products={data}/>}/>
                <CatalogPromotionInfoLink/>
            </div>
        </nav>
    );
};

export default CatalogNavBox;