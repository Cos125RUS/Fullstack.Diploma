import MainTop from "../elements/global/MainTop";
import AccountMain from "../blocks/account/AccountMain";
import {Outlet} from "react-router";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

/**
 * Страница личного кабинета
 * @returns {JSX.Element}
 * @constructor
 */
const AccountPage = ({routes}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeRouteIndex, setActiveRouteIndex] = useState(0);

    useEffect(() => {
        /**
         * Обработка изменения размера экрана
         */
        const resize = () => {
            if (window.screen.availWidth > 1024 && location.pathname === "/account") {
                navigate("/account/profile");
            }
        };

        resize();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    useEffect(() => {
        const currentPage = location.pathname.replace('/account/', '');
        const currentRoute = routes.filter(route => route.name === currentPage)[0];
        const currentIndex = routes.indexOf(currentRoute);
        if (currentIndex !== -1) {
            setActiveRouteIndex(currentIndex);
        }
    }, [location.pathname]);

    const breadcrumbs = [
        {
            title: "Главная",
            link: "/"
        },
        {
            title: routes[activeRouteIndex].title,
            link: null
        }
    ];

    return (
        <main className="account main">
            <MainTop title={routes[activeRouteIndex].title} className="catalog-top" route={breadcrumbs}/>
            <AccountMain>
                <Outlet/>
            </AccountMain>
        </main>
    );
};

export default AccountPage;