import classNames from "classnames";

/**
 * Кнопка сохранения данных в окне редактирования на странице личного кабинета
 * @returns {JSX.Element}
 * @constructor
 */
const SubmitAccountBtn = ({classType}) => {
    return (
        <div className={classNames("account__form-save-btn", `account-${classType}__form-save-btn`)}>
            <input type="submit" value="сохранить" className="btn btn-big btn-blue"/>
        </div>
    );
};

export default SubmitAccountBtn;