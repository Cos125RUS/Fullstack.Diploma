import {configureStore} from "@reduxjs/toolkit";
import persistedReducer from "../reducers/persistedReducer";

/**
 * Персистентное хранилище
 * @type {EnhancedStore<{aboutUs: [], loadingStatus: {aboutUs: boolean, searchHints: boolean, catalog: boolean, salesInfo: boolean, banners: boolean, items: boolean, cart: boolean}, loadingError: {aboutUs: boolean, searchHints: boolean, catalog: boolean, salesInfo: boolean, banners: boolean, items: boolean, cart: boolean}, searchHints: [], catalog: [], linkToPrice: string, salesInfo: [], banners: [], items: [], cart: {count: number, items: []}, openOptions: []} & PersistPartial, UnknownAction, Tuple<[StoreEnhancer<{dispatch: ExtractDispatchExtensions<Tuple<ExcludeFromTuple<[ThunkMiddlewareFor<{aboutUs: [], loadingStatus: {aboutUs: boolean, searchHints: boolean, catalog: boolean, salesInfo: boolean, banners: boolean, items: boolean, cart: boolean}, loadingError: {aboutUs: boolean, searchHints: boolean, catalog: boolean, salesInfo: boolean, banners: boolean, items: boolean, cart: boolean}, searchHints: [], catalog: [], linkToPrice: string, salesInfo: [], banners: [], items: [], cart: {count: number, items: []}, openOptions: []} & PersistPartial, {serializableCheck: {ignoreActions: string[]}}>], never>>>}>, StoreEnhancer]>>}
 */
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: ['persist/PERSIST']
        }
    })
});

export default store;