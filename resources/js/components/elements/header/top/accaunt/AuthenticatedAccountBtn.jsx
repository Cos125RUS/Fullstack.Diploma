import AuthenticatedUserAccountIcon from "./AuthenticatedUserAccountIcon";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

/**
 * Кнопка входа в личный кабинет аутентифицированного пользователя
 * @returns {JSX.Element}
 * @constructor
 */
const AuthenticatedAccountBtn = ({user}) => {
    const username = useSelector(state => state.user.username);

    return (
        <Link to={"/account"} className="usable">
            <AuthenticatedUserAccountIcon name={username} color="yellow" circleCN="invisible-background-btn flex__ai-center"/>
        </Link>
    );
};

export default AuthenticatedAccountBtn;