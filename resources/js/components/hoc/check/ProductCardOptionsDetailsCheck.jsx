import ProductCardOptionDetails from "../../elements/cards/product_card/options/ProductCardOptionDetails";

/**
 * Проверка наличия вариантов выбора в селекторе карточки товара
 * @param items
 * @param name
 * @param className
 * @param use
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardOptionsDetailsCheck = ({items, name, className, use}) => {
    return (
        items[0].value ?
            <ProductCardOptionDetails items={items} name={name} className={className} use={use}/> :
            <details className={className + ' option__details-disabled'}>
                <summary className="option__summary-disabled option__summary"></summary>
            </details>
    )
};

export default ProductCardOptionsDetailsCheck;