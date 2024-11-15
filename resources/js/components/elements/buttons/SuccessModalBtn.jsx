/**
 * Кнопка подтверждения действия на модальном окне
 * @param confirmAction
 * @param confirmText
 * @param closeModal
 * @returns {JSX.Element}
 * @constructor
 */
const SuccessModalBtn = ({confirmAction, confirmText, closeModal}) => {
    return (
        <button className="uppercase product-main__options-button catalog-main__product-button" autoFocus={true}
                onClick={() => confirmAction(closeModal)}>{confirmText}</button>
    );
};

export default SuccessModalBtn;