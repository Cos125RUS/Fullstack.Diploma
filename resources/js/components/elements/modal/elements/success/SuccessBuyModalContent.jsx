import {Link} from "react-router-dom";

/**
 * Текстовое содержимое модального окна подтверждения успешности оформления заказа
 * @param offer
 * @returns {JSX.Element}
 * @constructor
 */
const SuccessBuyModalContent = ({offer}) => {
    return (
        <div className="modal-success__content">
            <p className="modal-success__content-top">Номер заказа <span className="modal-success__content-number">{offer.id}</span>.<br/> Вы можете найти его в своем <Link to={`/account/orders&order=${offer.id}`} className="modal-success__content-link">личном кабинете.</Link></p>
            <p className="modal-success__content-bottom">Наш менеджер свяжется с вами для подтверждения заказа.</p>
        </div>
    );
};

export default SuccessBuyModalContent;