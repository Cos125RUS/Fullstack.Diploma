import CatalogNavMediaBtn from "../../catalog/nav/CatalogNavMediaBtn";
import CatalogNavBox from "../../../blocks/catalog/main/nav/CatalogNavBox";

/**
 * Каталог товаров для мобильной версии страницы продукта
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCatalogMedia = () => {
    return (
        <div className="product-top__catalog">
            <CatalogNavMediaBtn/>
            <CatalogNavBox/>
        </div>
    );
};

export default ProductCatalogMedia;