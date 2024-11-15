import Header from "../blocks/Header";
import {Outlet} from "react-router";
import {useLocation} from "react-router-dom";
import Footer from "../blocks/Footer";

const Main = () => {
    const location = useLocation();

    return (
        <>
            <Header isIndex={location.pathname === '/' || location.pathname === ''}/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Main;