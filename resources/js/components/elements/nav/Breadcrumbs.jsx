import {Link} from "react-router-dom";

const Breadcrumbs = ({title, route, className}) => {
    route[route.length - 1].title += "...";

    return (
        <nav className={className + "-top__right main-top__right"}>
            <h1 className={className + "-top__title main-top__title"}>{title}</h1>
            <ul className={className + "-top__breadcrumbs main-top__breadcrumbs"}>
                {route.map((stay, index) =>
                    <li key={index}>
                        {stay.link ? <Link to={stay.link}>{stay.title}</Link> : <p>{stay.title}</p>}
                    </li>)}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;