import {salesInfoLoader} from "../loaders/salesInfoLoader";

/**
 * Загрузка ссылок на страницы с информацией для покупателей
 * @param builder
 * @returns {*}
 */
export const salesInfoCases = (builder) => {
    builder
        .addCase(salesInfoLoader.pending, (state) => {
            state.loadingStatus.salesInfo = true;
        })
        .addCase(salesInfoLoader.fulfilled, (state, {payload}) => {
            state.salesInfo = payload;
            state.loadingStatus.salesInfo = false;
        })
        .addCase(salesInfoLoader.rejected, (state, {payload}) => {
            state.loadingStatus.salesInfo = false;
            state.loadingError.salesInfo = true;
        });
    return builder;
};