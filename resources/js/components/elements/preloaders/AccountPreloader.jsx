import {useSelector} from "react-redux";
import {useEffect} from "react";
import ChamomileAnimationSvg from "../svg/animation/ChamomileAnimationSvg";

const AccountPreloader = ({setProfileMode}) => {
    const loadingStatus = useSelector(state => state.loadingStatus.user);

    useEffect(() => {
        if (!loadingStatus) setProfileMode("show");
    }, [loadingStatus]);

    return (
        <ChamomileAnimationSvg/>
    );
};

export default AccountPreloader;