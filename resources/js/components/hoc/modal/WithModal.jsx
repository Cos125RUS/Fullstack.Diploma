import {useState} from "react";
import Modal from "./Modal";

/**
 * Подготовка создания модального окна
 * @param component
 * @param componentProps
 * @param modal
 * @returns {JSX.Element}
 * @constructor
 */
const WithModal = ({component, modal}) => {
    const [isModalActive, setIsModalActive] = useState(false);

    /**
     * Закрытие модального окна
     */
    const handleModalClose = () => {
        setIsModalActive(false);
    };

    /**
     * Открыть модальное окно авторизации
     */
    const handleModalOpen = () => {
        setIsModalActive(true);
    };

    return (
        <>
            {component(handleModalOpen)}
            {isModalActive && <Modal onClose={handleModalClose} children={(closeModal) => modal(closeModal)}/>}
        </>
    );
};

export default WithModal;