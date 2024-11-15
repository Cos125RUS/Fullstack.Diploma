import {useEffect, useState} from "react";
import {createPortal} from "react-dom";

/**
 * Портал для модального окна
 * @param id
 * @param children
 * @returns {React.ReactPortal|null}
 * @constructor
 */
const Portal = ({id, children}) => {
    const [container, setContainer] = useState();

    useEffect(() => {
        if (id) {
            const portalContainer = document.getElementById(id);

            if (!portalContainer) {
                throw new Error('Необходимо добавить портал для контейнера');
            }

            setContainer(portalContainer);
        }
    }, [id]);

    return container ? createPortal(children, container) : null;
};

export default Portal;