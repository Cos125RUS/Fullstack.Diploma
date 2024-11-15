import classNames from "classnames";

/**
 * Поле ввода в модальном окне
 * @param name
 * @param placeholder
 * @param type
 * @param required
 * @param className
 * @param id
 * @returns {JSX.Element}
 * @constructor
 */
const ModalInput = ({name, placeholder, type = "text", required = false, isFail = false, id = null}) => {
    const inputClassName = classNames("modal__input", isFail && "modal__input__fail");

    return (
        <input type={type} name={name} placeholder={placeholder} className={inputClassName} required={required} id={id}/>
    );
};

export default ModalInput;