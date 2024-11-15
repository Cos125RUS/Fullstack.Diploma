import MainTop from "../elements/global/MainTop";
import CartMain from "../blocks/cart/CartMain";

const CartPage = () => {
    const route = [
        {
            title: "Главная",
            link: "/"
        },
        {
            title: "Корзина",
            link: null
        }
    ];

    return (
        <main className="cart main">
            <MainTop title="Корзина" className="catalog-top" route={route}/>
            <CartMain/>
        </main>
    );
};

export default CartPage;