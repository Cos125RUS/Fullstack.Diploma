import ProductCardCountsTop from "./counts/ProductCardCountsTop";
import ProductCardCountsBottom from "./counts/ProductCardCountsBottom";

/**
 * Правая часть карточки товара с количеством и кнопокй "купить"
 * @param item
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardCounts = ({item, className}) => {
    return (
        <div className={"catalog-main__product-section-counts " + (className ? className + "-counts" : "")}>
            <ProductCardCountsTop counts={item.counts} infoId={item.infoId} className={className}
                                  use={item.use}/>
            <ProductCardCountsBottom item={item} className={className}/>
        </div>
    );
};

export default ProductCardCounts;