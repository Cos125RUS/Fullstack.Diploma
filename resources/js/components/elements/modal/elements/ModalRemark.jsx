/**
 * Пометка модального окна регистрация
 * @param text
 * @returns {JSX.Element}
 * @constructor
 */
const ModalRemark = ({text}) => {
    return (
        <div className="modal__footer-remark-box">
            <p className="modal__footer-remark">
                {text}
            </p>
        </div>
    );
};

export default ModalRemark;