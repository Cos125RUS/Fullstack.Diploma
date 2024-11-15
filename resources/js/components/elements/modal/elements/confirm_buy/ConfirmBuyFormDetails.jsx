import {useDispatch, useSelector} from "react-redux";
import {companyListLoader} from "../../../../../reducers/loaders/companyListLoader";
import {useEffect, useRef, useState} from "react";

/**
 * Выпадающее меню выбора компании в модальном окне подтверждения заказа
 * @param setShowMode
 * @param setOptions
 * @returns {JSX.Element}
 * @constructor
 */
const ConfirmBuyFormDetails = ({setShowMode, setOptions}) => {
    const detailsRef = useRef();
    const companyList = useSelector(state => state.companyList);
    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [active, setActive] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [summaryClassName, setSummaryClassName] = useState("modal-confirm__form-summary modal-confirm__form-input uppercase");

    useEffect(() => {
        companyList.length === 0 && dispatch(companyListLoader());
    }, [companyList]);

    useEffect(() => {
        setActive(currentIndex !== -1 ? companyList[currentIndex].name : "");
    }, [currentIndex]);

    useEffect(() => {
        setSummaryClassName(!isOpen ? "modal-confirm__form-summary modal-confirm__form-input uppercase" :
            "modal-confirm__form-summary modal-confirm__form-summary__open modal-confirm__form-input uppercase");
    }, [isOpen]);

    /**
     * Обработка выбора пользователя
     * @param index
     */
    const processingSelectOption = (index) => {
        if (index !== -1) {
            setOptions(1); //Разблокируем следующий уровень выбора модального окна
            setCurrentIndex(index);
            detailsRef.current.open = false;
            setIsOpen(false);
        } else {
            setShowMode(true);
        }
    };

    return (
        <div className="modal-confirm__form-details-box">
            <details className="modal-confirm__form-details cp" ref={detailsRef}>
                <summary className={summaryClassName}
                         onClick={e => setIsOpen(!isOpen)}>{active}</summary>
                <ul className="modal-confirm__form-details-list">
                    {companyList.map((company, index) =>
                        <li className="modal-confirm__form-details-item" key={index}>
                            <label className="cp" onClick={e => processingSelectOption(index)}>
                                {company.name}
                                <input type="radio" name="pay" value={`id=${company.id}`}/>
                            </label>
                        </li>)}
                    <li className="modal-confirm__form-details-item uppercase">
                        <label className="cp" onClick={e => processingSelectOption(-1)}>
                            новая компания
                            <input type="radio" name="pay"/>
                        </label>
                    </li>
                </ul>
            </details>
        </div>
    );
};

export default ConfirmBuyFormDetails;