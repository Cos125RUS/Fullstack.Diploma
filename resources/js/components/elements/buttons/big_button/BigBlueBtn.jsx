import Button from "../Button";

/**
 * Большая синяя кнопка
 * @param text
 * @param action
 * @returns {JSX.Element}
 * @constructor
 */
const BigBlueBtn = ({text, action, className}) => {
    if (className) {
        className += "  btn btn-big btn-blue";
    } else {
        className = " btn btn-big btn-blue";
    }
    return (
        <Button text={text} action={action} className={className}/>
    );
};

export default BigBlueBtn;