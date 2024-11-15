import IndexAboutUsItem from "./IndexAboutUsItem";
import {useDispatch} from "react-redux";
import {changeActive} from "../../../../reducers/siteSlice";
import {useEffect} from "react";

/**
 * Навигация блока с информацией о компании на главной странице
 * @param items
 * @param currentIndex
 * @param setIndex
 * @returns {JSX.Element}
 * @constructor
 */
const IndexAboutUsNav = ({items, currentIndex, setIndex}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeActive({index: currentIndex}));
    }, [currentIndex]);

    return (
        <nav className="index-about-us__nav-box">
            <ul className="index-about-us__nav-ul">
                {items.map((item) => (<IndexAboutUsItem item={item} key={item.index} setIndex={setIndex}/>))}
            </ul>
        </nav>
    );
};

export default IndexAboutUsNav;