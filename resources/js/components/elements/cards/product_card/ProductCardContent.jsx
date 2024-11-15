import ProductCardOptions from "./ProductCardOptions";
import ProductCardCounts from "./ProductCardCounts";
import {useEffect, useState} from "react";
import {calculateTotalPrice} from "../../../../funcs/calculateTotalPrice";
import {useDispatch} from "react-redux";
import {updateInCart} from "../../../../reducers/siteSlice";

/**
 * Содержимое карточки товара
 * @param item
 * @param className
 * @param isCart
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardContent = ({item, className, isCart = false}) => {
    if (className) {
        className += "-main__options";
    }

    const dispatch = useDispatch();

    const [thickness, setThickness] = useState(
        item.selected ? item.selected.thickness : item.thickness[0].value);
    item.use.thickness = [thickness, setThickness];

    const [length, setLength] = useState(
        item.selected ? item.selected.size : item.thickness[0].sizes.items[0].value);
    item.use.size = [length, setLength];

    const [countsType, setCountsType] = useState(
        item.selected ? item.selected.countsType : item.counts.items[0].value);
    item.use.countsType = [countsType, setCountsType];

    const [count, setCount] = useState(
        item.selected ? item.selected.count : 1);
    item.use.count = [count, setCount];

    const [cutting, setCutting] = useState(
        item.selected ? item.selected.cutting : false);
    item.use.cutting = [cutting, setCutting];

    const [total, setTotal] = useState(item.total ? item.total : 0);
    item.use.total = [total, setTotal];

    useEffect(() => {
        setTotal(calculateTotalPrice(item));
    }, [thickness, length, countsType, count]);

    useEffect(() => {
        if (isCart) {
            item.total = total;
            dispatch(updateInCart(item));
        }
    }, [total, cutting]);

    return (
        <div className={"catalog-main__product-content " + className}>
            <img src={"img/catalog/products/items/" + item.category + ".png"} alt={"steel " + item.category}/>
            <form action="#" className="catalog-main__product-form">
                <div className="catalog-main__product-sections">
                    <ProductCardOptions item={item} className={className}/>
                    <ProductCardCounts item={item} className={className}/>
                </div>
            </form>
        </div>
    );
};

export default ProductCardContent;