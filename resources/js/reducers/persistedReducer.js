import {persistReducer} from "redux-persist";
import persistConfig from "../config/persistConfig";
import siteReducer from "../reducers/siteSlice";

const persistedReducer = persistReducer(persistConfig, siteReducer);

export default persistedReducer;