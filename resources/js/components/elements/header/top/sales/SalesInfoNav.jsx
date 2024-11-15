import SalesInfoLink from "./SalesInfoLink";

/**
 * Список ссылок в блоке хедера для покупателей
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
const SalesInfoNav = ({data}) => {
    return (
        <nav className="sales-info__nav sales-dropdown dropdown-menu__nav">
            <ul className="sales-info__nav-list sales-dropdown__list">
                {data.map((item, index) => (
                    <SalesInfoLink key={index} link={item.link} title={item.title}/>
                ))}
            </ul>
        </nav>
    );
};

export default SalesInfoNav;