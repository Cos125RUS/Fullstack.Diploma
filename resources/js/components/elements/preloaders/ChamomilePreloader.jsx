import ChamomileAnimationSvg from "../svg/animation/ChamomileAnimationSvg";

/**
 * Прелоадер с крутящимся знаком
 * @returns {JSX.Element}
 * @constructor
 */
const ChamomilePreloader = ({className}) => {
    return (
        <div className="loader-box">
            <ChamomileAnimationSvg className={className}/>
        </div>
    );
};

export default ChamomilePreloader;