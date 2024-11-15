/**
 * Задник лесектора
 * @param length
 * @param isCounts
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardOptionBackground = ({length, isCounts = false}) => {
    let backgroundClassName = "option__background";
    let arrowBackgroundClassName = "option__arrow-background";
    let arrowClassName = "option__arrow";

    if (length > 1) {
        arrowBackgroundClassName += ' option__arrow-active';
    }

    if (isCounts) {
        backgroundClassName += ' counts__option-background';
        arrowBackgroundClassName += ' counts__option-arrow-background';
        arrowClassName += ' counts__option-arrow';
    }

    return (
        <>
            <div className={backgroundClassName}></div>
            <div className={arrowBackgroundClassName}></div>
            <svg className={arrowClassName} width="13.007812"
                 height="7.355713" viewBox="0 0 13.0078 7.35571" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <path id="Line 11" d="M12 1L6.5 6L1 1" stroke="#FFFFFF" strokeOpacity="1.000000" strokeWidth="2.000000"
                      strokeLinecap="round"/>
            </svg>
        </>
    );
};

export default ProductCardOptionBackground;