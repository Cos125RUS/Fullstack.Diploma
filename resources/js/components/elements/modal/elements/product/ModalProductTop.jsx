import CharLogo from "../../../svg/CharLogo";
import ModalTitle from "../ModalTitle";

/**
 * Верхняя часть модального окна добавления товара в корзину
 * @param category
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
const ModalProductTop = ({category, title}) => {
    return (
        <div className="modal-product__top">
            <ModalTitle title="Товар добавлен в корзину" className="modal__title modal__title__product"/>
            <img src={"img/catalog/products/items/" + category + ".png"} alt={"steel " + category}
                 className="modal__img"/>
            <h1 className="modal__product-name">{title}</h1>
        </div>
    );
};

export default ModalProductTop;