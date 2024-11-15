import EnvelopeSvg from "../../svg/modal/EnvelopeSvg";
import ModalBox from "../elements/ModalBox";
import SuccessInfo from "../elements/success/SuccessInfo";
import ModalFooter from "../elements/ModalFooter";
import SuccessInfoNote from "../elements/success/SuccessInfoNote";

/**
 * Окно с подтверждением регистрации
 * @param closeModal
 * @param email
 * @returns {JSX.Element}
 * @constructor
 */
const SuccessRegistrationModal = ({closeModal, email}) => {
    return (
        <ModalBox closeModal={closeModal} logo={<EnvelopeSvg/>}>
            <SuccessInfo email={email} title="Подтвердите регистрацию на почте" isBig={true}/>
            <ModalFooter>
                <SuccessInfoNote text="Остался один шаг!"/>
                <SuccessInfoNote text="Завершите регистрацию"/>
            </ModalFooter>
        </ModalBox>
    );
};

export default SuccessRegistrationModal;