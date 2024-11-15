import {Link} from "react-router-dom";
import SmallEnvelopeSvg from "../../svg/SmallEnvelopeSvg";
import TelegramSvg from "../../svg/TelegramSvg";
import {useSelector} from "react-redux";

const FooterAddressContent = () => {
    const email = useSelector(state => state.env.email);
    const tgLink = useSelector(state => state.env.telegramLink);

    return <div className="footer__address-content">
        <ul className="footer__address-list">
            <li className="footer__address-item">офис:Бородинская 65/4 оф.17</li>
            <li className="footer__address-item">склад: Рыбацкая 56 оф.10-11</li>
        </ul>
        <ul className="footer__address-links">
            <li>
                <Link to={"mailto:" + email} className="footer__address-link">
                    <SmallEnvelopeSvg/>
                    <p>STEELEA@MAIL.RU</p>
                </Link>
            </li>
            <li>
                <Link to={tgLink} className="footer__address-link">
                    <TelegramSvg/>
                    <p>@STEELDV_BOT</p>
                </Link>
            </li>
        </ul>
    </div>;
};

export default FooterAddressContent;