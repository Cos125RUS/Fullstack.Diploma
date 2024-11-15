const ProductInfoDescription = ({description}) => {
    const text = description.join("<br/><br/>");

    return (
        <div className="product-main__description">
            <h2 className="product-main__description-title">ОПИСАНИЕ</h2>
            <p className="product-main__description-text" dangerouslySetInnerHTML={{__html: text}}></p>
        </div>
    )
        ;
};

export default ProductInfoDescription;