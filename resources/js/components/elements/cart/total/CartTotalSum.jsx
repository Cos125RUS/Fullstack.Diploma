/**
 * Сумма товаров в корзине
 * @param sum
 * @returns {JSX.Element}
 * @constructor
 */
const CartTotalSum = ({sum}) => {
    return (
        <div className="cart-main__total-sum">
            <h4>Итого</h4>
            <p>{sum} ₽</p>
        </div>
    );
};

export default CartTotalSum;