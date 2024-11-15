import IndexArticle from "./index_article/IndexArticle";
import SvgBox from "../../elements/index/index_article/svg/SvgBox";

/**
 * Информационный блок на главной странице с информацией о доставке
 * @returns {JSX.Element}
 * @constructor
 */
const IndexDelivery = () => {
    // Заглушки
    const img = {src: "./img/index_delivery/photo.png", alt: "Car"};
    const content = {
        title: "", subtitle: "Доставка",
        text: "технология раскроя металла- удобный и экономичный и быстрый способ производства деталей из " +
            "листового металла для приборов, станков, агрегатов и машин, корпусов, строительных конструкций, " +
            "торгового и пищево технология раскроя металла- удобный и экономичный и быстрый способ производства " +
            "деталей из листового металла для приборов, станков, агрегатов и машин, корпусов, строительных " +
            "конструкций, торгового и пищево",
        btnLink: "sales#delivery", type: "delivery"
    };

    return (
        <section className="index-delivery">
            <div className="index-delivery__background"></div>
            <div className="index-delivery__background-opacity"></div>
            <IndexArticle img={img} content={content} svg={<SvgBox/>}/>
        </section>
    );
};

export default IndexDelivery;