/**
 * Кнопка отправки авторизационных данных
 * @param text
 * @returns {JSX.Element}
 * @constructor
 */
const ModalInputSubmit = ({text}) => {
    return (
        <input type="submit" value={text} className="modal__sumbit btn btn-blue btn-big"/>
    );
};

export default ModalInputSubmit;