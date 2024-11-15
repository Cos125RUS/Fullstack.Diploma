import {useDispatch, useSelector} from "react-redux";
import {companyListLoader} from "../../../../reducers/loaders/companyListLoader";
import classNames from "classnames";
import {useEffect, useState} from "react";
import SimplePreloader from "../../preloaders/SimplePreloader";

/**
 * Содержимое карточки заказа
 * @param order
 * @param index
 * @returns {JSX.Element}
 * @constructor
 */
const OrderCardContent = ({order}) => {
    const dispatch = useDispatch();

    const statusList = {
        registration: {name: "оформляется", colorClass: "yellow"},
        waitPay: {name: "ждёт оплаты", colorClass: "pink"},
        ready: {name: "готов к отгрузке", colorClass: "darkblue"},
        completed: {name: "отгружен", colorClass: "blue"},
    };

    const companyList = useSelector(state => state.companyList);
    if (!companyList.length) {
        dispatch(companyListLoader());
    }

    const [company, setCompany] = useState(order.companyId ? "..." : "Частное лицо");
    useEffect(() => {
        if (order.companyId && companyList.length) {
            setCompany(companyList.filter(company => company.id === order.companyId)[0].name);
        }
    }, [companyList]);

    const status = statusList[order.state];

    let sum = String(parseInt(order.sum).toLocaleString());
    let fraction = String(order.sum * 100 % 100);
    if (fraction.length === 1) fraction = '0' + fraction;
    sum += ` ${fraction}р.`;

    return (
        <div className="account-order__card-content">
            <div className="account-order__card-content-side">
                <div className="account-order__card-content-item">
                    <h3>№ {String(order.index).padStart(5, "0")}</h3>
                    <p>от {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div className="account-order__card-content-item">
                    <p> </p>
                    <p>{company}</p>
                </div>
            </div>
            <div className="account-order__card-content-side">
                <div className="account-order__card-content-item">
                    <p>Статус заказа</p>
                    <span className={classNames(`account-order__card-status-${status.colorClass}`)}>{status.name}</span>
                </div>
                <div className="account-order__card-content-item account-order__card-content-sum">
                    <p>Сумма</p>
                    <h2>{sum}</h2>
                </div>
            </div>
        </div>
    );
};

export default OrderCardContent;