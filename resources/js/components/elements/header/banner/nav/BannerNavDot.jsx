const BannerNavDot = ({thisIndex, switchBanner}) => {
    return (
        <svg onClick={() => switchBanner(thisIndex)} className="banner__nav-dot" width="9.000000"
             height="9.000000"
             viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <circle id="Ellipse 8" cx="4.124512" cy="4.317139" r="4.317217" fill="#C2C4C7"
                    fillOpacity="1.000000"/>
        </svg>
    );
};

export default BannerNavDot;