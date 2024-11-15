/**
 * Заголовок модального окна
 * @param title
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
const ModalTitle = ({title, className = "modal__title"}) => {
    return (
        <h2 className={className}>{title}</h2>
    );
};

export default ModalTitle;