import AccountEditableCard from "../../cards/account_card/AccountEditableCard";

/**
 * Просмотр информации о компании
 * @param company
 * @param setEditCompanyData
 * @returns {JSX.Element}
 * @constructor
 */
const AccountCompanyCard = ({company, setCardMode}) => {
    const values = [
        {title: "Наименование", value: company.name},
        {title: "Юр.адрес", value: company.address},
        {title: "Телефон", value: company.phone},
        {title: "Электронная почта", value: company.email},
        {title: "ИНН", value: company.itn},
        {title: "КПП", value: company.crs},
    ];

    /**
     * Редактирование карточки компании
     */
    const edit = () => {
        setCardMode("edit");
    };

    return (
        <AccountEditableCard values={values} switchMode={edit} cardType="company"/>
    );
};

export default AccountCompanyCard;