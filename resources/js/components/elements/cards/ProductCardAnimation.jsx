import ChamomileAnimationSvg from "../svg/animation/ChamomileAnimationSvg";
import TextAnimationSvg from "../svg/animation/TextAnimationSvg";

const ProductCardAnimation = ({className}) => {
    const classNames = className + ' product-card__animation';

    return (
        <div className={classNames}>
            <ChamomileAnimationSvg/>
            <TextAnimationSvg/>
        </div>
    );
};

export default ProductCardAnimation;