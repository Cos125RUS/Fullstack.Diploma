import LoadData from "./LoadData";
import SimplePreloader from "../../elements/preloaders/SimplePreloader";
import {ordersLoader} from "../../../reducers/loaders/ordersLoader";
import OrdersList from "../../elements/account/orders/OrdersList";

/**
 * Загрузка списка заказов
 * @returns {JSX.Element}
 * @constructor
 */
const LoadOrders = () => {
    return (
        <LoadData name="orders" preloader={<SimplePreloader/>} loader={ordersLoader}
                  component={(data) => <OrdersList data={data}/>}/>
    );
};

export default LoadOrders;