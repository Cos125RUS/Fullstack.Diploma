import LoadData from "./LoadData";
import {userLoader} from "../../../reducers/loaders/userLoader";
import AuthenticatedAccountBtn from "../../elements/header/top/accaunt/AuthenticatedAccountBtn";
import ChamomilePreloader from "../../elements/preloaders/ChamomilePreloader";

/**
 * Загрузка данных пользователя
 * @returns {JSX.Element}
 * @constructor
 */
const LoadUser = () => {
    return (
        <LoadData name="user" preloader={<ChamomilePreloader className="loader-icon"/>} loader={userLoader}
                  component={(data) => <AuthenticatedAccountBtn data={data}/>}/>
    );
};

export default LoadUser;