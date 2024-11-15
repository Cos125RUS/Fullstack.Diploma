import CrossSvg from "../../../svg/CrossSvg";

/**
 * Строка ввода ИНН в модальном окне подтверждения покупки
 * @returns {JSX.Element}
 * @constructor
 */
const ConfirmBuyFormInput = ({setOptions, setShowMode}) => {
    /**
     * Убрать поле ввода ИНН
     */
    const closeEntryITN = () => {
        setShowMode(false);
    };

    /**
     * Добавление новой компании
     * @param e
     */
    const addNewCompany = (e) => {
        const itn = e.target.value;
        if (e.target.value) {
            //TODO реализовать поиск побазе, всплывающую подсказку и дозаполнение по килику на подсказке
        } else if (itn.length === 10) {
            //TODO реализовать добавление контрагента
            setOptions(1); //Разблокируем следующий уровень выбора модального окна
        }
    };

    return (
        <div>
            <input className="modal-confirm__form-input" placeholder="ИНН*" name="pay" required
                   onChange={e => addNewCompany(e)}/>
            <button className="modal-confirm__form-input-btn usable invisible-background-btn"
                    onClick={closeEntryITN}>
                <CrossSvg/>
            </button>
        </div>
    );
};

export default ConfirmBuyFormInput;