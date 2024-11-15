import {HashLink} from "react-router-hash-link";

/**
 * Ссылка из списка в блоке для покупателей в хедере
 * @param link
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
const SalesInfoLink = ({link, title}) => {
    return (
        <li className="sales-info__nav-item sales-dropdown__item">
            <HashLink to={link} className="sales-info__nav-link sales-dropdown__link">{title}</HashLink>
        </li>
    );
};

export default SalesInfoLink;