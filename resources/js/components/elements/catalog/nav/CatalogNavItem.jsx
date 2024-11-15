import {useLocation, useNavigate} from "react-router-dom";

const CatalogNavItem = ({item}) => {
    const location = useLocation();
    const navigator = useNavigate();

    const changeItem = () => {
        if (location.search.replace("?", "") !== item.name) {
            navigator(`/catalog?category=${item.name}&subcategory=${item.children[0].name}`);
        }
    }

    return (
        <li className="catalog-main__item" onClick={changeItem}>
            <img src={"img/catalog/products/nav/" + item.name + ".png"} alt={"steel " + item.name}/>
            <p className="catalog-main__item-name">{item.title}</p>
        </li>
    );
};

export default CatalogNavItem;