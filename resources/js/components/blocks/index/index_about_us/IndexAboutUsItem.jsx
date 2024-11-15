import {Link} from "react-router-dom";
import BallSvg from "../../../elements/svg/BallSvg";

/**
 * Элемент меню навигации блока с информацией о компании на главной странице
 * @param item
 * @param setIndex
 * @returns {JSX.Element}
 * @constructor
 */
const IndexAboutUsItem = ({item, setIndex}) => {
    let className = "index-about-us__nav-circle";
    if (item.isActive) className += " active__circle";

    const changeCurrentItem = (e) => {
      e.preventDefault();
        setIndex(item.index);
    };

    return (
        <li className="index-about-us__nav-li">
            <BallSvg className={className}/>
            <Link to={item.link} className="index-about-us__nav-link active__link" onClick={changeCurrentItem}>{item.name}</Link>
        </li>
    );
};

export default IndexAboutUsItem;