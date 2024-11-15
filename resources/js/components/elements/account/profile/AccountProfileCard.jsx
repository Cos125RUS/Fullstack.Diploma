import {useSelector} from "react-redux";
import AccountEditableCard from "../../cards/account_card/AccountEditableCard";

/**
 * Карточка с данными пользователя на странице профиля в настройках аккаунта
 * @returns {JSX.Element}
 * @constructor
 */
const AccountProfileCard = ({setProfileMode}) => {
    const user = useSelector(state => state.user);
    const {name, surname, patronymic, email, phone} = user;
    const values = [
        {title: "Имя", value: name},
        {title: "Фамилия", value: surname},
        {title: "Отчество", value: patronymic},
        {title: "Телефон", value: phone},
        {title: "Электронная почта", value: email},
        {title: "Пароль", value: "********"},
    ];

    /**
     * Переключиться на редактирование данных пользователя
     */
    const switchMode = () => {
        setProfileMode("edit");
    };

    return (
        <AccountEditableCard values={values} switchMode={switchMode} cardType="profile"/>
    );
};

export default AccountProfileCard;