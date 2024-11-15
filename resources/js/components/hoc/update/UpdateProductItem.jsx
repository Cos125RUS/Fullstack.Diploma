import {useLocation} from "react-router-dom";
import SimplePreloader from "../../elements/preloaders/SimplePreloader";
import ProductCard from "../../elements/cards/ProductCard";

/**
 * Обновление карточек товара
 * @constructor
 */
const UpdateProductItem = ({item}) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const check = () => {
      return item.category === query.get('category') && item.subcategory === query.get('subcategory');
    };

    return check() ? <ProductCard item={item}/> : <SimplePreloader/>;
};

export default UpdateProductItem;