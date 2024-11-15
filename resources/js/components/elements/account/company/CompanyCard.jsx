import WideCard from "../../cards/WideCard";
import {useEffect, useState} from "react";
import AccountCompanyCard from "./AccountCompanyCard";
import AccountEditCompanyForm from "./AccountEditCompanyForm";
import SimplePreloader from "../../preloaders/SimplePreloader";

/**
 * Карточка компании в профиле пользователя
 * @param company
 * @returns {JSX.Element}
 * @constructor
 */
const CompanyCard = ({company}) => {
    const [loading, setLoading] = useState(false);
    const [cardMode, setCardMode] = useState("show");

    useEffect(() => {
        loading ? setCardMode("load") : setCardMode("show");
    }, [loading]);

    const companyCards = {
        load: <SimplePreloader/>,
        show: <AccountCompanyCard company={company} setCardMode={setCardMode}/>,
        edit: <AccountEditCompanyForm company={company} setLoading={setLoading} setCardMode={setCardMode}/>,
    };

    return (
        <WideCard>
            {companyCards[cardMode]}
        </WideCard>
    );
};

export default CompanyCard;