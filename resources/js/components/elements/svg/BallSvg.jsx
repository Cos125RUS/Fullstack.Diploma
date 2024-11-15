/**
 * Картинка шара
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
const BallSvg = ({className}) => {
    return (
        <svg className={className}
             width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <circle id="Ellipse 3" cx="12.000000" cy="12.000000" r="12.000000" fill="#0D64C9"
                    fillOpacity="1.000000"/>
        </svg>
    );
};

export default BallSvg;