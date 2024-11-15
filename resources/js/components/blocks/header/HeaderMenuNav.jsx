import ProductCardAnimation from "../../elements/cards/ProductCardAnimation";
import HeaderMenuOptions from "../../elements/header/top/menu/HeaderMenuOptions";
import HeaderMenuInfo from "../../elements/header/top/menu/HeaderMenuInfo";
import HeaderMenuContacts from "../../elements/header/top/menu/HeaderMenuContacts";
import HeaderMenuCross from "../../elements/header/top/menu/HeaderMenuCross";

const HeaderMenuNav = ({data, closeMenu}) => {
    const options = [
        {link: "/catalog", title: "Продукция"},
        {link: "/#footer", title: "Контакты"},
        {link: "/sales", title: "Покупателям"},
    ];

    return (
        <nav className="header__menu-nav dropdown-menu__nav header-menu slide-up-menu">
            <div className="header-menu__container">
                <div className="header-menu__box">
                    <div className="header-menu__top">
                        <ProductCardAnimation className="header-menu__animation"/>
                        <HeaderMenuCross/>
                    </div>
                    <div className="header-menu__bottom">
                        <HeaderMenuOptions data={options} classBox="header-menu__options" closeMenu={closeMenu}
                                           classLine="header-menu__options-link"/>
                        <HeaderMenuOptions data={data} classBox="header-menu__info" closeMenu={closeMenu}
                                           classLine="header-menu__info-link"/>
                        <HeaderMenuInfo/>
                        <HeaderMenuContacts/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HeaderMenuNav;