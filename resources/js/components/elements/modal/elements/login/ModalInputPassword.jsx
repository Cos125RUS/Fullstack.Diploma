import EyeSvg from "../../../svg/modal/EyeSvg";
import {useState} from "react";
import classNames from "classnames";

/**
 * Строка ввода пароля
 * @returns {JSX.Element}
 * @constructor
 */
const ModalInputPassword = ({isFail = false, id = null}) => {
    const [isShow, setIsShow] = useState(false);
    const inputClassName = classNames("modal__input", isFail && "modal__input__fail");

    /**
     * Переключить опцию отображения пароля
     */
    const switchShowPassword = () => {
        setIsShow(!isShow);
    };

    return (
        <div className="modal__password-box">
            <input type={isShow ? "text" : "password"} className={inputClassName} placeholder="Пароль"
                   name="password" required={true} id={id}/>
            <button className="modal__password-button cp"
                    onMouseDown={switchShowPassword} onMouseUp={switchShowPassword}
                    onClick={e => e.preventDefault()}>
                <EyeSvg/>
            </button>
        </div>
    )
        ;
};

export default ModalInputPassword;