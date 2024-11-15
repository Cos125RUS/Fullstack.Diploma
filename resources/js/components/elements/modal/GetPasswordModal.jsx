import ModalBox from "./elements/ModalBox";
import CharLogo from "../svg/CharLogo";
import ModalForm from "./elements/ModalForm";
import ModalInput from "./elements/ModalInput";

/**
 * Модальное окно сброса пароля
 * @param closeModal
 * @param setModal
 * @returns {JSX.Element}
 * @constructor
 */
const GetPasswordModal = ({closeModal, setActiveModal, setEmail}) => {
    /**
     * Отправка нового пароля
     * @param e
     */
    const sendPassword = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entryData = Object.fromEntries(formData);
        //заглушка
        if (true) {
            //TODO Добавить проверку почты перед отправкой
            setEmail(entryData.email);
            setActiveModal("successDropPass");
        }
    };

    return (
        <ModalBox closeModal={closeModal} logo={<CharLogo/>} title="Сбросить пароль">
            <ModalForm onSubmit={sendPassword} action={""/*//TODO добавить*/} submitText="прислать пароль">
                <ModalInput name="email" placeholder="Ваша электронная почта" type="email" required={true}/>
            </ModalForm>
        </ModalBox>
    );
};

export default GetPasswordModal;