import CartItem from "./CartItem";

/**
 * Товары в корзине
 * @param items
 * @returns {JSX.Element}
 * @constructor
 */
const CartItems = ({items}) => {
    return (
        <div className="cart-main__items-box">
            <ul className="catalog-main__product-ul">
                {items.map(item => <CartItem key={item.cartId} item={item}/>)}
            </ul>
        </div>
    );
};

export default CartItems;