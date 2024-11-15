import PlusSvg from "../../svg/PlusSvg";

/**
 * Кнопка добавления новой компании
 * @returns {JSX.Element}
 * @constructor
 */
const CreateCompanyBtn = ({setShowCreateForm}) => {

    /**
     * Вызов формы добавления новой компании
     */
    const createNewCompany = () => {
        setShowCreateForm(true);
    };

    return (
        <button className="account-company__new-btn cp" onClick={createNewCompany}>
            <PlusSvg/>
        </button>
    );
};

export default CreateCompanyBtn;