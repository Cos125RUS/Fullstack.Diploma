import CharISvg from "../../../svg/modal/CharISvg";

/**
 * Заголовок модального окна с информацией
 * @returns {JSX.Element}
 * @constructor
 */
const InfoModalTitle = () => {
    return (
        <div className="modal-info__title">
            <div className="modal-info__title-logo">
                <CharISvg/>
            </div>
            <h3 className="modal-info__title-text">Справочная информация</h3>
        </div>
    );
};

export default InfoModalTitle;