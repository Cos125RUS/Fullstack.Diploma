import HeaderMenuLabel from "../../elements/header/top/menu/HeaderMenuLabel";
import {useRef} from "react";
import LoadMediaSalesInfo from "../../hoc/load/media/LoadMediaSalesInfo";

/**
 * Меню мобильной версии сайта
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderMenu = () => {
    const checkbox = useRef();

    /**
     * Закрыть меню
     */
    const closeMenu = () => {
        checkbox.current.checked = false;
    };

    return (
        <div className="header__menu">
            <input type="checkbox" name="header-menu-checkbox" id="header-menu-checkbox" ref={checkbox}
                   className="header__menu-checkbox dropdown-menu__checkbox slide-up-checkbox"/>
            <HeaderMenuLabel/>
            <LoadMediaSalesInfo closeMenu={closeMenu}/>
        </div>
    );
};

export default HeaderMenu;