import LoadData from "./LoadData";
import SimplePreloader from "../../elements/preloaders/SimplePreloader";
import {bannersLoader} from "../../../reducers/loaders/bannersLoader";
import HeaderBanner from "../../blocks/header/HeaderBanner";

const LoadBanners = () => {
    return (
        <LoadData name="banners" preloader={<SimplePreloader/>} loader={bannersLoader}
                  component={(data) => <HeaderBanner banners={data} />}/>
    );
};

export default LoadBanners;