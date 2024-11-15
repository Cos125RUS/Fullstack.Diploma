import LoadSearchHints from "../../../../hoc/load/LoadSearchHints";
import SearchInput from "./SearchInput";
import SearchCross from "./SearchCross";
import {useState} from "react";
import SearchHintsSwitcher from "./SearchHintsSwitcher";
import SearchHintsNav from "./SearchHintsNav";

/**
 * Блок поиска в хэдэре
 * @param searchLine
 * @param setSearchLine
 * @returns {JSX.Element}
 * @constructor
 */
const SearchInputBox = ({searchLine, setSearchLine}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="search-box dropdown-menu__button-nav">
            <SearchHintsSwitcher/>
            <SearchInput isOpen={isOpen} setIsOpen={setIsOpen}
                         searchLine={searchLine} setSearchLine={setSearchLine}/>
            {/*<LoadSearchHints searchLine={searchLine} setSearchLine={setSearchLine}/>*/}
            <SearchHintsNav searchLine={searchLine} setSearchLine={setSearchLine}/>
            <SearchCross isOpen={isOpen} setIsOpen={setIsOpen} setSearchLine={setSearchLine}/>
        </div>
    );
};

export default SearchInputBox;