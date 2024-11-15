import EditAccountCartBtn from "../../buttons/EditAccountCartBtn";
import classNames from "classnames";
import AccountCardLine from "./AccountCardLine";

/**
 * Редактируемая карта с настройками профиля пользователя
 * @returns {JSX.Element}
 * @constructor
 */
const AccountEditableCard = ({values, switchMode, cardType}) => {
    const cardClassName = classNames("account__card", `account-${cardType}__card`);
    const btnClassName = classNames(`account-${cardType}__card-btn`);

    return (
        <div className={cardClassName}>
            {values.map((value, index) => <AccountCardLine key={index} line={value} classType={cardType}/>)}
            <EditAccountCartBtn switchMode={switchMode} className={btnClassName}/>
        </div>
    );
};

export default AccountEditableCard;