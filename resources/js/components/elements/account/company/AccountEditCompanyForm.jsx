import {useDispatch} from "react-redux";
import CardCrossBtn from "../../buttons/CardCrossBtn";
import CSRF from "../../forms/CSRF";
import AccountFormLines from "../../cards/account_card/AccountFormLines";
import HiddenField from "../../forms/HiddenField";
import {updateCompanyData} from "../../../../reducers/siteSlice";
import CardForm from "../../forms/CardForm";

/**
 * Форма редактирования данных о компании
 * @param company
 * @param setEditCompanyData
 * @returns {JSX.Element}
 * @constructor
 */
const AccountEditCompanyForm = ({company, setLoading, setCardMode}) => {
    const dispatch = useDispatch();
    const values = [
        {name: "name", title: "Наименование", value: company.name, type: "text", required: true},
        {name: "address", title: "Юр.адрес", value: company.address, type: "textarea", required: true},
        {name: "phone", title: "Телефон", value: company.phone, type: "text", required: false},
        {name: "email", title: "Электронная почта", value: company.email, type: "text", required: true},
        {name: "itn", title: "ИНН", value: company.itn, type: "text", required: true},
        {name: "crs", title: "КПП", value: company.crs, type: "text", required: false},
    ];

    /**
     * Закрыть форму редактирования
     * @param e
     */
    const close = (e) => {
        e.preventDefault();
        setCardMode("show");
    }

    /**
     * Сохранение введённых значений
     */
    const save = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const entryData = Object.fromEntries(formData);
        updateCompany(entryData);
    };

    /**
     * Сохранение введённых значений
     */
    const updateCompany = (companyData) => {
        //TODO заменить на реальный запрос к серверу
        const request = new Promise(resolve =>
            setTimeout(() => resolve(JSON.stringify(companyData)), 1000));

        request.then(json => JSON.parse(String(json)))
            .then(data => dispatch(updateCompanyData(data)))
            .catch(error => console.error("Ошибка запроса к серверу на сохранение данных о компании\n" + error))
            .finally(() => setLoading(false));
    };

    return (
        <CardForm className={"account-company__form account__form"} onSubmit={e => save(e)} close={close}>
            <HiddenField name="id" value={company.id}/>
            <AccountFormLines values={values} classType="company"/>
        </CardForm>
    );
};

export default AccountEditCompanyForm;