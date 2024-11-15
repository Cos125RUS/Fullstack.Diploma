/**
 * Кнопка подтверждения заявки
 * @returns {JSX.Element}
 * @constructor
 */
const CartTotalBtn = ({handleModalOpen}) => {
    /**
     * Оформить заявку
     * @param e
     */
    const confirm = (e) => {
        e.preventDefault();
        handleModalOpen();
    }

    return (
        <button className="cart-main__total-btn catalog-main__product-button product-main__options-button"
                onClick={e => confirm(e)}>
            оформить заказ
        </button>
    );
};

export default CartTotalBtn;