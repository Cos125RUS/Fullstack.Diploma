import MainTop from "../elements/global/MainTop";
import SalesMain from "../blocks/sales/SalesMain";

const SalesPage = () => {
    const route = [
        {
            title: "Главная",
            link: "/"
        },
        {
            title: "Покупателям",
            link: null
        }
    ];

    return (
        <main className="sales main">
            <MainTop title="Покупателям" className="catalog-top" route={route}/>
            <SalesMain/>
        </main>
    );
};

export default SalesPage;