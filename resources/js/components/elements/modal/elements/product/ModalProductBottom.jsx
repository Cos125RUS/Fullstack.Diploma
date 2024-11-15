import ModalProductSpecifications from "./ModalProductSpecifications";
import ModalProductTotal from "./ModalProductTotal";

/**
 * Нижняя часть модального окна добавления товара в корзину
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const ModalProductBottom = ({item}) => {
    return (
        <div className="modal-product__bottom">
            <ModalProductSpecifications item={item}/>
            <ModalProductTotal item={item}/>
        </div>
    );
};

export default ModalProductBottom;