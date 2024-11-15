/**
 * Верхняя часть карточки товара в мобильной версии на стронице продукта
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardTopMedia = ({item}) => {
    return (
        <div className="product-main__top">
            <img src={"img/catalog/products/items/" + item.category + ".png"} alt={"steel " + item.category}/>
            <h2 className="catalog-main__product-title">{item.title}</h2>
        </div>
    );
};

export default ProductCardTopMedia;