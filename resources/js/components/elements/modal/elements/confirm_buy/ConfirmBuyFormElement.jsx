import BallSvg from "../../../svg/BallSvg";
import classNames from "classnames";

/**
 * Элемент формы подтверждения покупки
 * @param isActive
 * @param title
 * @param isLast
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const ConfirmBuyFormElement = ({isActive, title, isLast, children}) => {
    const ballClassName = classNames("modal-confirm__form-ball", !isActive && "modal-confirm__form-ball-inactive");
    const titleClassName = classNames("modal-confirm__form-title", "modal-confirm__form-bd", "uppercase",
        isLast && "modal-confirm__form-title-last");

    return (
        <div className="modal-confirm__form-element">
            <BallSvg className={ballClassName}/>
            <h2 className={titleClassName}>{title}</h2>
            {isActive && children}
        </div>
    );
};

export default ConfirmBuyFormElement;