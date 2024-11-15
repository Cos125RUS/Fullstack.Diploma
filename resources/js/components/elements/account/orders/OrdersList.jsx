import CardsList from "../../cards/CardsList";
import OrderCard from "./OrderCard";

/**
 * Список заказов
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
const OrdersList = ({data}) => {
    return (
        <CardsList>
            {data.map((order, index) => <OrderCard order={{...order, index: index + 1}} key={index}/>)}
        </CardsList>
    );
};

export default OrdersList;