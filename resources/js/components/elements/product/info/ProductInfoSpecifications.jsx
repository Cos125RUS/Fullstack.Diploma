import ProductInfoSpecification from "./ProductInfoSpecification";

const ProductInfoSpecifications = ({specifications}) => {
    const specificationsArray = [{title: "ХАРАКТЕРИСТИКИ", value: ""}, ...Object.values(specifications)];

    return (
        <div className="product-main__specifications">
            {specificationsArray.map((item, index) => <ProductInfoSpecification
                key={index} title={item.title} value={item.value}/>)}
        </div>
    );
};

export default ProductInfoSpecifications;