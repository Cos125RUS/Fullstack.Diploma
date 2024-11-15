/**
 * Переключатель отображения подсказок поиска
 * @returns {JSX.Element}
 * @constructor
 */
const SearchHintsSwitcher = () => {
    return (
        <input type="checkbox" name="search-checkbox" id="search-checkbox"
               className="search-info__checkbox dropdown-menu__checkbox"/>
    );
};

export default SearchHintsSwitcher;