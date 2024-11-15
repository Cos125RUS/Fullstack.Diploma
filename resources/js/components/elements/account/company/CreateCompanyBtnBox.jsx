import CreateCompanyBtn from "./CreateCompanyBtn";

/**
 * Контейнер с кнопкой добавления новой компании в профиле пользователя
 * @returns {JSX.Element}
 * @constructor
 */
const CreateCompanyBtnBox = ({setShowCreateForm}) => {
    return (
        <div className="account-company__new-box">
            <div className="account-company__new-btn-box">
                <CreateCompanyBtn setShowCreateForm={setShowCreateForm}/>
                <p className="account-company__new-label">Добавить ещё одну компанию</p>
            </div>
        </div>
    );
};

export default CreateCompanyBtnBox;