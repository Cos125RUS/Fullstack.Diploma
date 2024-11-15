import ModalInput from "../ModalInput";
import ModalInputPassword from "./ModalInputPassword";
import ModalForm from "../ModalForm";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../../../../../reducers/siteSlice";
import {useEffect, useState} from "react";
import ModalWarning from "../ModalWarning";

/**
 * Заполняемые поля формы авторизации и кнопка входа
 * @returns {JSX.Element}
 * @constructor
 */
const ModalLoginForm = ({closeModal}) => {
    const dispatch = useDispatch();
    const env = useSelector(state => state.env);
    const [isLoading, setIsLoading] = useState(false);
    const [userNotFoundWarning, setUserNotFoundWarning] = useState(false);
    const [userNotFoundFail, setUserNotFoundFail] = useState(false);
    const [wrongPasswordWarning, setWrongPasswordWarning] = useState(false);
    const [wrongPasswordFail, setWrongPasswordFail] = useState(false);

    useEffect(() => {
        /**
         * Убрать красный цвет рамки и текста у поля ввода email-а
         */
        const emailClearRedColorStyle = () => {
            setUserNotFoundFail(false);
        };

        /**
         * Убрать красный цвет рамки и текста у поля ввода пароля
         */
        const passwordClearRedColorStyle = () => {
            setWrongPasswordFail(false);
        }

        const inputEmailEl = document.querySelector("#email");
        inputEmailEl?.addEventListener("change", emailClearRedColorStyle);

        const inputPasswordEl = document.querySelector("#password");
        inputPasswordEl?.addEventListener("change", passwordClearRedColorStyle);

        return () => {
            inputEmailEl?.removeEventListener("change", emailClearRedColorStyle);
            inputPasswordEl?.removeEventListener("change", passwordClearRedColorStyle);
        };
    }, []);

    /**
     * Аутентифицировать пользователя
     * @param e
     */
    const login = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);
        const entryData = Object.fromEntries(formData);
        sendRequest(entryData);
    };

    /**
     * Отправка запроса на сервер
     * @param data
     */
    const sendRequest = (data) => {
        //Отправка запроса на сервер
        const request = fetch(`${env.resource}/login`, {
            method: "POST",
            headers: env.jsonHeaders,
            body: JSON.stringify(data),
        });

        //Обработка ответа сервера
        request.then(response => response.json())
            .then(data => {
                setIsLoading(false);
                if (data.status === "success") {
                    dispatch(authUser());
                    closeModal();
                } else if (parseInt(data.code)) {
                    //пароль указан неверно
                    setWrongPasswordWarning(true);
                    setTimeout(() => setWrongPasswordWarning(false), 3000);
                    setWrongPasswordFail(true);
                } else {
                    //пользователь не найден
                    setUserNotFoundWarning(true);
                    setTimeout(() => setUserNotFoundWarning(false), 3000);
                    setUserNotFoundFail(true);
                }
            })
            .catch(error => {
                //TODO добавить уведомление пользователя об ошибке на сервере
                console.error("Ошибка при отправке запроса на авторизацию\n" + error);
            });
    };

    return (
        <ModalForm onSubmit={login} action={""/*//TODO добавить*/} submitText="войти" loading={isLoading}>
            <ModalInput name="email" placeholder="Электронная почта" required={true} type="email" id="email"
                        isFail={userNotFoundFail}/>
            <ModalInputPassword isFail={wrongPasswordFail} id="password"/>
            {userNotFoundWarning && <ModalWarning text="Email не найден" row={1}/>}
            {wrongPasswordWarning && <ModalWarning text="Неверный пароль" row={2}/>}
        </ModalForm>
    );
};

export default ModalLoginForm;