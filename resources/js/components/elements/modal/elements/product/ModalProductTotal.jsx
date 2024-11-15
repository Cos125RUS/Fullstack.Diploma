
const ModalProductTotal = ({item}) => {
    const sum = item.use.total[0];
    const count = item.use.count[0];
    const countType = item.use.countsType[0];

    return (
        <div className="modal-product__total">
            <p className="modal-product__total-sum">{sum.toLocaleString()} ₽</p>
            <p className="modal-product__total-counts">{count} {countType}</p>
        </div>
    );
};

export default ModalProductTotal;