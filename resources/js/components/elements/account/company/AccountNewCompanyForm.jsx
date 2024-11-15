import AccountFormLines from "../../cards/account_card/AccountFormLines";
import CardForm from "../../forms/CardForm";
import {addNewCompany} from "../../../../reducers/siteSlice";
import {useDispatch} from "react-redux";

/**
 * Форма создания новой компании
 * @returns {JSX.Element}
 * @constructor
 */
const AccountNewCompanyForm = ({setShowCreateForm}) => {
    const dispatch = useDispatch();
    const values = [
        {name: "name", title: "Наименование", value: "", type: "text", required: true},
        {name: "address", title: "Юр.адрес", value: "", type: "textarea", required: true},
        {name: "phone", title: "Телефон", value: "", type: "text", required: false},
        {name: "email", title: "Электронная почта", value: "", type: "text", required: true},
        {name: "itn", title: "ИНН", value: "", type: "text", required: true},
        {name: "crs", title: "КПП", value: "", type: "text", required: false},
    ];

    /**
     * Закрыть окно создания новой компании
     * @param e
     */
    const close = (e) => {
      e.preventDefault();
      setShowCreateForm(false);
    };

    /**
     * Сохранение новую компанию
     * @param e
     */
    const save = (e) => {
        e.preventDefault();
        setShowCreateForm(false);
        const formData = new FormData(e.target);
        const entryData = Object.fromEntries(formData);
        addCompany(entryData);
    };

    /**
     * Добавить новую компанию в список компаний
     * @param companyData
     */
    const addCompany = (companyData) => {
        //TODO заменить на реальный запрос к серверу
        const request = new Promise(resolve =>
            setTimeout(() => resolve(JSON.stringify(companyData)), 1000));

        request.then(json => JSON.parse(String(json)))
            .then(data => dispatch(addNewCompany(data)))
            .catch(error => console.error("Ошибка запроса к серверу на сохранение данных о компании\n" + error));
    };

    return (
        <CardForm className={"account-company__form account__form"} onSubmit={e => save(e)} close={close}>
            <AccountFormLines values={values} classType="company"/>
        </CardForm>
    );
};

export default AccountNewCompanyForm;