import {useCallback, useEffect, useRef, useState} from "react";
import {createContainer} from "../../../funcs/createContainer";
import Portal from "../portals/Portal";

const MODAL_CONTAINER_ID = 'modal-container-id';

/**
 * Модальное окно
 * @param onClose
 * @param children
 * @returns {JSX.Element|null}
 * @constructor
 */
const Modal = ({onClose, children}) => {
    const rootRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    const handleClose = useCallback(() => {
        onClose?.();
    }, [onClose]);

    useEffect(() => {
        createContainer({id: MODAL_CONTAINER_ID});
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleWrapperClick = (e) => {
            if (e.target instanceof Node && rootRef.current === e.target) {
                onClose?.();
            }
        };

        const handleEscapePress = (e) => {
            if (e.key === 'Escape') {
                onClose?.();
            }
        };

        window.addEventListener('mousedown', handleWrapperClick);
        window.addEventListener('keydown', handleEscapePress);

        return () => {
            window.removeEventListener('mousedown', handleWrapperClick);
            window.removeEventListener('keydown', handleEscapePress);
        }
    }, [onClose]);

    return (
        isMounted ? (<Portal id={MODAL_CONTAINER_ID}>
            <div className="modal-background"></div>
            <div ref={rootRef} className="modal-container">
                {children(handleClose)}
            </div>
        </Portal>) : null
    );
};

export default Modal;