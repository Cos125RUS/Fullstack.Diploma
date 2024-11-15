import classNames from "classnames";

/**
 * Значёк авторизированного пользователя
 * @param name имя пользователя
 * @param color цвет значка
 * @param circleCN дополнительные имена классов для кольца
 * @returns {JSX.Element}
 * @constructor
 */
const AuthenticatedUserAccountIcon = ({name, color, circleCN}) => {
    const circleClassName = classNames('auth-user__circle', `auth-user__circle__${color}`, circleCN);
    const charClassName = classNames('auth-user__char', `auth-user__char__${color}`);

    return (
        <div className={circleClassName}>
            <p className={charClassName}>{name[0]}</p>
        </div>
    );
};

export default AuthenticatedUserAccountIcon;