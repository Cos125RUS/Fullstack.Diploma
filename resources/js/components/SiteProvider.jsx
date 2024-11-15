import store from "../modules/store";
import {PersistGate} from "redux-persist/integration/react";
import persistor from "../modules/persistor";
import SiteRouter from "./SiteRouter";
import {Provider} from "react-redux";
import {StyleSheetManager} from "styled-components";
import {shouldForwardProp} from "../config/shouldForwardProp";

const SiteProvider = () => {
    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    <SiteRouter/>
                </PersistGate>
            </Provider>
        </StyleSheetManager>
    );
};

export default SiteProvider;