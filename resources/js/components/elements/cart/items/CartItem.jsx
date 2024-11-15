import {Link} from "react-router-dom";
import ProductCardContent from "../../cards/product_card/ProductCardContent";
import CartItemDelBtn from "../../buttons/CartItemDelBtn";

/**
 * Карточка товара в корзине
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const CartItem = ({item}) => {
    return (
        <li className="catalog-main__product-item shadow" id={`catalog-main__product-item#${item.id}`}>
            <img src={"img/catalog/products/items/" + item.category + ".png"} alt={"steel " + item.category}
                 className="catalog-main__product-media-img"/>
            <h2 className="catalog-main__product-title cart-main__item-title">
                <Link to={`/product?category=${item.category}&subcategory=${item.subcategory}&id=${item.id}`}
                      className="catalog-main__product-link">{item.title}</Link>
                <CartItemDelBtn item={item}/>
            </h2>
            <ProductCardContent item={{...item, use: []}} className="cart" isCart={true}/>
        </li>
    );
};

export default CartItem;