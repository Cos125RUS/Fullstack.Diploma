import {Link} from "react-router-dom";

const HeaderLogo = () => {
    return (
        <div className="header__logo">
            <Link to="/" className="logo__link">
                <img src="/img/header/logo.svg" alt="logo"/>
            </Link>
        </div>
    );
};

export default HeaderLogo;