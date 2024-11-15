import LoadInfo from "../../hoc/load/LoadInfo";
import ModalInfoBox from "./elements/info/ModalInfoBox";

/**
 * Модальное окно с информацией о товаре
 * @returns {JSX.Element}
 * @constructor
 */
const InfoModal = ({handleModalClose, infoId}) => {
    return (
        <ModalInfoBox handleModalClose={handleModalClose}>
            <LoadInfo id={infoId}/>
        </ModalInfoBox>
    );
};

export default InfoModal;