import UnknownAccountSvg from "../../../svg/UnknownAccountSvg";

/**
 * Кнопка неаутентифицированного пользователя
 * @returns {JSX.Element}
 * @constructor
 */
const UnknownAccountBtn = ({handleModalOpen}) => {
    return (
        <button className="account__btn invisible-background-btn usable" onClick={handleModalOpen}>
            <UnknownAccountSvg/>
        </button>
    );
};

export default UnknownAccountBtn;