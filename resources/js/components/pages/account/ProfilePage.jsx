import PageContent from "../../blocks/content/PageContent";
import WideCard from "../../elements/cards/WideCard";
import CardsList from "../../elements/cards/CardsList";
import AccountProfileCard from "../../elements/account/profile/AccountProfileCard";
import {useEffect, useState} from "react";
import AccountProfileForm from "../../elements/account/profile/AccountProfileForm";
import {useSelector} from "react-redux";
import SimplePreloader from "../../elements/preloaders/SimplePreloader";

/**
 * Страница профиля пользователя
 * @returns {JSX.Element}
 * @constructor
 */
const ProfilePage = () => {
    const loadingStatus = useSelector(state => state.loadingStatus.user);
    const [profileMode, setProfileMode] = useState("show");

    useEffect(() => {
        if (loadingStatus) setProfileMode("load");
        else setProfileMode("show");
    }, [loadingStatus]);

    const profileViews = {
        load: <SimplePreloader/>,
        show: <AccountProfileCard setProfileMode={setProfileMode}/>,
        edit: <AccountProfileForm setProfileMode={setProfileMode}/>,
    };

    return (
        <PageContent pageClassName="account__profile">
            <CardsList>
                <WideCard>
                    {profileViews[profileMode]}
                </WideCard>
            </CardsList>
        </PageContent>
    );
};

export default ProfilePage;