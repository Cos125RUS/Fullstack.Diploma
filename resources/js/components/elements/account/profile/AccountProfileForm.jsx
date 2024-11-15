import CSRF from "../../forms/CSRF";
import CardCrossBtn from "../../buttons/CardCrossBtn";
import {useDispatch, useSelector} from "react-redux";
import {switchLoadingUser, updateUserProfile} from "../../../../reducers/siteSlice";
import AccountFormLines from "../../cards/account_card/AccountFormLines";

/**
 * Форма редактирования данных пользователя на странице профиля в настройках аккаунта
 * @returns {JSX.Element}
 * @constructor
 */
const AccountProfileForm = ({setProfileMode}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const {name, surname, patronymic, email, phone} = user;
    const values = [
        {name: "name",title: "Имя", value: name, type: "text", required: true},
        {name: "surname",title: "Фамилия", value: surname, type: "text", required: false},
        {name: "patronymic",title: "Отчество", value: patronymic, type: "text", required: false},
        {name: "phone",title: "Телефон", value: phone, type: "tel", required: false},
        {name: "email",title: "Электронная почта", value: email, type: "email", required: true},
        {name: "password",title: "Пароль", value: "", type: "password", required: true},
        {name: "confirm_password",title: "Повторить пароль", value: "", type: "password", required: true},
    ];

    /**
     * Закрыть форму редактирования
     * @param e
     */
    const close = (e) => {
        e.preventDefault();
        setProfileMode("show");
    };

    /**
     * Сохранение введённых значений
     */
    const save = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entryData = Object.fromEntries(formData);
        updateUserData(entryData);
    };

    /**
     * Запрос к серверу на обновление пользовательских данных
     * @param userData
     */
    const updateUserData = (userData) => {
        dispatch(switchLoadingUser());
        //TODO заменить на реальный запрос к серверу
        const request = new Promise(resolve =>
            setTimeout(() => resolve(JSON.stringify(userData)), 1000));

        request.then(json => JSON.parse(String(json)))
            .then(data => dispatch(updateUserProfile(data)))
            .catch(error => console.error("Ошибка запроса к серверу на обновление пользовательских данных\n" + error))
            .finally(() => dispatch(switchLoadingUser()));
    };

    return (
        <form className="account-profile__form account__form" onSubmit={e => save(e)}>
            <CardCrossBtn action={close}/>
            <CSRF/>
            <AccountFormLines values={values} classType="profile"/>
        </form>
    );
};

export default AccountProfileForm;