import classNames from "classnames";
import SubmitAccountBtn from "../../buttons/SubmitAccountBtn";
import AccountFormEditLine from "./AccountFormEditLine";

/**
 * Поля формы редактирования данных в личном кабинете
 * @returns {JSX.Element}
 * @constructor
 */
const AccountFormLines = ({values, classType}) => {
    return (
        <div className={classNames("account__form-lines", `account-${classType}__form-lines`)}>
            {values.map((item, index) =>
                <AccountFormEditLine item={item} key={index} classType={classType}/>)}
            <SubmitAccountBtn classType={classType}/>
        </div>
    );
};

export default AccountFormLines;