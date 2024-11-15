import ModalProductTop from "../elements/product/ModalProductTop";
import ModalProductBottom from "../elements/product/ModalProductBottom";
import SuccessModalBtn from "../../buttons/SuccessModalBtn";
import {useNavigate} from "react-router-dom";
import CharLogo from "../../svg/CharLogo";
import ModalBox from "../elements/ModalBox";

/**
 * Модальное окно подтверждения добавления товара в корзину
 * @param closeModal
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const SuccessAddToCartModal = ({closeModal, item}) => {
    const navigate = useNavigate();
    /**
     * Действие после подтверждения
     * @param closeModal
     */
    const confirmAddToCartAction = (closeModal) => {
        closeModal();
        navigate('/cart');
    };

    return (
        <ModalBox logo={<CharLogo/>} closeModal={closeModal}>
            <ModalProductTop category={item.category} title={item.title}/>
            <ModalProductBottom item={item}/>
            <div className="modal-product__button-box">
                <SuccessModalBtn closeModal={closeModal} confirmText="перейти в корзину"
                                 confirmAction={confirmAddToCartAction}/>
            </div>
        </ModalBox>
    );
};

export default SuccessAddToCartModal;