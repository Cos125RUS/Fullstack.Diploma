import SmallProductCard from "../../../elements/cards/SmallProductCard";

const IndexCatalogCards = ({products}) => {
    return (
        <div className="index-catalog__cards">
            {products.map((product, index) => (<SmallProductCard key={index} product={product}/>))}
        </div>
    );
};

export default IndexCatalogCards;