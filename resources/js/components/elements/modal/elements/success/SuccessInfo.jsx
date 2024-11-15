import classNames from "classnames";

/**
 * Информирование об успешности операции
 * @returns {JSX.Element}
 * @constructor
 */
const SuccessInfo = ({title, email, isBig = false}) => {
    const titleClassName = classNames("modal-success__info-title", isBig && "modal-success__info-title-big");

    return (
        <div className="modal-success__info">
            <h2 className={titleClassName}>{title}</h2>
            <p className="modal-success__info-email">{email}</p>
        </div>
    );
};

export default SuccessInfo;