import SideBar from "../../../blocks/side_bar/SideBar";
import AccountNavItems from "./AccountNavItems";

/**
 * Боковое меню страницы аккаунта
 * @returns {JSX.Element}
 * @constructor
 */
const AccountNav = () => {
    return (
        <SideBar className="account__nav">
            <AccountNavItems/>
        </SideBar>
    );
};

export default AccountNav;