import IndexCatalog from "../blocks/index/IndexCatalog";
import IndexServices from "../blocks/index/IndexServices";
import IndexDelivery from "../blocks/index/IndexDelivery";
import LoadAboutUs from "../hoc/load/LoadAboutUs";

const IndexPage = () => {
    return (
        <>
            <IndexCatalog/>
            <LoadAboutUs/>
            <IndexServices/>
            <IndexDelivery/>
        </>
    );
};

export default IndexPage;