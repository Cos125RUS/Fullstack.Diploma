import ModalBox from "./elements/ModalBox";
import ClipSvg from "../svg/modal/ClipSvg";
import ConfirmBuyForm from "./elements/confirm_buy/ConfirmBuyForm";

/**
 * Модальное окно подтверждения заказа
 * @param closeModal
 * @param setSuccess
 * @returns {JSX.Element}
 * @constructor
 */
const ConfirmBuyModal = ({closeModal, setSuccess}) => {
    return (
        <ModalBox closeModal={closeModal} logo={<ClipSvg/>} title="Оформление заявки">
            <ConfirmBuyForm closeModal={closeModal} setSuccess={setSuccess}/>
        </ModalBox>
    );
};

export default ConfirmBuyModal;