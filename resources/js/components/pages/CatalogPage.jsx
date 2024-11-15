import MainTop from "../elements/global/MainTop";
import CatalogMain from "../blocks/catalog/CatalogMain";
import Offer from "../blocks/Offer";

/**
 * Страница каталога товаров
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogPage = () => {
    const route = [
        {
            title: "Главная",
            link: "/"
        },
        {
            title: "Наша продукция",
            link: null
        }
    ];

    return (
        <main className="catalog main">
            <MainTop title="Наша продукция" className="catalog-top" route={route}/>
            <CatalogMain/>
            {/*<Offer/>*/}
        </main>
    );
};

export default CatalogPage;
