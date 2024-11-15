import BigButton from "./big_button/BigButton";
import classNames from "classnames";

/**
 * Кнопка редактирования информации о пользователе на странице профиля личного кабинета
 * @param action
 * @returns {JSX.Element}
 * @constructor
 */
const EditAccountCartBtn = ({switchMode, className}) => {
    const classes = classNames("account__card-btn", className);

    return (
        <BigButton text="изменить" action={switchMode} color="grey" className={classes}/>
    );
};

export default EditAccountCartBtn;