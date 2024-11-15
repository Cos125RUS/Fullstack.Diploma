import SalesSectionContent from "./SalesSectionContent";

/**
 * Содержимое блока "Для покупателей"
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const SalesSection = ({item}) => {
    return (
        <article className="sales-section shadow" id={item.name}>
            <img src={item.img} alt={item.alt}/>
            <SalesSectionContent title={item.title} text={item.text}/>
        </article>
    );
};

export default SalesSection;