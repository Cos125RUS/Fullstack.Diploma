import ArrowSvg from "../../svg/account/ArrowSvg";
import {Link} from "react-router-dom";

/**
 * Кнопка возврата в меню для мобильной версии личного кабинета
 * @returns {JSX.Element}
 * @constructor
 */
const AccountNavBackLink = () => {
    return (
        <Link to="/account" className="account__nav-back-link shadow">
            <ArrowSvg/>
            <p>Личный кабинет</p>
        </Link>
    );
};

export default AccountNavBackLink;