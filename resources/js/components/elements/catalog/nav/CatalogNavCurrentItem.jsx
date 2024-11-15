import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

/**
 * Активная категория каталога
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogNavCurrentItem = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const currentCategory = query.get('category');
    const currentSubcategory = query.get('subcategory');
    const [currentIndex, setCurrentIndex] = useState(currentSubcategory ? children.filter(child => child.name === currentSubcategory)[0].index : 1);
    const closeMenuBtnElement = document.querySelector("#catalog-menu-checkbox");

    /**
     * Смена активной подкатегории
     * @param index
     * @param name
     */
    const changeSubcategory = (index, name) => {
        setCurrentIndex(index);
        const newQuery = new URLSearchParams();
        newQuery.set('category', currentCategory);
        newQuery.set('subcategory', name);
        navigate(`${location.pathname}?${newQuery.toString()}`);

        closeMenuBtnElement.checked = false; //Закрыть меню мобильной версии
    }

    return (
        <li className="catalog-main__current-product">
            <ul className="catalog-main__current-ul catalog-main__current-item">
                {children.map((child) => (
                    <li className={"current-item" + (child.index === currentIndex ? " current-item__active" : "")}
                        key={child.index} onClick={() => changeSubcategory(child.index, child.name)}>{child.title}</li>
                ))}
            </ul>
        </li>
    );
};

export default CatalogNavCurrentItem;