import {useState} from "react";
import classNames from "classnames";

/**
 * Строка ввода на форме редактирования данных в личном кабинете
 * @returns {JSX.Element}
 * @constructor
 */
const AccountFormEditLine = ({item, classType}) => {
    const [value, setValue] = useState(String(item.value));

    let labelClassName = classNames("account__form-line-title", `account-${classType}__form-line-title `);
    if (item.required) labelClassName += " account__form-line-required";

    return (
        <div className={classNames("account__form-line", `account-${classType}__form-line`)}>
            <label htmlFor={item.name} className={labelClassName}>{item.title}</label>
            {item.type !== "textarea" ?
                <input type={item.type} name={item.name} value={value} required={item.required}
                       onChange={e => setValue(e.target.value)}
                       className={classNames("account__form-line-value", `account-${classType}__form-line-value`)}/>
                :
                <textarea name={item.name} value={value} required={item.required}
                          onChange={e => setValue(e.target.value)}
                          className={classNames(
                              "account__form-line-value",
                              `account-${classType}__form-line-value`,
                              "account__form-line-textarea")}/>
            }
        </div>
    );
};

export default AccountFormEditLine;