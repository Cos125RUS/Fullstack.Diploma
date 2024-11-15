import UnknownAccountBtn from "./UnknownAccountBtn";
import WithModal from "../../../../hoc/modal/WithModal";
import SwitchModal from "../../../modal/SwitchModal";
import {useSelector} from "react-redux";
import LoadUser from "../../../../hoc/load/LoadUser";

/**
 * Выбор отображения кнопки входа в личный кабинет
 * @returns {JSX.Element}
 * @constructor
 */
const AccountButton = () => {
    let isAuth = useSelector(state => state.isAuth);

    return (
        isAuth ? <LoadUser/> : <WithModal
            component={(handleModalOpen) => <UnknownAccountBtn handleModalOpen={handleModalOpen}/>}
            modal={(closeModal) => <SwitchModal closeModal={closeModal}/>}/>
    );
};

export default AccountButton;