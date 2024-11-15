import {useDispatch} from "react-redux";
import {addToSearchHints} from "../../../reducers/siteSlice";
import SearchSvg from "../svg/SearchSvg";
import {useSearch} from "../../../hooks/useSearch";
import {useNavigate} from "react-router-dom";

/**
 * Кнопка поиска
 * @param searchLine
 * @param setSearchLine
 * @returns {JSX.Element}
 * @constructor
 */
const SearchBtn = ({searchLine, setSearchLine}) => {
    const dispatch = useDispatch();
    const searchEngine = useSearch(useNavigate());

    const search = () => {
        try {
            dispatch(addToSearchHints(searchLine));
            setSearchLine("");
            searchEngine(searchLine);
        } catch (exception) {
            console.error(exception);
        }
    };

    return (
        <button onClick={search} className="search-button usable invisible-background-btn">
            <SearchSvg/>
        </button>
    );
};

export default SearchBtn;