import MediaPrice from "../../elements/media/MediaPrice";
import Breadcrumbs from "../../elements/nav/Breadcrumbs";
import ProductCatalogMedia from "../../elements/product/media/ProductCatalogMedia";

const ProductTop = ({item, routItem, categoryName}) => {
    const title = `${routItem.title} ${item.title}`;
    const route = [
        {
            title: "Главная",
            link: "/"
        },
        routItem,
        {
            title: item.title,
            link: null
        }
    ];

    return (
        <section className="product-top main-top">
            <MediaPrice/>
            <ProductCatalogMedia/>
            <div className="main-top__left product-top__left">
                <img src={"./img/catalog/products/items/" + categoryName + ".png"} alt="steel" className="product-top__left-img"/>
            </div>
            <Breadcrumbs title={title} route={route} className="product"/>
        </section>
    );
};

export default ProductTop;