import CrossSvg from "../svg/CrossSvg";

/**
 * Кнопка крестик в правом верхнем углу карточки
 * @param action
 * @returns {JSX.Element}
 * @constructor
 */
const CardCrossBtn = ({action}) => {
    return (
        <div className="btn-cross__box">
            <button className="btn-cross btn-cross__white usable invisible-background-btn" onClick={e => action(e)}>
                <CrossSvg/>
            </button>
        </div>
    );
};

export default CardCrossBtn;