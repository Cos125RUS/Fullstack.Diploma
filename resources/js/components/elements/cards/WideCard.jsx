/**
 * Широкая карточка
 * @param className
 * @param id
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const WideCard = ({className, id, children}) => {
    if (className) {
        className = "card-wide " + className;
    } else {
        className = "card-wide";
    }

    return (
        <li className={className} id={id}>
            {children}
        </li>
    );
};

export default WideCard;