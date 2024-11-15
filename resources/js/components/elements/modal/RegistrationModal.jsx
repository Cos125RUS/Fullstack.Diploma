import CharLogo from "../svg/CharLogo";
import ModalBox from "./elements/ModalBox";
import ModalFooter from "./elements/ModalFooter";
import ModalRegistrationForm from "./elements/registration/ModalRegistration";
import ModalRegistrationFooter from "./elements/registration/ModalRegistrationFooter";
import ModalRemark from "./elements/ModalRemark";

/**
 * Модальное окно регистрации
 * @param closeModal
 * @param setActiveModal
 * @param setEmail
 * @returns {JSX.Element}
 * @constructor
 */
const RegistrationModal = ({closeModal, setActiveModal, setEmail}) => {
    /**
     * Возврат на окно аутентификации
     * @param e
     */
    const goAuth = (e) => {
        e.preventDefault();
        setActiveModal("auth");
    };

    return (
        <ModalBox closeModal={closeModal} logo={<CharLogo/>} title="Регистрация">
            <ModalRegistrationForm setEmail={setEmail} setActiveModal={setActiveModal}/>
            <ModalFooter>
                <ModalRegistrationFooter goAuth={goAuth}/>
                <ModalRemark
                    text="Нажимая кнопку, я подтверждаю своё согласие на обработку персональных данных"/>
            </ModalFooter>
        </ModalBox>
    );
};

export default RegistrationModal;