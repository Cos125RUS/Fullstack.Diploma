import Offer from "../blocks/Offer";
import ProductTop from "../blocks/product/ProductTop";
import ProductMain from "../blocks/product/ProductMain";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const ProductPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const items = useSelector(state => state.items);
    const category = items[query.get('category')];
    const subcategory = category.subcategory[query.get('subcategory')];
    const item = subcategory.items.filter(it => it.id === parseInt(query.get('id')))[0];

    const title = `${category.title} ${subcategory.title}`;
    const link = `/catalog?category=${category.name}&subcategory=${subcategory.name}`;

    return (
        <main className="product main">
            <ProductTop item={item} routItem={{title: title, link: link}} categoryName={category.name}/>
            <ProductMain item={{...item,
                category: category.name,
                subcategory: subcategory.name,
                infoId: subcategory.infoId,
                options: subcategory.options,
                counts: subcategory.counts,
                title: `${category.title} ${subcategory.title} ${item.title}`,
                use: {},
            }}/>
            {/*<Offer/>*/}
        </main>
    );
};

export default ProductPage;
