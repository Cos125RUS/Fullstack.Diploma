import SimplePreloader from "../../elements/preloaders/SimplePreloader";
import LoadData from "./LoadData";
import {accountRoutesLoader} from "../../../reducers/loaders/accountRoutesLoader";
import AccountPage from "../../pages/AccountPage";

/**
 * Загрузка данных о страницах личного кабинета
 * @returns {*}
 * @constructor
 */
const LoadAccountRoutes = () => {
    return (
        <LoadData name="accountRoutes" preloader={<SimplePreloader/>} loader={accountRoutesLoader}
                  component={(data) => <AccountPage routes={data} />}/>
    );
};

export default LoadAccountRoutes;