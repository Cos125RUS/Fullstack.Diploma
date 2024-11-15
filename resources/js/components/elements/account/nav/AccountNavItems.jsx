import AccountNavItem from "./AccountNavItem";
import ExitSvg from "../../svg/account/ExitSvg";
import AccountNavExitBtn from "./AccountNavExitBtn";
import {useSelector} from "react-redux";
import AccountNavMediaInterface from "./AccountNavMediaInterface";
import {useState} from "react";
import classNames from "classnames";

/**
 * Верхняя часть бокового меню аккаунта
 * @returns {JSX.Element}
 * @constructor
 */
const AccountNavItems = () => {
    const accountRoutes = useSelector(state => state.accountRoutes);
    const [showMediaPage, setShowMediaPage] = useState(false);
    const className = classNames("account__nav-ul", showMediaPage && 'account__nav-ul__hidden');

    return (
        <nav className="account__nav">
            <AccountNavMediaInterface setShowMediaPage={setShowMediaPage}/>
            <ul className={className}>
                {accountRoutes.map((route, index) =>
                    <AccountNavItem route={route} key={index}/>)}
                <AccountNavExitBtn icon={<ExitSvg/>}/>
            </ul>
        </nav>
    );
};

export default AccountNavItems;