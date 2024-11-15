/**
 * Информационная статья о компании на главной странице
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const IndexAboutUsInfo = ({item}) => {
    return (
        <article className="index-about-us__info-box">
            <h2 className="index-about-us__info-title">{item.title}</h2>
            <p className="index-about-us__info-content">{item.text}</p>
        </article>
    );
};

export default IndexAboutUsInfo;