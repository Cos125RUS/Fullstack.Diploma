import Total from "./bottom/Total";
import ProductCardButton from "./bottom/ProductCardButton";
import WithModal from "../../../../hoc/modal/WithModal";
import Modal from "../../../../hoc/modal/Modal";
import SuccessAddToCartModal from "../../../modal/success/SuccessAddToCartModal";

/**
 * Нижняя часть секции количества товара на карточке товара
 * @param item
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardCountsBottom = ({item, className}) => {
    return (
        <div className="counts__bottom">
            <Total useTotal={item.use.total} className={className}/>
            <WithModal modal={(handleModalClose) => <Modal onClose={handleModalClose}
                                                           children={(closeModal) => <SuccessAddToCartModal
                                                               closeModal={closeModal} item={item}
                                                               total={item.use.total}/>}/>}
                       component={(handleModalOpen) => <ProductCardButton item={item} className={className}
                                                                          total={item.use.total[0]}
                                                                          handleModalOpen={handleModalOpen}/>}/>
        </div>
    );
};

export default ProductCardCountsBottom;