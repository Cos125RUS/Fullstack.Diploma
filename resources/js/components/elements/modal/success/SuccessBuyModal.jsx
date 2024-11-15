import ModalBox from "../elements/ModalBox";
import UserLogo from "../../logo/UserLogo";
import SuccessBuyModalContent from "../elements/success/SuccessBuyModalContent";

/**
 * Модальное окно с подтверждением покупки
 * @returns {JSX.Element}
 * @constructor
 */
const SuccessBuyModal = ({closeModal, offer, setActiveModal}) => {
    /**
     * Обработка закрытия
     */
    const close = () => {
        //Сброс активного окна перед закрытием
        setActiveModal("login");
        closeModal();
    }

    return (
        <ModalBox closeModal={close} logo={<UserLogo/>} title="Заказ оформлен!">
            <SuccessBuyModalContent offer={offer}/>
        </ModalBox>
    );
};

export default SuccessBuyModal;