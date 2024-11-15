import ProductCardInfoBtn from "./ProductCardInfoBtn";
import WithModal from "../../../../hoc/modal/WithModal";
import InfoModal from "../../../modal/InfoModal";

/**
 * Блок с кнопкой открытия модального окна со справочной информацией
 * @param link
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardInfo = ({infoId}) => {
    return (
        <div className="catalog-main__product-option">
            <h4>справка</h4>
            <div className="option__info-box">
                <WithModal component={(handleModalOpen) => <ProductCardInfoBtn handleModalOpen={handleModalOpen}/>}
                           modal={(handleModalClose) => <InfoModal handleModalClose={handleModalClose} infoId={infoId}/>}/>
            </div>
        </div>
    );
};

export default ProductCardInfo;