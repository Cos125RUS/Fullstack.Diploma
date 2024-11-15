import BannerNavLine from "./nav/BannerNavLine";
import BannerNavDot from "./nav/BannerNavDot";

const BannerNav = ({currentIndex, total, switchBanner}) => {
    const items = [];
    for (let i = 0; i < total; i++) {
        items.push(i);
    }

    return (
        <nav className="banner__nav">
            <div className="banner__nav-box">
                {items.map((index) => (
                    index === currentIndex ? <BannerNavLine key={index}/> :
                        <BannerNavDot key={index} thisIndex={index} switchBanner={switchBanner}/>
                ))}
            </div>
        </nav>
    );
};

export default BannerNav;