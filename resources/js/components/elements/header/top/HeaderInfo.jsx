/**
 * Блок хедера с телефоном и временем работы
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderInfo = () => {
    return (
        <div className="header__info">
            <p className="header__info-phone">84232499471</p>
            <p className="header__info-working">Пн-Пт 9:00-17:00</p>
        </div>
    );
};

export default HeaderInfo;