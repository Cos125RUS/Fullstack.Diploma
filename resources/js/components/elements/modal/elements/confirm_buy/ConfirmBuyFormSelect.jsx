import {useState} from "react";
import ConfirmBuyFormInput from "./ConfirmBuyFormInput";
import ConfirmBuyFormDetails from "./ConfirmBuyFormDetails";

/**
 * Селектор выбора контрагента на модальном окне подтверждения заказа
 * @returns {JSX.Element}
 * @constructor
 */
const ConfirmBuyFormSelect = ({setOptions}) => {
    const [entryMode, setShowMode] = useState(false);

    return (
        <div className="modal-confirm__form-select-box modal-confirm__form-bd">
            {!entryMode ? <ConfirmBuyFormDetails setOptions={setOptions} setShowMode={setShowMode}/> :
                <ConfirmBuyFormInput setOptions={setOptions} setShowMode={setShowMode}/>}
        </div>
    );
};

export default ConfirmBuyFormSelect;