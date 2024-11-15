import HeaderLogo from "../../elements/logo/HeaderLogo";
import HeaderSections from "../../elements/header/top/HeaderSections";
import HeaderUserInterface from "../../elements/header/top/HeaderUserInterface";
import HeaderCart from "../../elements/header/top/HeaderCart";
import HeaderInfo from "../../elements/header/top/HeaderInfo";
import HeaderMenu from "./HeaderMenu";

/**
 * Верхняя часть хэдыра (общая для всех страниц)
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderTop = () => {
    return (
        <div className="header__top">
            <nav className="header__top-nav">
                <HeaderLogo/>
                <HeaderSections/>
                <HeaderUserInterface/>
                <HeaderCart/>
                <HeaderInfo/>
                <HeaderMenu/>
            </nav>
        </div>
    );
};

export default HeaderTop;