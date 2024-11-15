import HeaderTop from "./header/HeaderTop";
import LoadBanners from "../hoc/load/LoadBanners";

const Header = ({isIndex}) => {
    return (
        <header className={(isIndex ? "header index-header" : "header")}>
            <div className="header__background"></div>
            <div className="header__background-opacity"></div>
            <HeaderTop/>
            {isIndex ? <LoadBanners/> : ""}
        </header>
    );
};

export default Header;