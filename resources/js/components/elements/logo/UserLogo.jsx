import {useSelector} from "react-redux";

/**
 * Лого с первой буквой имени пользователя
 * @returns {JSX.Element}
 * @constructor
 */
const UserLogo = () => {
    const username = useSelector(state => state.user.username);

    return (
        <p className="modal-success__user-logo uppercase">{username[0]}</p>
    );
};

export default UserLogo;