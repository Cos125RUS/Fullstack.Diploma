
const ModalProductSpecification = ({title, value}) => {
    return (
        <div className="modal-product__specification">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

export default ModalProductSpecification;