import MediaCartBuyButton from "../../../../svg/modal/MediaCartBuyButton";
import MediaCartCheckBuyButton from "../../../../svg/modal/MediaCartCheckBuyButton";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../../../../reducers/siteSlice";

/**
 * Кнопка добавления товара в корзину
 * @param item
 * @param className
 * @param total
 * @param handleModalOpen
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardButton = ({item, className, total, handleModalOpen}) => {
    const dispatch = useDispatch();

    /**
     * Обработка добавления товара в корзину
     * @param e
     */
    const addToCartEvent = (e) => {
        e.preventDefault();
        handleModalOpen();
        const cartItem = {};
        Object.assign(cartItem, item);
        cartItem['total'] = total;
        cartItem['selected'] = {};
        Object.keys(cartItem['use']).forEach(key => cartItem['selected'][key] = cartItem['use'][key][0]);
        delete cartItem['use'];
        //заглушка
        cartItem['cartId'] = parseInt((Math.random()*10000).toString());
        dispatch(addToCart(cartItem));
    };

    return (
            <button className={"catalog-main__product-button " + (className ? className + "-button" : "")}
                    onClick={(e) => addToCartEvent(e)}>
                <span>КУПИТЬ</span>
                <MediaCartBuyButton/>
                <MediaCartCheckBuyButton/>
            </button>
    );
};

export default ProductCardButton;