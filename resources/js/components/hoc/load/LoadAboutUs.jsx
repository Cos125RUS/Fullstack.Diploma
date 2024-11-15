import LoadData from "./LoadData";
import {aboutUsLoader} from "../../../reducers/loaders/aboutUsLoader";
import SimplePreloader from "../../elements/preloaders/SimplePreloader";
import IndexAboutUs from "../../blocks/index/IndexAboutUs";

/**
 * Загрузка блока "О Нас"
 * @returns {JSX.Element}
 * @constructor
 */
const LoadAboutUs = () => {
    return (
        <LoadData name="aboutUs" loader={aboutUsLoader} preloader={<SimplePreloader/>}
                  component={(data) => <IndexAboutUs data={data}/>}/>
    );
};

export default LoadAboutUs;