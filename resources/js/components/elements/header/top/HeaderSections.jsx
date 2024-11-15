import {Link} from "react-router-dom";
import SalesInfoButtonNav from "./sales/SalesInfoButtonNav";
import {HashLink} from "react-router-hash-link";

/**
 * Секции хедера со ссылками
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderSections = () => {
    return (
        <div className="header__sections">
            <Link to="/catalog" className="header__sections-link hover-big">Продукция</Link>
            <HashLink to="/#footer" className="header__sections-link hover-big">Контакты</HashLink>
            <SalesInfoButtonNav/>
        </div>
    );
};

export default HeaderSections;