import classNames from "classnames";

/**
 * Квадратный бокс бокового меню основной секции
 * @param className
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const SideBar = ({className, children}) => {
    const squareClassName = classNames("side-bar__square", "shadow", className && `${className}-square`);
    const boxClassName = classNames(className && `${className}-box`, "side-bar__square-box");

    return (
        <div className={boxClassName}>
            <div className={squareClassName}>
                {children}
            </div>
        </div>
    );
};

export default SideBar;