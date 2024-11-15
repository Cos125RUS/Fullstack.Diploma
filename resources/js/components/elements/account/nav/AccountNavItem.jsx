import {Link, useLocation} from "react-router-dom";
import GetAccountIcon from "../../../hoc/svg/GetAccountIcon";

/**
 * Элемент бокового меню страницы настроек аккаунта
 * @returns {JSX.Element}
 * @constructor
 */
const AccountNavItem = ({route}) => {
    const location = useLocation();
    const currentPage = location.pathname.replace('/account/', '');
    const className = `account__nav-link ${route.name === currentPage ? "account__nav-link__current" : "usable"}`;

    return (
        <li className="account__nav-li">
            <Link to={route.link} className={className}>
                <GetAccountIcon name={route.name}/>
                <p>{route.title}</p>
            </Link>
        </li>
    );
};

export default AccountNavItem;