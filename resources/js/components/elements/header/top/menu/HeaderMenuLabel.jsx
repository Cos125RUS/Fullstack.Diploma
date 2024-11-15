/**
 * Кнопка открытия меню в мобильной версии хедера
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderMenuLabel = () => {
    return (
        <label htmlFor="header-menu-checkbox" className="header__menu-label">
            <svg width="30.000000" height="25.000000" viewBox="0 0 30 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect id="hum-burger" rx="1.500000" width="30.000000" height="3.000000"
                      fill="#FFFFFF"
                      fillOpacity="1.000000"/>
                <rect id="hum-burger" y="11.000000" rx="1.500000" width="30.000000"
                      height="3.000000"
                      fill="#FFFFFF" fillOpacity="1.000000"/>
                <rect id="hum-burger" y="22.000000" rx="1.500000" width="30.000000"
                      height="3.000000"
                      fill="#FFFFFF" fillOpacity="1.000000"/>
            </svg>
        </label>
    );
};

export default HeaderMenuLabel;