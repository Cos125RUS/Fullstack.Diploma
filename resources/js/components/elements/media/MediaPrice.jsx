import {useSelector} from "react-redux";

const MediaPrice = () => {
    const linkToPrice = useSelector(state => state.linkToPrice);

    return (
        <div className="media__price">
            <a href={linkToPrice} target="_blank" className="media__price-link">
                <p>СКАЧАТЬ ПРАЙС</p>
                <svg className="index-catalog__tape-img" width="15.000000"
                     height="15.591064" viewBox="0 0 15 15.5911" fill="none"
                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path id="Line 13" d="M13.43 7.79L7.78 12.64L2.13 7.79" stroke="#FFFFFF"
                          strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinecap="round"/>
                    <path id="Vector 67"
                          d="M8.78 1L8.78 12.16L6.78 12.16L6.78 1C6.78 0.43 7.22 0 7.78 0C8.34 0 8.78 0.43 8.78 1Z"
                          fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd"/>
                    <path id="Vector 68" d="M14 14.59L1 14.59" stroke="#FFFFFF" strokeOpacity="1.000000"
                          strokeWidth="2.000000" strokeLinecap="round"/>
                </svg>
            </a>
        </div>
    );
};

export default MediaPrice;