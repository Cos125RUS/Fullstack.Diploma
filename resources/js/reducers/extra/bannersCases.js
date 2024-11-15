import {bannersLoader} from "../loaders/bannersLoader";

/**
 * Загрузка банеров
 * @param builder
 * @returns {*}
 */
export const bannersCases = (builder) => {
    builder
        .addCase(bannersLoader.pending, (state) => {
            state.loadingStatus.banners = true;
        })
        .addCase(bannersLoader.fulfilled, (state, {payload}) => {
            state.banners = payload;
            state.loadingStatus.banners = false;
        })
        .addCase(bannersLoader.rejected, (state, {payload}) => {
            state.loadingStatus.banners = false;
            state.loadingError.banners = true;
        });
    return builder;
};