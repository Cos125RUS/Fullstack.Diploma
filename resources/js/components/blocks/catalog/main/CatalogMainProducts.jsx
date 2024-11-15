import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import UpdateProductItem from "../../../hoc/update/UpdateProductItem";
import CatalogCleanBox from "../../../elements/catalog/CatalogCleanBox";

/**
 * Список товаров в каталоге
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogMainProducts = ({data}) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const navigate = useNavigate();

    // Активация первой подкатегории в списке подкатегорий
    if (!query.get('subcategory')) {
        query.set('subcategory', Object.keys(data[query.get('category')].subcategory)[0]);
    }

    useEffect(() => {
        navigate(`${location.pathname}?${query.toString()}`);
    }, []);

    const [categoryName, setCategoryName] = useState(query.get('category'));
    const [subcategoryName, setSubcategoryName] = useState(query.get('subcategory'));
    const [categoryTitle, setCategoryTitle] = useState(data[categoryName].title);
    const [subcategoryTitle, setSubcategoryTitle] = useState(data[categoryName].subcategory[subcategoryName].title)
    const [infoId, setInfoId] = useState(data[categoryName].subcategory[subcategoryName].infoId);
    const [options, setOptions] = useState(data[categoryName].subcategory[subcategoryName].options);
    const [counts, setCounts] = useState(data[categoryName].subcategory[subcategoryName].counts);
    // const [items, setItems] = useState(data[categoryName].subcategory[subcategoryName].items);

    useEffect(() => {
        setCategoryName(query.get('category'));
        setSubcategoryName(query.get('subcategory'));
        // setItems(data[categoryName].subcategory[subcategoryName].items);
        setInfoId(data[categoryName].subcategory[subcategoryName].infoId);
        setOptions(data[categoryName].subcategory[subcategoryName].options);
        setCounts(data[categoryName].subcategory[subcategoryName].counts);
        setCategoryTitle(data[categoryName].title);
        setSubcategoryTitle(data[categoryName].subcategory[subcategoryName].title);
    }, [query]);

    return (
        <div className="catalog-main__product-box">
            <ul className="card-list">
                {
                    data[categoryName].subcategory[subcategoryName].items.length ?
                        data[categoryName].subcategory[subcategoryName].items.map((item, index) =>
                            (<UpdateProductItem key={index} item={{
                                ...item,
                                category: categoryName,
                                subcategory: subcategoryName,
                                infoId: infoId,
                                options: options,
                                counts: counts,
                                title: `${categoryTitle} ${subcategoryTitle} ${item.title}`,
                                use: {},
                            }}/>))
                        : <CatalogCleanBox/>
                }
            </ul>
        </div>
    );
};

export default CatalogMainProducts;