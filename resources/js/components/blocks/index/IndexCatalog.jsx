import IndexCatalogTape from "../../elements/index/index_catalog/IndexCatalogTape";
import MediaPrice from "../../elements/media/MediaPrice";
import IndexCatalogCards from "./index_catalog/IndexCatalogCards";
import LoadCatalog from "../../hoc/load/LoadCatalog";

const IndexCatalog = () => {
    //TODO: Добавить прелоадер
    return (
        <main className="index-catalog">
            <div className="index-catalog__box">
                <MediaPrice/>
                <h1 className="index-catalog__title">Наша продукция</h1>
                <LoadCatalog component={(data) => <IndexCatalogCards products={data}/>}/>
            </div>
            <IndexCatalogTape/>
        </main>
    );
};

export default IndexCatalog;