import IndexArticle from "./index_article/IndexArticle";
import SvgCircle from "../../elements/index/index_article/svg/SvgCircle";

const IndexServices = () => {
    // Заглушки
    const img = {src: "./img/index_services/photo.png", alt: "Metal cutting"};
    const content = {
        title: "Наши услуги", subtitle: "Резка металла",
        text: "технология раскроя металла- " +
            "удобный и экономичный и быстрый способ производства деталей из листового металла для приборов, станков, " +
            "агрегатов и машин, корпусов, строительных конструкций, торгового и пищево технология раскроя металла- " +
            "удобный и экономичный и быстрый способ производства деталей из листового металла для приборов, станков, " +
            "агрегатов и машин, корпусов, строительных конструкций, торгового и пищево",
        btnLink: "", type: "services"
    };

    return (
        <section className="index-services">
            <IndexArticle img={img} content={content} svg={<SvgCircle/>}/>
        </section>
    );
};

export default IndexServices;