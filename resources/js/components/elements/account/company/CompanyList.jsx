import CardsList from "../../cards/CardsList";
import NewCompanyCard from "./NewCompanyCard";
import CompanyCard from "./CompanyCard";

/**
 * Список компаний пользователя
 * @returns {JSX.Element}
 * @constructor
 */
const CompanyList = ({data}) => {
    return (
        <CardsList>
            {data.map((company, index) => <CompanyCard key={index} company={company}/>)}
            <NewCompanyCard/>
        </CardsList>
    );
};

export default CompanyList;