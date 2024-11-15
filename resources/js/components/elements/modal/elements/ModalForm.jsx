import CSRF from "../../forms/CSRF";
import ModalInputSubmit from "./ModalInputSubmit";
import ChamomileAnimationSvg from "../../svg/animation/ChamomileAnimationSvg";
import ChamomilePreloader from "../../preloaders/ChamomilePreloader";

/**
 * Форма ввода модального окна
 * @param onSubmit
 * @param action
 * @param submitText
 * @param children
 * @param loading
 * @returns {JSX.Element}
 * @constructor
 */
const ModalForm = ({onSubmit, action, submitText, children, loading = false}) => {
    return (
        <form className="modal__form" method="POST" action={action}
              onSubmit={e => onSubmit(e)}>
            <CSRF/>
            {children}
            {!loading ? <ModalInputSubmit text={submitText}/> :
                <ChamomilePreloader className="loader-btn"/>}
        </form>);
};

export default ModalForm;