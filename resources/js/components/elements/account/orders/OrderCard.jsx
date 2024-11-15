import WideCard from "../../cards/WideCard";
import OrderCardContent from "./OrderCardContent";

/**
 * Карточка заказа
 * @param order
 * @param key
 * @returns {JSX.Element}
 * @constructor
 */
const OrderCard = ({order}) => {
    return (
        <WideCard className="account-order__card">
            <OrderCardContent order={order}/>
        </WideCard>
    );
};

export default OrderCard;