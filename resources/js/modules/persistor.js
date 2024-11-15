import {persistStore} from "redux-persist";
import store from "./store";

/**
 * Персистор
 * @type {Persistor}
 */
const persistor = persistStore(store);

export default persistor;