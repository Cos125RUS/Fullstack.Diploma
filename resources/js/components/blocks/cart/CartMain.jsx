import CartTotal from "../../elements/cart/total/CartTotal";
import {useSelector} from "react-redux";
import CatalogCleanBox from "../../elements/catalog/CatalogCleanBox";
import CartItems from "../../elements/cart/items/CartItems";

/**
 * Основной блок корзины
 * @returns {JSX.Element}
 * @constructor
 */
const CartMain = () => {
    const cart = useSelector(state => state.cart);

    return (
        <section className="cart-main catalog-main">
            <CartTotal sum={cart.sum}/>
            {cart.items.length > 0 ? <CartItems items={cart.items}/> : <CatalogCleanBox/>}
        </section>
    );
};

export default CartMain;