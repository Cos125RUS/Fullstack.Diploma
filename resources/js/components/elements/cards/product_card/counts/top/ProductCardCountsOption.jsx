import ProductCardOptionDetails from "../../options/ProductCardOptionDetails";
import ProductCardOptionBackground from "../../options/ProductCardOptionBackground";

/**
 * Селектор карточки товара
 * @param counts
 * @param use
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardCountsOption = ({counts, use}) => {
    return (
        <div className="counts__option">
            <ProductCardOptionDetails name={counts.name} items={counts.items} use={use}
                                      className="option__details counts__option-details"/>
            <ProductCardOptionBackground length={counts.items.length} isCounts={true}/>
        </div>
    );
};

export default ProductCardCountsOption;