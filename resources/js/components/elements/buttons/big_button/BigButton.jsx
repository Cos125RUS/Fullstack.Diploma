import Button from "../Button";

/**
 * Большая кнопка
 * @param text
 * @param action
 * @param color
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
const BigButton = ({text, action, color, className}) => {
    if (className) {
        className += `  btn btn-big btn-${color}`;
    } else {
        className = `btn btn-big btn-${color}`;
    }
    return (
        <Button text={text} action={action} className={className}/>
    );
};

export default BigButton;