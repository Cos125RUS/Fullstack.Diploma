import FooterLogo from "../logo/FooterLogo";
import FooterLogoBottomText from "./FooterLogoBottomText";

const FooterLogoBox = () => {
    return (
        <div className="footer__logo-box">
            <FooterLogo/>
            <FooterLogoBottomText/>
        </div>
    );
};

export default FooterLogoBox;