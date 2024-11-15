import {useEffect, useState} from "react";
import LoadingPage from "../../pages/LoadingPage";
import Main from "../../pages/Main";
import {loadingList} from "../../../config/loadingList";
import {useLoader} from "../../../hooks/useLoader";
import {aboutUsLoader} from "../../../reducers/loaders/aboutUsLoader";
import {accountRoutesLoader} from "../../../reducers/loaders/accountRoutesLoader";
import {bannersLoader} from "../../../reducers/loaders/bannersLoader";
import {catalogLoader} from "../../../reducers/loaders/catalogLoader";
import {itemsLoader} from "../../../reducers/loaders/itemsLoader";
import {salesLoader} from "../../../reducers/loaders/salesLoader";
import {salesInfoLoader} from "../../../reducers/loaders/salesInfoLoader";

/**
 * Первичная загрузка сайта
 * @returns {JSX.Element}
 * @constructor
 */
const LoadSite = () => {
    const [completed, setCompleted] = useState(false);

    const aboutUs = useLoader("aboutUs", aboutUsLoader);
    const accountRoutes = useLoader("accountRoutes", accountRoutesLoader);
    const banners = useLoader("banners", bannersLoader);
    const items = useLoader("items", itemsLoader);
    const catalog = useLoader("catalog", catalogLoader);
    const sales = useLoader("sales", salesLoader);
    const salesInfo = useLoader("salesInfo", salesInfoLoader);

    useEffect(() => {
        setCompleted(aboutUs.length && accountRoutes.length && banners.length && Object.keys(items).length
            && catalog.length && sales.length && salesInfo.length)
    }, [aboutUs, accountRoutes, banners, items, catalog, sales, salesInfo]);

    return completed ? <Main/> : <LoadingPage/>;
};

export default LoadSite;