import WideCard from "../../cards/WideCard";
import CreateCompanyBtnBox from "./CreateCompanyBtnBox";
import {useState} from "react";
import AccountNewCompanyForm from "./AccountNewCompanyForm";

/**
 * Карточка создания новой компании в профиле пользователя
 * @returns {JSX.Element}
 * @constructor
 */
const NewCompanyCard = () => {
    const [showCreateForm, setShowCreateForm] = useState(false);

    return (
        <WideCard>
            {!showCreateForm ?
                <CreateCompanyBtnBox setShowCreateForm={setShowCreateForm}/>
                :
                <AccountNewCompanyForm setShowCreateForm={setShowCreateForm}/>}
        </WideCard>
    );
};

export default NewCompanyCard;