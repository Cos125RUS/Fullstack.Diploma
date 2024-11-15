import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import IndexPage from "./pages/IndexPage";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import SalesPage from "./pages/SalesPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/account/ProfilePage";
import OrdersPage from "./pages/account/OrdersPage";
import CompanyPage from "./pages/account/CompanyPage";
import LoadAccountRoutes from "./hoc/load/LoadAccountRoutes";
import Page404 from "./pages/Page404";
import LoadSite from "./hoc/load/LoadSite";
import AuthUserCheck from "./hoc/check/AuthUserCheck";

/**
 * Карта сайта
 * @returns {JSX.Element}
 * @constructor
 */
const SiteRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoadSite/>}>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/catalog" element={<CatalogPage/>}/>
                    <Route path="/product" element={<ProductPage/>}/>
                    <Route path="/sales" element={<SalesPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/account" element={<AuthUserCheck/>}>
                        <Route path="/account/profile" element={<ProfilePage/>}/>
                        <Route path="/account/orders" element={<OrdersPage/>}/>
                        <Route path="/account/company" element={<CompanyPage/>}/>
                    </Route>
                </Route>

                <Route path="/*" element={<Page404/>}/>
            </Routes>
        </Router>
    );
};

export default SiteRouter;