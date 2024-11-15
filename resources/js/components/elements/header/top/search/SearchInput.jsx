import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addToSearchHints} from "../../../../../reducers/siteSlice";
import {useSearch} from "../../../../../hooks/useSearch";
import {useNavigate} from "react-router-dom";

/**
 * Ввод строки поиска
 * @param isOpen
 * @param setIsOpen
 * @param searchLine
 * @param setSearchLine
 * @returns {JSX.Element}
 * @constructor
 */
const SearchInput = ({isOpen, setIsOpen, searchLine, setSearchLine}) => {
    const [checkBox, setCheckBox] = useState();
    const dispatch = useDispatch();
    const searchEngine = useSearch(useNavigate());

    useEffect(() => {
        setCheckBox(document.querySelector("#search-checkbox"));
    }, []);

    useEffect(() => {
        const inputEl = document.querySelector('input#search-input');

        const closeSearchNav = (e) => {
            if (e.target !== inputEl) {
                checkBox.checked = false;
                setCheckBox(checkBox);
                setIsOpen(false);
            }
        };

        window.addEventListener('click', closeSearchNav);

        return () => {
            window.removeEventListener('click', closeSearchNav);
        }
    }, [checkBox]);

    const searchNavOpen = (e) => {
        if (!checkBox.checked) {
            checkBox.checked = true;
            setCheckBox(checkBox);
            setIsOpen(true);
        }
    };

    const checkEnterKeyDown = (e) => {
        if (e.key === "Enter" && searchLine.trim() !== "") {
            dispatch(addToSearchHints(searchLine));
            setSearchLine("");
            searchEngine(searchLine);
        }
    }

    return (
        <input type="text" name="search-input" id="search-input" autoComplete="off" maxLength="60"
               className="search-input dropdown-menu__input" placeholder="Поиск" value={searchLine}
               onClick={e => searchNavOpen(e)}
               onChange={e => setSearchLine(e.target.value)}
               onKeyDown={e => checkEnterKeyDown(e)}/>
    );
};

export default SearchInput;