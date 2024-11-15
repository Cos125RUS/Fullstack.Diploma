import {HashLink} from "react-router-hash-link";

const HeaderMenuOptions = ({data, classBox, classLine, closeMenu}) => {
    /**
     * Клие по ссылке
     */
    const clickToLink = (e) => {
        closeMenu();
    };

    return (
        <div className={classBox}>
            {data.map((option, index) => (
                <HashLink key={index} to={option.link} className={classLine}
                      onClick={(e) => clickToLink(e)}>{option.title}</HashLink>
            ))}
        </div>
    );
};

export default HeaderMenuOptions;