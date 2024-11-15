import BannerNav from "../../elements/header/banner/BannerNav";
import BannerPick from "../../elements/header/banner/BannerPick";
import BannerInfo from "../../elements/header/banner/BannerInfo";
import {useEffect, useState} from "react";
import {bannerSwitcher} from "../../../funcs/bannerSwitcher";

const HeaderBanner = ({banners}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentBanner, setCurrentBanner] = useState(banners[currentIndex]);
    const switchBanner = bannerSwitcher(banners, currentIndex, setCurrentIndex, setCurrentBanner, 5000);

    useEffect(() => {
        switchBanner();
    }, [currentIndex]);

    return (
        <div className="header__middle">
            <article className="banner">
                <div className="banner__info">
                    <BannerPick src={currentBanner.pick}/>
                    <BannerInfo currentBanner={currentBanner}/>
                </div>
                <BannerNav currentIndex={currentIndex} total={banners.length} switchBanner={switchBanner}/>
            </article>
        </div>
    );
};

export default HeaderBanner;