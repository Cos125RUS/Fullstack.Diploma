import PageContent from "../../blocks/content/PageContent";
import LoadCompanyList from "../../hoc/load/LoadCompanyList";

/**
 * Страница с информацией о компаниях пользователя
 * @returns {JSX.Element}
 * @constructor
 */
const CompanyPage = () => {
    return (
        <PageContent pageClassName="account__company">
            <LoadCompanyList/>
        </PageContent>
    );
};

export default CompanyPage;