import MediaPrice from "../media/MediaPrice";
import PriceTop from "./PriceTop";
import Breadcrumbs from "../nav/Breadcrumbs";

const MainTop = ({title, className, route}) => {
    return (
        <section className={"main-top " + className}>
            <PriceTop/>
            <Breadcrumbs title={title} route={route} className="catalog"/>
            <MediaPrice/>
        </section>
    );
};

export default MainTop;