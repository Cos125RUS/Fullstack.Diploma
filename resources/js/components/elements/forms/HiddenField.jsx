/**
 * Невидимое поле формы
 * @param name
 * @param value
 * @returns {JSX.Element}
 * @constructor
 */
const HiddenField = ({name, value}) => {
    return <input type="hidden" name={name} value={value}/>;
};

export default HiddenField;