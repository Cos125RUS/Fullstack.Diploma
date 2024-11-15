/**
 * Кнопка смены модального окна на окне аутентификации
 * @returns {JSX.Element}
 * @constructor
 */
const ModalLoginFooterBtn = ({setActiveModal, text, mode}) => {
    /**
     * Смена активного модального окна
     * @param e
     */
    const switchModalWindow = (e) => {
        e.preventDefault();
        setActiveModal(mode);
    };

    return (
        <button className="modal__footer-btn"
                onClick={e => switchModalWindow(e)}>
            {text}
        </button>
    );
};

export default ModalLoginFooterBtn;