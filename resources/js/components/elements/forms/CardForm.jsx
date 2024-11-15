import CardCrossBtn from "../buttons/CardCrossBtn";
import CSRF from "./CSRF";

/**
 * Форма ввода/редактирования на карточке
 * @returns {JSX.Element}
 * @constructor
 */
const CardForm = ({className, onSubmit, close, children}) => {
    return (
        <form className={className} onSubmit={onSubmit}>
            <CardCrossBtn action={close}/>
            <CSRF/>
            {children}
        </form>
    );
};

export default CardForm;