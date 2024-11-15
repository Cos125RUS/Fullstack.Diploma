import LoadSalesInfo from "../../../../hoc/load/LoadSalesInfo";
import {useState} from "react";

/**
 * Блок в хедере с информацией для покупателей
 * @returns {JSX.Element}
 * @constructor
 */
const SalesInfoButtonNav = () => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className="header__sections-link sales-info__button-nav dropdown-menu__button-nav"
             onMouseOver={() => setIsChecked(true)} onMouseLeave={() => setIsChecked(false)}>
            <input type="checkbox" name="sales-checkbox" id="sales-checkbox"
                   className="sales-info__checkbox dropdown-menu__checkbox" checked={isChecked}
                   onChange={() => setIsChecked(!isChecked)}/>
            <label htmlFor="sales-checkbox"
                   className="sales-info__label hover-big dropdown-menu__label">Покупателям</label>
            <LoadSalesInfo/>
        </div>
    );
};

export default SalesInfoButtonNav;