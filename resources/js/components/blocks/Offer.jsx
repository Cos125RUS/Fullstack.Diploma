import OfferCard from "../elements/cards/OfferCard";

/**
 * Предложения для клиентов
 * @returns {JSX.Element}
 * @constructor
 */
const Offer = () => {
    return (
        <section className="offer">
            <h2 className="offer__title">Вас могут заинтересовать</h2>
            <div className="offer__promotions">
                {[1,2,3,4].map((index) => (<OfferCard key={index}/>))}
            </div>
        </section>
    );
};

export default Offer;