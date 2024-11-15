
const ProductInfoSpecification = ({title, value}) => {
    return (
        <div className="product-main__specifications-box">
            <h2 className="product-main__specifications-title">{title}</h2>
            <p className="product-main__specifications-value">{value}</p>
        </div>
    );
};

export default ProductInfoSpecification;