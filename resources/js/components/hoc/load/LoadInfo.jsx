import InfoModalContent from "../../elements/modal/elements/info/InfoModalContent";
import {requestInfo} from "../../../funcs/request/requestInfo";
import {useEffect, useState} from "react";
import SimplePreloader from "../../elements/preloaders/SimplePreloader";
import {useDispatch, useSelector} from "react-redux";
import {addInfo} from "../../../reducers/siteSlice";

/**
 * Загрузка справочной информации
 * @returns {JSX.Element}
 * @constructor
 */
const LoadInfo = ({id}) => {
    const [infoData, setInfoData] = useState(null);
    const dispatch = useDispatch();
    const info = useSelector(state => state.info);

    useEffect(() => {
        if (Object.keys(info).includes(id)) {
            setInfoData(info[id]);
        } else {
            const request = requestInfo(id);
            request.then(data => {
                setInfoData(data);
                dispatch(addInfo(data));
            });
        }
    }, []);

    return infoData ? <InfoModalContent data={infoData}/> : <SimplePreloader/>;
};

export default LoadInfo;