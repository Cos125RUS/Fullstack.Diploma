/**
 * Картинка личного кабинета для неавторизованных пользователей
 * @returns {JSX.Element}
 * @constructor
 */
const UnknownAccountSvg = () => {
    return (
        <svg width="27.000000" height="27.000000" viewBox="0 0 27 27" fill="none"
             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             className="account-icon">
            <path id="cabinet_ico_deactive"
                  d="M10.28 0.73C1.27 4.49 3.9 17.79 13.65 17.79C17.68 17.79 20.72 15.57 22.13 11.61C24.7 4.39 17.46 -2.26 10.28 0.73ZM18.01 4.36C20.43 6.61 20.49 10.91 18.12 13.4C14.39 17.33 7.14 14.38 7.14 8.93C7.14 3.57 14.04 0.67 18.01 4.36ZM8.33 19.88C3.19 21.11 0 23.57 0 26.27C0 27.44 2.17 27.1 2.65 25.86C3.49 23.68 7.84 22.21 13.49 22.19C19.33 22.17 24.61 23.94 24.61 25.91C24.61 26.5 25.15 27 25.8 27C26.46 27 27 26.31 27 25.48C27 21.25 16.16 17.99 8.33 19.88Z"
                  fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd"/>
        </svg>
    );
};

export default UnknownAccountSvg;