import {Link} from "react-router-dom";
import ProductCardContent from "./product_card/ProductCardContent";

/**
 * Карточка товара
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCard = ({item}) => {
    return (
        <li className="catalog-main__product-item card-wide" id={`catalog-main__product-item#${item.id}`}>
            <img src={"img/catalog/products/items/"+item.category+".png"} alt={"steel "+item.category}
                 className="catalog-main__product-media-img"/>
            <h2 className="catalog-main__product-title">
                <Link to={`/product?category=${item.category}&subcategory=${item.subcategory}&id=${item.id}`} className="catalog-main__product-link">{item.title}</Link>
            </h2>
            <ProductCardContent item={item}/>
        </li>
    );
};

export default ProductCard;