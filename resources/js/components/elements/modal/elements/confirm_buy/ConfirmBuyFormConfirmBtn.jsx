import classNames from "classnames";

/**
 * Кнопка отправки на модальном окне подтверждения заявки
 * @returns {JSX.Element}
 * @constructor
 */
const ConfirmBuyFormConfirmBtn = ({isActive}) => {
    const className = classNames("btn btn-blue btn-big", "modal-confirm__form-btn",
        !isActive && "modal-confirm__form-btn__inactive");

    return (
        <div className="modal-confirm__form-btn-box">
            <input type="submit" value="отправить заявку" className={className}/>
        </div>
    );
};

export default ConfirmBuyFormConfirmBtn;