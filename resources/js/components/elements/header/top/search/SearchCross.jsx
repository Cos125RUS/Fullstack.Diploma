import {useEffect, useState} from "react";
import CrossSvg from "../../../svg/CrossSvg";

/**
 * Кнопка отмеены ввода строки поиска
 * @param isOpen
 * @param setIsOpen
 * @param setSearchLine
 * @returns {JSX.Element}
 * @constructor
 */
const SearchCross = ({isOpen, setIsOpen, setSearchLine}) => {
    const [className, setClassName] = useState("invisible-background-btn search-cross")

    useEffect(() => {
        if (isOpen) {
            setClassName("invisible-background-btn search-cross search-cross__open");
        } else {
            setClassName("invisible-background-btn search-cross search-cross__close");
        }
    }, [isOpen]);

    const closeSearchEvent = () => {
        setSearchLine("");
        setIsOpen(false);
    };

    return (
        <button className={className} onClick={closeSearchEvent}>
            <CrossSvg/>
        </button>
    );
};

export default SearchCross;