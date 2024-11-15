import {useEffect, useState} from "react";
import AuthUserModal from "./AuthUserModal";
import RegistrationModal from "./RegistrationModal";
import GetPasswordModal from "./GetPasswordModal";
import SuccessDropPasswordModal from "./success/SuccessDropPasswordModal";
import SuccessRegistrationModal from "./success/SuccessRegistrationModal";

/**
 * Переключатель модальных окон
 * @param closeModal
 * @param setActiveModal
 * @returns {JSX.Element}
 * @constructor
 */
const SwitchModal = ({closeModal}) => {
    const [activeModal, setActiveModal] = useState("auth");
    const [email, setEmail] = useState();

    /**
     * Обёртка закрытия модального окна со сбросом модификатора активного окна
     */
    const closeWithDropActiveModalMode = () => {
        setActiveModal('auth');
        closeModal();
    };

    /**
     * Связные модальные окна
     * @type {{getPassword: (function(*): *), auth: (function(*): *), registration: (function(*): *)}}
     */
    const modals = {
        auth: <AuthUserModal closeModal={closeWithDropActiveModalMode} setActiveModal={setActiveModal}/>,
        registration: <RegistrationModal closeModal={closeWithDropActiveModalMode} setActiveModal={setActiveModal} setEmail={setEmail}/>,
        getPassword: <GetPasswordModal closeModal={closeWithDropActiveModalMode} setActiveModal={setActiveModal} setEmail={setEmail}/>,
        successRegistration: <SuccessRegistrationModal closeModal={closeModal} email={email}/>,
        successDropPass: <SuccessDropPasswordModal closeModal={closeModal} email={email}/>,
    };

    return modals[activeModal];
};

export default SwitchModal;