import Fuse from "fuse.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {itemsLoader} from "../../../../../reducers/loaders/itemsLoader";
import {useNavigate} from "react-router-dom";
import {useSearch} from "../../../../../hooks/useSearch";
import {addToSearchHints} from "../../../../../reducers/siteSlice";
import {logDOM} from "@testing-library/react";

/**
 * Подсказки истории поиска
 * @param searchHints
 * @param searchLine
 * @param setSearchLine
 * @returns {JSX.Element}
 * @constructor
 */
const SearchHintsNav = ({searchLine, setSearchLine}) => {
    const dispatch = useDispatch();
    const historyHints = useSelector(state => state.searchHints);
    const items = useSelector(state => state.items);
    const [fuse, setFuse] = useState(new Fuse([], {keys: ["title"]}))
    const [searchHints, setSearchHints] = useState([]);
    const searchEngine = useSearch(useNavigate());

    useEffect(() => {
        if (items.length === 0) {
            dispatch(itemsLoader());
        }
    }, []);

    useEffect(() => {
        fuse.setCollection(Object.values(items));
        Object.values(items).forEach(category =>
            Object.values(category.subcategory).forEach(subcategory => {
                fuse.add({title: `${category.title} ${subcategory.title}`})
                subcategory.items.forEach(item =>
                    fuse.add({title: `${category.title} ${subcategory.title} ${item.title}`}));
            }));
        setFuse(fuse);
    }, [items]);

    useEffect(() => {
        if (searchLine.trim() !== "") {
            const matches = [];
            fuse.search(searchLine).forEach(({item}) => matches.push(item.title));
            setSearchHints(matches);
        }
    }, [searchLine]);

    /**
     * Записать в строку поиска выбранную из подсказок строку
     * @param e
     */
    const choiceHint = (e) => {
        setSearchLine(e.target.childNodes[0].nodeValue);
        // document.querySelector("input#search-input").focus();
        dispatch(addToSearchHints(e.target.childNodes[0].nodeValue));
        searchEngine(addToSearchHints(e.target.childNodes[0].nodeValue));
    };

    return (
        <nav className="search-info__nav search-dropdown dropdown-menu__nav">
            <ul className="search-info__nav-list search-dropdown__list">
                {(searchLine === "" ? historyHints.slice(0, 5) : searchHints.slice(0, 5)).map((line, index) => (
                    <li key={index} className="search-info__nav-item search-dropdown__item"
                        onClick={e => choiceHint(e)}>
                        {line}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SearchHintsNav;