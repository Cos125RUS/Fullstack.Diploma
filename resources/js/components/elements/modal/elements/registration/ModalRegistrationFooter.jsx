/**
 * Подвал формы регистрации
 * @returns {JSX.Element}
 * @constructor
 */
const ModalRegistrationFooter = ({goAuth}) => {
    return (
        <div className="modal__footer-box">
            <h4 className="modal__footer-title">
                Есть аккаунт?
                <button className="modal__footer-btn" onClick={goAuth}>
                    Войти
                </button>
            </h4>
        </div>
    );
};

export default ModalRegistrationFooter;