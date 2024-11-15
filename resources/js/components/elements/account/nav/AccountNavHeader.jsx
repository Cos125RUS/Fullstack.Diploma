
/**
 * Шапка меню личного кабинета
 * @returns {JSX.Element}
 * @constructor
 */
const AccountNavHeader = ({icon, title}) => {
    return (
        <div className="account__nav-header">
            {icon}
            <h2 className="account__nav-title">{title}</h2>
        </div>
    );
};

export default AccountNavHeader;