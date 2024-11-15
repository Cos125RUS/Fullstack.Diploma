import {aboutUsLoader} from "../reducers/loaders/aboutUsLoader";
import {accountRoutesLoader} from "../reducers/loaders/accountRoutesLoader";
import {bannersLoader} from "../reducers/loaders/bannersLoader";
import {itemsLoader} from "../reducers/loaders/itemsLoader";
import {salesLoader} from "../reducers/loaders/salesLoader";
import {salesInfoLoader} from "../reducers/loaders/salesInfoLoader";
import {catalogLoader} from "../reducers/loaders/catalogLoader";

/**
 * Список предзагружаемых сущностей
 * @type {*[]}
 */
export const loadingList = [
    {name: "aboutUs", loader: aboutUsLoader},
    {name: "accountRoutes", loader: accountRoutesLoader},
    {name: "banners", loader: bannersLoader},
    {name: "items", loader: itemsLoader},
    {name: "catalog", loader: catalogLoader},
    {name: "sales", loader: salesLoader},
    {name: "salesInfo", loader: salesInfoLoader},
];