import {useEffect, useRef, useState} from "react";

/**
 * Селектор карточки товара
 * @param items
 * @param name
 * @param className
 * @param use
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardOptionDetails = ({items, name, className, use}) => {
    const detailsRef = useRef(null);
    const summaryRef = useRef(null);

    let detailsClassName = className;
    let summaryClassName = "option__summary";

    if (items.length === 1) {
        detailsClassName += " option__details-disabled";
        summaryClassName += " option__summary-disabled";
    }

    useEffect(() => {
        addXSmall();
    }, [use[0]]);

    /**
     * Уменьшить шрифт
     */
    const addXSmall = () => {
        if (use[0].length > 2 && use[0].length < 5) {
            summaryClassName += " option__summary-x-small";
        } else if (use[0].length >= 5) {
            summaryClassName += " option__summary-xx-small";
        }
    }

    addXSmall();

    /**
     * Изменить отображение выбранного пункта селектора
     * @param e
     * @param item
     */
    const changeSummary = (e, item) => {
        use[1](item.value);
        detailsRef.current.open = false;
    };

    useEffect(() => {
        const handleWrapperClick = (e) => {
            if (detailsRef.current.open && summaryRef.current !== e.target) {
                detailsRef.current.open = false;
            }
        };

        const handleEscapePress = (e) => {
            if (e.key === 'Escape') {
                detailsRef.current.open = false;
            }
        };

        window.addEventListener('click', handleWrapperClick);
        window.addEventListener('keydown', handleEscapePress);

        return () => {
            window.removeEventListener('click', handleWrapperClick);
            window.removeEventListener('keydown', handleEscapePress);
        }
    }, []);

    return (
        <details className={detailsClassName} ref={detailsRef}>
            <summary className={summaryClassName} ref={summaryRef}>{use[0]}</summary>
            <ul className="option__ul">
                {items.map((item, index) => (
                    <li key={index} className="option__li" onClick={(e) => changeSummary(e, item)}>
                        <input className="option__input" type="radio" name={name} id={name + "-" + item}/>
                        <label htmlFor={name + "-" + item.value} className="option__label">{item.value}</label>
                    </li>
                ))}
            </ul>
        </details>
    );
};

export default ProductCardOptionDetails;