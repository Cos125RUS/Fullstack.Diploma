/**
 * Кнопка
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({text, action, className}) => {
    return (
        <button className={className} onClick={(e) => action(e)}>
            {text}
        </button>
    );
};

export default Button;