import ProductInfoDescription from "./info/ProductInfoDescription";
import ProductInfoSpecifications from "./info/ProductInfoSpecifications";

const ProductInfo = ({item}) => {
    return (
        <div className="product-main__info">
            <ProductInfoDescription description={item.description}/>
            <ProductInfoSpecifications specifications={item.specifications}/>
        </div>
    );
};

export default ProductInfo;