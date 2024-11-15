import ProductCardOptionBackground from "./ProductCardOptionBackground";
import ProductCardOptionsDetailsCheck from "../../../../hoc/check/ProductCardOptionsDetailsCheck";

/**
 * Контейнер с селектором на карточке товара
 * @param option
 * @param values
 * @param use
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardOption = ({option, values, use}) => {
    return (
        <div className="catalog-main__product-option">
            {values[0].value ? <h4>{option.title}</h4> : <h4> </h4>}
            <ProductCardOptionsDetailsCheck items={values} name={option.name} className="option__details" use={use}/>
            <ProductCardOptionBackground length={values.length}/>
        </div>
    );
};

export default ProductCardOption;