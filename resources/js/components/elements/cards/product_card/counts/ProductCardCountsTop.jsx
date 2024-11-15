import ProductCardMediaInfo from "./top/ProductCardMediaInfo";
import ProductCardCountsCounter from "./top/ProductCardCountsCounter";
import ProductCardCountsOption from "./top/ProductCardCountsOption";

/**
 * Блок со счётчиком товара и выбором единиц измерения на карточке товара
 * @param counts
 * @param use
 * @param link
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardCountsTop = ({counts, use, infoId, className}) => {
    return (
        <div className="counts__top">
            <h4>выбор единиц измерения</h4>
            <div className={"counts__box " + (className ? className + "-box" : "")}>
                <ProductCardMediaInfo infoId={infoId}/>
                <ProductCardCountsCounter useCount={use.count}/>
                <ProductCardCountsOption counts={counts} use={use.countsType}/>
            </div>
        </div>
    );
};

export default ProductCardCountsTop;