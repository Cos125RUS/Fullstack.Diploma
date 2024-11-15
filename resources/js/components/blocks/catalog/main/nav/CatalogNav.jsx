import {useLocation} from "react-router-dom";
import CatalogNavItemBox from "../../../../elements/catalog/nav/CatalogNavItemBox";

const CatalogNav = ({products}) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const currentItem = query.get('category');

    return (
        <ul className="catalog-main__ul">
            {products.map((item, index) => (
                <CatalogNavItemBox key={index} item={item} currentItem={currentItem}/>
            ))}
        </ul>
    );
};

export default CatalogNav;