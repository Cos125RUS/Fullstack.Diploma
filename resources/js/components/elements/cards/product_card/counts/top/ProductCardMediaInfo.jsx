import ProductCardInfoBtn from "../../options/ProductCardInfoBtn";
import InfoModal from "../../../../modal/InfoModal";
import WithModal from "../../../../../hoc/modal/WithModal";

const ProductCardMediaInfo = ({infoId}) => {
    return (
        <div className="counts__info-box">
            <WithModal component={(handleModalOpen) => <ProductCardInfoBtn handleModalOpen={handleModalOpen}/>}
                       modal={(handleModalClose) => <InfoModal handleModalClose={handleModalClose} infoId={infoId}/>}/>
        </div>
    );
};

export default ProductCardMediaInfo;