/**
 * Примечание на окне подтверждения
 * @param text
 * @returns {JSX.Element}
 * @constructor
 */
const SuccessInfoNote = ({text}) => {
    return (
        <p className="modal-success__info-note">{text}</p>
    );
};

export default SuccessInfoNote;