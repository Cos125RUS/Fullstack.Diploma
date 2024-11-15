import IndexArticleContent from "../../../elements/index/index_article/IndexArticleContent";
import IndexArticleTape from "../../../elements/index/index_article/IndexArticleTape";

/**
 * Информационный блок на главной странице
 * @param img
 * @param content
 * @param svg
 * @returns {JSX.Element}
 * @constructor
 */
const IndexArticle = ({img, content, svg}) => {
    return (
        <article className="index-article__box">
            <img src={img.src} alt={img.alt} className="index-article__img"/>
            <IndexArticleContent title={content.title} subtitle={content.subtitle} text={content.text}
                                 btnLink={content.btnLink} type={content.type}/>
            <IndexArticleTape svg={svg}/>
        </article>
    );
};

export default IndexArticle;