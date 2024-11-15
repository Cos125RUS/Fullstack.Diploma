import {accountRoutesLoader} from "../loaders/accountRoutesLoader";

/**
 * Кейсы загрузки маршрутов для страниц личного кабинета
 * @param builder
 * @returns {*}
 */
export const accountRoutesCases = (builder) => {
    builder
        .addCase(accountRoutesLoader.pending, (state) => {
            state.loadingStatus.accountRoutes = true;
        })
        .addCase(accountRoutesLoader.fulfilled, (state, {payload}) => {
            state.accountRoutes = payload;
            state.loadingStatus.accountRoutes = false;
        })
        .addCase(accountRoutesLoader.rejected, (state, {payload}) => {
            state.loadingStatus.accountRoutes = false;
            state.loadingError.accountRoutes = true;
        });
    return builder;
};