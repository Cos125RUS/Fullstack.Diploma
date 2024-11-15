import ModalBox from "./elements/ModalBox";
import UnknownUserLogo from "../svg/UnknownUserLogo";
import ModalLoginForm from "./elements/login/ModalLoginForm";
import ModalFooter from "./elements/ModalFooter";
import ModalLoginFooter from "./elements/login/ModalLoginFooter";

/**
 * Модальное окно авторизации
 * @param closeModal
 * @param setActiveModal
 * @returns {JSX.Element}
 * @constructor
 */
const AuthUserModal = ({closeModal, setActiveModal}) => {
    return (
        <ModalBox closeModal={closeModal} logo={<UnknownUserLogo/>} title="У меня есть аккаунт">
            <ModalLoginForm closeModal={closeModal}/>
            <ModalFooter>
                <ModalLoginFooter setActiveModal={setActiveModal}/>
            </ModalFooter>
        </ModalBox>
    );
};

export default AuthUserModal;