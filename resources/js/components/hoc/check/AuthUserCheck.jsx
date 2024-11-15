import {useSelector} from "react-redux";
import LoadAccountRoutes from "../load/LoadAccountRoutes";
import NeedAuth from "../redirects/NeedAuth";

/**
 * Проверка пользователя на авторизованность
 * @returns {JSX.Element}
 * @constructor
 */
const AuthUserCheck = () => {
    const isAuth = useSelector(state => state.isAuth);

    return isAuth ? <LoadAccountRoutes/> : <NeedAuth/>;
};

export default AuthUserCheck;