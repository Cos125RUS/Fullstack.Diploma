import ModalLoginFooterBtn from "./ModalLoginFooterBtn";

/**
 * Подвал окна авторизации
 * @param setActiveModal
 * @returns {JSX.Element}
 * @constructor
 */
const ModalLoginFooter = ({setActiveModal}) => {
    return (
        <div className="modal__footer-box">
            <ModalLoginFooterBtn setActiveModal={setActiveModal} mode="getPassword" text="Напомнить пароль"/>
            <ModalLoginFooterBtn setActiveModal={setActiveModal} mode="registration" text="Регистрация"/>
        </div>
    );
};

export default ModalLoginFooter;