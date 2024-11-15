import ProductCardOption from "./options/ProductCardOption";
import ProductOptionsCutting from "./options/ProductOptionsCutting";
import ProductCardInfo from "./options/ProductCardInfo";

/**
 * Выбор опций на карточке товара
 * @param item
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardOptions = ({item, className}) => {
    return (
        <div className={"catalog-main__product-section-options " + (className ? className + "-selectors" : "")}>
            <div className="catalog-main__product-option-top">
                <ProductCardOption option={item.options.thickness} values={item.thickness} use={item.use.thickness}/>
                <ProductCardOption option={item.options.length} values={item.thickness[0].sizes.items} use={item.use.size}/>
            </div>
            <div className="catalog-main__product-option-bottom">
                <ProductOptionsCutting cutting={item.use.cutting}/>
                <ProductCardInfo infoId={item.infoId}/>
            </div>
        </div>
    );
};

export default ProductCardOptions;