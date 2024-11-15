import FooterLogoBox from "../elements/footer/FooterLogoBox";
import FooterCard from "../elements/footer/FooterCard";
import FooterCompanyContent from "../elements/footer/footer_cards_content/FooterCompanyContent";
import FooterAddressContent from "../elements/footer/footer_cards_content/FooterAddressContent";
import FooterPhonesContent from "../elements/footer/footer_cards_content/FooterPhonesContent";


const Footer = () => {
    // Заглушки
    const cards = [
        {title: "КОМПАНИЯ", content: (<FooterCompanyContent/>)},
        {title: "АДРЕСА", content: (<FooterAddressContent/>)},
        {title: "ТЕЛЕФОНЫ", content: (<FooterPhonesContent/>)},
    ];

    return (
        <footer className="footer" id="footer">
            <div className="footer__box">
                <FooterLogoBox/>
                {cards.map((card, index) => (<FooterCard key={index} title={card.title}
                                                         content={card.content}/>))}
            </div>
            <div className="footer__bottom-line"></div>
        </footer>
    );
};

export default Footer;