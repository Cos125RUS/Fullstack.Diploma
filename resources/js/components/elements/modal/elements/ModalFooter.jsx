/**
 * Подвал модального окна авторизации
 * @returns {JSX.Element}
 * @constructor
 */
const ModalFooter = ({children}) => {
    return (
        <div className="modal__footer">
            {children}
        </div>
    );
};

export default ModalFooter;