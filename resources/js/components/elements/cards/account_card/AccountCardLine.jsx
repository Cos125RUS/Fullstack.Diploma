import classNames from "classnames";

/**
 * Строка с данными в карточке аккаунта
 * @returns {JSX.Element}
 * @constructor
 */
const AccountCardLine = ({line, classType}) => {
    const className = classNames("account__card-line", `account-${classType}__card-line`);

    return (
        <div className={className}>
            <h6>{line.title}</h6>
            <p>{line.value}</p>
        </div>
    );
};

export default AccountCardLine;