import ConfirmBuyFormElement from "./ConfirmBuyFormElement";
import ConfirmBuyFormOptions from "./ConfirmBuyFormOptions";
import {useEffect, useState} from "react";
import ConfirmBuyFormSelect from "./ConfirmBuyFormSelect";
import ConfirmBuyFormConfirmBtn from "./ConfirmBuyFormConfirmBtn";
import {createOfferRequestData} from "../../../../../funcs/request/createOfferRequestData";
import {useDispatch, useSelector} from "react-redux";
import {confirmBuy} from "../../../../../reducers/siteSlice";
import ChamomilePreloader from "../../../preloaders/ChamomilePreloader";

/**
 * Форма подтверждения покупки
 * @returns {JSX.Element}
 * @constructor
 */
const ConfirmBuyForm = ({closeModal, setSuccess}) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [typeOptionsActiveIndex, setTypeOptionsActiveIndex] = useState(-1);
    const [payOptionsActiveIndex, setPayOptionsActiveIndex] = useState(-1);
    const [deliveryOptionsActiveIndex, setDeliveryOptionsActiveIndex] = useState(-1);
    const [payTitle, setPayTitle] = useState("способ оплаты");
    const [isLoading, setIsLoading] = useState(false);

    const payTitles = ["способ оплаты", "реквизиты компании"];

    useEffect(() => {
        typeOptionsActiveIndex !== -1 && setPayTitle(payTitles[typeOptionsActiveIndex]);
        payOptionsActiveIndex !== -1 && setPayOptionsActiveIndex(-1);
        deliveryOptionsActiveIndex !== -1 && setDeliveryOptionsActiveIndex(-1);
    }, [typeOptionsActiveIndex]);

    /**
     * Подтверждение отправки заявки
     */
    const confirm = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);
        const entryData = Object.fromEntries(formData);
        const requestData = createOfferRequestData(entryData, cart);
        sendRequest(requestData);
        //TODO добавить прелоадер ожидания
    };

    /**
     * Отправка заявки
     */
    const sendRequest = (requestData) => {
        //TODO заменить на реальный запрос к серверу
        const request = new Promise(resolve => {
            const data = {
                status: "success",
                payload: {
                    id: parseInt(String(Math.random()*10000)),
                    date: "2024-10-29",
                    companyId: 0,
                    stateIndex: 0,
                    sum: requestData.cart.total,
                }
            };
            setTimeout(() => resolve(JSON.stringify(data)), 1000);
        });

        request.then(json => JSON.parse(String(json)))
            .then(data => {
                if (data.status === "success") {
                    dispatch(confirmBuy(data.payload));
                    setSuccess(data.payload);
                } else {
                    //TODO добавить информирование пользователя о том, что именно он делает не так
                }
            })
            .catch(error => {
                console.error("Ошибка при отправке заявки\n" + error);
                //TODO добавить уведомление пользователя об ошибке на сервере
            })
            .finally(() => setIsLoading(false));
    };
    
    return (
        <form className="modal-confirm__form" onSubmit={e => confirm(e)}>
            <ConfirmBuyFormElement isActive={true} title="заказ от имени" isLast={false}>
                <ConfirmBuyFormOptions name="type" options={["физлица", "юрлица"]} isLast={false}
                                       setOptions={setTypeOptionsActiveIndex}/>
            </ConfirmBuyFormElement>
            <ConfirmBuyFormElement isActive={typeOptionsActiveIndex !== -1} title={payTitle} isLast={false}>
                {typeOptionsActiveIndex !== 1 ?
                    <ConfirmBuyFormOptions name="pay" options={["наличные", "перевод"]} isLast={false}
                                           setOptions={setPayOptionsActiveIndex}/>
                    :
                    <ConfirmBuyFormSelect setOptions={setPayOptionsActiveIndex}/>
                }
            </ConfirmBuyFormElement>
            <ConfirmBuyFormElement isActive={payOptionsActiveIndex !== -1} title="способ доставки" isLast={true}>
                <ConfirmBuyFormOptions name="delivery" options={["самовывоз", "доставка"]} isLast={true}
                                       setOptions={setDeliveryOptionsActiveIndex}/>
            </ConfirmBuyFormElement>
            {!isLoading ? <ConfirmBuyFormConfirmBtn isActive={deliveryOptionsActiveIndex !== -1}/> :
                <ChamomilePreloader className="loader-btn"/> }
        </form>
    );
};

export default ConfirmBuyForm;