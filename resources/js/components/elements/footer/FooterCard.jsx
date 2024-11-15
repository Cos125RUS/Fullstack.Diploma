const FooterCard = ({title, content}) => {
    return (
        <div className="footer__company-box">
            <div className="footer__card-box">
                <h3 className="footer__card-title">{title}</h3>
            </div>
            {content}
        </div>
    );
};

export default FooterCard;