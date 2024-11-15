import ChamomileAnimationSvg from "../elements/svg/animation/ChamomileAnimationSvg";
import TextAnimationSvg from "../elements/svg/animation/TextAnimationSvg";

/**
 * Страница загрузки
 * @returns {JSX.Element}
 * @constructor
 */
const LoadingPage = () => {
    return (
        <div className="intro">
            <ChamomileAnimationSvg/>
            <TextAnimationSvg/>
        </div>
    );
};

export default LoadingPage;