import LoadData from "./LoadData";
import SimplePreloader from "../../elements/preloaders/SimplePreloader";
import {searchHintsLoader} from "../../../reducers/loaders/searchHintsLoader";
import SearchHintsNav from "../../elements/header/top/search/SearchHintsNav";

/**
 * Загрузка подсказок истории поиска
 * @param searchLine
 * @param setSearchLine
 * @returns {JSX.Element}
 * @constructor
 */
const LoadSearchHints = ({searchLine, setSearchLine}) => {
    return (
        <LoadData name="searchHints" preloader={SimplePreloader} loader={searchHintsLoader}
                  component={(data) => <SearchHintsNav historyHints={data} searchLine={searchLine}
                                                       setSearchLine={setSearchLine}/>}/>
    );
};

export default LoadSearchHints;