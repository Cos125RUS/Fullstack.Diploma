import HeaderMenuContactItem from "./HeaderMenuContactItem";
import SmallEnvelopeSvg from "../../../svg/SmallEnvelopeSvg";
import TelegramSvg from "../../../svg/TelegramSvg";
import {useSelector} from "react-redux";

const HeaderMenuContacts = () => {
    const email = useSelector(state => state.env.email);
    const tgLink = useSelector(state => state.env.telegramLink);

    return (
        <div className="header-menu__contacts">
            <HeaderMenuContactItem link={"mailto:" + email} title="STEELEA@MAIL.RU" icon={<SmallEnvelopeSvg/>}/>
            <HeaderMenuContactItem link={tgLink} title="@STEELDV_BOT" icon={<TelegramSvg/>}/>
        </div>
    );
};

export default HeaderMenuContacts;