import {HashLink} from "react-router-hash-link";

const IndexArticleContent = ({title, subtitle, text, btnLink, type}) => {
    const classNamePrefix = `index-${type}__content-`;

    return (
        <div className="index-article__content">
            {title ? <h1 className={classNamePrefix + 'title'}>{title}</h1> : ''}
            <h2 className={classNamePrefix+'subtitle'}>{subtitle}</h2>
            <p className={classNamePrefix+'text'}>{text}</p>
            <HashLink to={btnLink} className="index-article__content-button">ПОДРОБНЕЕ</HashLink>
        </div>
    );
};

export default IndexArticleContent;