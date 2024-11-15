/**
 * Текстовое описание товара в модальном окне со справочной информацией
 * @param title
 * @param text
 * @returns {JSX.Element}
 * @constructor
 */
const InfoModalText = ({title, text}) => {
    return (
        <div className="modal-info__text">
            <h3 className="uppercase">{title}</h3>
            {text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
    );
};

export default InfoModalText;