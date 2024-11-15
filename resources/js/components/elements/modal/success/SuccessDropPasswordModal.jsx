import ModalBox from "../elements/ModalBox";
import EnvelopeSvg from "../../svg/modal/EnvelopeSvg";
import SuccessInfo from "../elements/success/SuccessInfo";

/**
 * Окно с подтверждением сброса пароля
 * @param email
 * @param closeModal
 * @returns {JSX.Element}
 * @constructor
 */
const SuccessDropPasswordModal = ({email, closeModal}) => {
    return (
        <ModalBox closeModal={closeModal} logo={<EnvelopeSvg/>}>
            <SuccessInfo title="Пароль отправлен на почту" email={email}/>
        </ModalBox>
    );
};

export default SuccessDropPasswordModal;