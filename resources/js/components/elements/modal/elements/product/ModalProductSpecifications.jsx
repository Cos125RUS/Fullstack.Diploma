import ModalProductSpecification from "./ModalProductSpecification";

/**
 * Блок характеристик добавленного в корзину товара
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const ModalProductSpecifications = ({item}) => {
    return (
        <div className="modal-product__specifications">
            {item.use.thickness[0] ? <ModalProductSpecification
                    title={item.options.thickness.title} value={item.use.thickness[0]}/>
                : null}
            <ModalProductSpecification title={item.options.length.title} value={item.use.size[0]}/>
            <ModalProductSpecification title="резка" value={item.use.cutting[0] ? "есть" : "нет"}/>
        </div>
    );
};

export default ModalProductSpecifications;