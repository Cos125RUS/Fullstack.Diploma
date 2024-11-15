import {Link} from "react-router-dom";
import ProductCardAnimation from "./ProductCardAnimation";

const SmallProductCard = ({product}) => {
    return (
        <Link to={`/catalog?category=${product.name}&subcategory=${product.children[0].name}`}
              className="index-catalog__card product-card">
            <div className="product-card__hover">
                <ProductCardAnimation className="index-catalog__card-animation"/>
            </div>
            <div className="index-catalog__card-box shadow">
                <img src={"./img/index_catalog/cards/"+product.name+".png"} className="index-catalog__card-img"
                     alt="product card picture"/>
                <p className="index-catalog__card-name">{product.title}</p>
            </div>
        </Link>
    );
};

export default SmallProductCard;