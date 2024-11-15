/**
 * Список карточек
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const CardsList = ({children}) => {
    return (
        <ul className="card-list">
            {children}
        </ul>
    );
};

export default CardsList;