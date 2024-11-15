import {Link} from "react-router-dom";

/**
 * Страница 404
 * @returns {JSX.Element}
 * @constructor
 */
const Page404 = () => {
    return (
        <main className="page404 main">
            <h1 className="page404__title">OOPS!</h1>
            <div className="page404-info">
                <p className="page404-info__text">Страница не найдена!</p>
                <a href="/catalog" className="btn btn-blue btn-slim uppercase">в каталог</a>
            </div>
        </main>
    );
};

export default Page404;