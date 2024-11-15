import CartTotalSum from "./CartTotalSum";
import CartTotalBtn from "./CartTotalBtn";
import WithModal from "../../../hoc/modal/WithModal";
import ConfirmBuyModal from "../../modal/ConfirmBuyModal";
import SideBar from "../../../blocks/side_bar/SideBar";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import SwitchModal from "../../modal/SwitchModal";
import SuccessBuyModal from "../../modal/success/SuccessBuyModal";

/**
 * Боковое меню корзины с суммой добавленных товаров
 * @param sum
 * @returns {JSX.Element}
 * @constructor
 */
const CartTotal = ({sum}) => {
    const isAuth = useSelector(state => state.isAuth);
    const [success, setSuccess] = useState(null);
    const [activeModal, setActiveModal] = useState("login");

    const modals = {
        confirm: (handleModalClose) => <ConfirmBuyModal closeModal={handleModalClose} setSuccess={setSuccess}/>,
        login: (handleModalClose) => <SwitchModal closeModal={handleModalClose}/>,
        success: (handleModalClose) => <SuccessBuyModal closeModal={handleModalClose} offer={success} setActiveModal={setActiveModal}/>,
    };

    useEffect(() => {
        setActiveModal(isAuth ? "confirm" : "login");
    }, [isAuth]);

    useEffect(() => {
        success && setActiveModal("success");
    }, [success]);

    return (
        <SideBar className="cart-main__total">
            <CartTotalSum sum={sum}/>
            <WithModal component={(handleModalOpen) => <CartTotalBtn handleModalOpen={handleModalOpen}/>}
                       modal={modals[activeModal]}/>
            <p className="cart-main__total-info">После оформления с вами свяжутся для подтверждения</p>
        </SideBar>
    );
};

export default CartTotal;