import {Link} from "react-router-dom";

const HeaderMenuInfo = () => {
    return (
        <div className="header-menu__phone-box">
            <Link to="tel:+74232499471" className="header-menu__phone">84232499471</Link>
            <p className="header-menu__working-time">Пн-Пт 9:00-17:00</p>
        </div>
    );
};

export default HeaderMenuInfo;