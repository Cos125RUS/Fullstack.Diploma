import SalesSection from "../../../elements/sales/SalesSection";

/**
 * Блок "Для покупателей"
 * @param data
 * @returns {*}
 * @constructor
 */
const SalesSections = ({data}) => {
    return data.map((item, index) => <SalesSection key={index} item={item}/>);
};

export default SalesSections;