import {Link} from "react-router-dom";
import CartSvg from "../../svg/CartSvg";
import {useSelector} from "react-redux";
import {StyledCartCounter} from "./StyledCartCounter";

const HeaderCart = () => {
    const count = useSelector(state => state.cart.count);

    return (
        <StyledCartCounter className="header__cart" count={count}>
            <div className="header__cart-background"></div>
            <Link to="/cart" className="header__cart-link">
                <CartSvg/>
            </Link>
        </StyledCartCounter>
    );
};

export default HeaderCart;