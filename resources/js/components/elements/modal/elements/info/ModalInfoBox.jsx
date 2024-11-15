import CloseModalBtn from "../../../buttons/CloseModalBtn";
import InfoModalTitle from "./InfoModalTitle";
import LoadInfo from "../../../../hoc/load/LoadInfo";

/**
 * Контейнер модального окна с информационной справкой
 * @param handleModalClose
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const ModalInfoBox = ({handleModalClose, children}) => {
  return (
      <div className="modal-info__box">
          <CloseModalBtn closeModal={handleModalClose} className="modal-info__cross"/>
          <InfoModalTitle/>
          {children}
      </div>
  );
};

export default ModalInfoBox;