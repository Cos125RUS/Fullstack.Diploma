import {Link} from "react-router-dom";

const FooterCompanyContent = () => {
    return (
        <div className="footer__company-content">
            <Link to="#" className="footer__company-link uppercase">О КОМПАНИИ</Link>
            <Link to="#" className="footer__company-link uppercase">ДОКУМЕНТЫ</Link>
        </div>
    );
};

export default FooterCompanyContent;