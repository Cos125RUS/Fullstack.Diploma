import AccountNav from "../../elements/account/nav/AccountNav";

/**
 * Основная секция страницы аккаунта
 * @returns {JSX.Element}
 * @constructor
 */
const AccountMain = ({children}) => {
    return (
        <section className="account-main catalog-main">
            <AccountNav/>
            {children}
        </section>
    );
};

export default AccountMain;