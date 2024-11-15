import SimplePreloader from "../../elements/preloaders/SimplePreloader";
import LoadData from "./LoadData";
import {companyListLoader} from "../../../reducers/loaders/companyListLoader";
import CompanyList from "../../elements/account/company/CompanyList";

const LoadCompanyList = () => {
    return (
        <LoadData name="companyList" preloader={<SimplePreloader/>} loader={companyListLoader}
                  component={(data) => <CompanyList data={data}/>}/>    );
};

export default LoadCompanyList;