import Redirect from "./Redirect";

/**
 * Блокировка доступа к закрытому контенту
 * @returns {JSX.Element}
 * @constructor
 */
const NeedAuth = () => {
    //TODO добавить оповещение пользователя о необходимости авторизироваться или открыть форму авторизации

    return <Redirect to="/"/>;
};

export default NeedAuth;