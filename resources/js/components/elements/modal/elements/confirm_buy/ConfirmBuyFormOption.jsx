import classNames from "classnames";
import {useState} from "react";

/**
 * Опция формы подтверждения заявки
 * @param name
 * @param className
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
const ConfirmBuyFormOption = ({name, title, isActive, index, setActive}) => {
    const className = classNames("modal-confirm__form-option-btn", "cp", "uppercase", "btn",
        isActive ? "modal-confirm__form-option-btn__blue" : "modal-confirm__form-option-btn__grey");

    return (
        <label className={className}>
            {title}
            <input name={name} type="radio" className="modal-confirm__form-option-radio" checked={isActive}
                   onChange={e => setActive(index)} value={index}/>
        </label>
    );
};

export default ConfirmBuyFormOption;