import AccountSvg from "../../elements/svg/account/AccountSvg";
import HamburgerSvg from "../../elements/svg/account/HamburgerSvg";
import CompanySvg from "../../elements/svg/account/CompanySvg";

/**
 * Выдача svg-иконок для меню личного кабинета
 * @param name
 * @returns {*}
 * @constructor
 */
const GetAccountIcon = ({name}) => {
    const icons = {
        profile: <AccountSvg/>,
        orders: <HamburgerSvg/>,
        company: <CompanySvg/>,
    };

    return icons[name];
};

export default GetAccountIcon;