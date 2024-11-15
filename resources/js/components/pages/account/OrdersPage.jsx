import PageContent from "../../blocks/content/PageContent";
import LoadOrders from "../../hoc/load/LoadOrders";

/**
 * Страница истории заказов пользователя
 * @returns {JSX.Element}
 * @constructor
 */
const OrdersPage = () => {
    return (
        <PageContent pageClassName="account__orders">
            <LoadOrders/>
        </PageContent>
    );
};

export default OrdersPage;