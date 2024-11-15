import SwitchBtn from "../../../buttons/SwitchBtn";

const ProductOptionsCutting = ({cutting}) => {
    return (
        <div className="catalog-main__product-option">
            <h4>резка</h4>
            <SwitchBtn cutting={cutting}/>
        </div>
    );
};

export default ProductOptionsCutting;