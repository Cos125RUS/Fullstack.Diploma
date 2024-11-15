import CloseModalBtn from "../../buttons/CloseModalBtn";
import ModalTitle from "./ModalTitle";

/**
 * Контейнер модального окна
 * @param closeModal
 * @param logo
 * @param title
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const ModalBox = ({closeModal, logo, title, children}) => {
    return (
        <div className="modal-box">
            <CloseModalBtn closeModal={closeModal}/>
            <div className="modal__char-box">
                {logo}
            </div>
            <ModalTitle title={title}/>
            {children}
        </div>
    );
};

export default ModalBox;