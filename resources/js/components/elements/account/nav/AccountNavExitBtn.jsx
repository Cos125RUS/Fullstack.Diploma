import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../../../reducers/siteSlice";

/**
 * Кнопка разлогинивания
 * @param icon
 * @returns {JSX.Element}
 * @constructor
 */
const AccountNavExitBtn = ({icon}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    /**
     * Выйти из учётной записи
     * @param e
     */
    const logOut = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
        navigate('/');
    };

    return (
        <li className="account__nav-li">
            <button className="account__nav-link usable invisible-background-btn"
                    onClick={e => logOut(e)}>
                {icon}
                <p>Выйти</p>
            </button>
        </li>
    );
};

export default AccountNavExitBtn;