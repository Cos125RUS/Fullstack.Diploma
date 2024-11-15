import {useSelector} from "react-redux";
import AuthenticatedUserAccountIcon from "../../header/top/accaunt/AuthenticatedUserAccountIcon";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import AccountNavHeader from "./AccountNavHeader";
import AccountSvg from "../../svg/account/AccountSvg";
import HamburgerSvg from "../../svg/account/HamburgerSvg";
import CompanySvg from "../../svg/account/CompanySvg";
import AccountNavBackLink from "./AccountNavBackLink";

/**
 * Интерфейс мобильной версии
 * @returns {JSX.Element}
 * @constructor
 */
const AccountNavMediaInterface = ({setShowMediaPage}) => {
    const username = useSelector(state => state.user.username);
    const [showBackLink, setShowBackLink] = useState(false);
    const [headerMode, setHeaderMode] = useState('main');
    const location = useLocation();

    /**
     * Варианты хэдера интерфейса
     * @type {{profile: {icon: JSX.Element, title: string}, main: {icon: JSX.Element, title: string}, orders: {icon: JSX.Element, title: string}, company: {icon: JSX.Element, title: string}}}
     */
    const modes = {
        'main': {icon: <AuthenticatedUserAccountIcon name={username} color="blue"/>, title: "Личный кабинет"},
        'profile': {icon: <AccountSvg/>, title: "Профиль"},
        'orders': {icon: <HamburgerSvg/>, title: "Заказы"},
        'company': {icon: <CompanySvg/>, title: "Компания"},
    };

    useEffect(() => {
        if (location.pathname === '/account') {
            setShowBackLink(false);
            setHeaderMode('main');
            setShowMediaPage(false);
        } else {
            const currentPage = location.pathname.replace('/account/', '');
            setHeaderMode(currentPage);
            setShowBackLink(true);
            setShowMediaPage(true);
        }
    }, [location.pathname]);

    return (
        <div className="account__nav-interface">
            <AccountNavHeader icon={modes[headerMode].icon} title={modes[headerMode].title}/>
            {showBackLink && <AccountNavBackLink/>}
        </div>
    );
};

export default AccountNavMediaInterface;