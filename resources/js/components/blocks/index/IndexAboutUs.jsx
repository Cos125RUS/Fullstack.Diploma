import IndexAboutUsNav from "./index_about_us/IndexAboutUsNav";
import IndexAboutUsInfo from "../../elements/index/index_about_us/IndexAboutUsInfo";
import {useState} from "react";

/**
 * Блок с информацией о конмании на главной странице
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
const IndexAboutUs = ({data}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="index-about-us">
            <div className="index-about-us__box">
                <IndexAboutUsNav items={data} currentIndex={currentIndex} setIndex={setCurrentIndex}/>
                <IndexAboutUsInfo item={data[currentIndex]}/>
            </div>
        </section>
    );
};

export default IndexAboutUs;