import ModalForm from "../ModalForm";
import ModalInput from "../ModalInput";
import ModalInputPassword from "../login/ModalInputPassword";
import {checkRegistration} from "../../../../../funcs/check/checkRegistration";

/**
 * Форма регистрации
 * @returns {JSX.Element}
 * @constructor
 */
const ModalRegistration = ({setEmail, setActiveModal}) => {
    /**
     * Регистрация нового пользователя
     * @param e
     */
    const registration = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entryData = Object.fromEntries(formData);
        try {
            checkRegistration(entryData);
            setEmail(entryData.email);
            setActiveModal("successRegistration");
            //TODO Добавить отправку данных на сервер
        } catch (error) {
            const message = error.message;
            //TODO обработка некорректновведённых данных
        }
    };
    return (
        <ModalForm onSubmit={registration} action={""/*//TODO добавить*/} submitText="зарегистрироваться">
            <ModalInput name="name" placeholder="Имя*" required={true}/>
            <ModalInput name="phone" placeholder="Телефон" type="tel"/>
            <ModalInput name="email" placeholder="Электронная почта*" type="email" required={true}/>
            <ModalInput name="password" placeholder="Пароль*" type="password" required={true}/>
            <ModalInput name="confirm" placeholder="Пароль ещё раз*" type="password" required={true}/>
        </ModalForm>
    );
};

export default ModalRegistration;