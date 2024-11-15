import {Link} from "react-router-dom";

const BannerInfo = ({currentBanner}) => {
    const description = currentBanner.description.join('<br/>');

    return (
        <div className="banner__right">
            <h1 className="banner__title">
                <span className="banner__title-name">{currentBanner.title}</span> {currentBanner.subtitle}
            </h1>
            <p className="banner__description" dangerouslySetInnerHTML={{__html: description}}></p>
            <div className="banner__right-bottom">
                <div className="banner__price-box">
                    <div className="banner__prices">
                        <p className="banner__price-old">{currentBanner.oldPrice}</p>
                        <p className="banner__price-new">{currentBanner.newPrice}</p>
                    </div>
                    <div className="banner__superprice-box">
                        <p className="banner__superprice-text">спеццена</p>
                    </div>
                </div>
                <Link to={currentBanner.link} className="banner__button">УЗНАТЬ БОЛЬШЕ</Link>
            </div>
        </div>
    );
};
export default BannerInfo;