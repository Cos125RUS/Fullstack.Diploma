import classNames from "classnames";
import ConfirmBuyFormOption from "./ConfirmBuyFormOption";
import {useEffect, useState} from "react";

/**
 * Опции формы подтверждения покупки
 * @param isLast
 * @param name
 * @param options
 * @param setOptions
 * @returns {JSX.Element}
 * @constructor
 */
const ConfirmBuyFormOptions = ({isLast, name, options, setOptions}) => {
    const [active, setActive] = useState(-1);
    const className = classNames("modal-confirm__form-options",
        isLast ? "modal-confirm__form-options__last" : "modal-confirm__form-bd");

    useEffect(() => {
        setOptions(active);
    }, [active]);

    return (
        <div className={className}>
            {options.map((option, index) =>
                <ConfirmBuyFormOption className={className} name={name} title={option} isActive={active === index}
                                      setActive={setActive} index={index} key={index}/>)}
        </div>
    );
};

export default ConfirmBuyFormOptions;