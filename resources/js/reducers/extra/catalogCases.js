import {catalogLoader} from "../loaders/catalogLoader";

/**
 * Загрузка каталога товаров
 * @param builder 
 * @returns {*}
 */
export const catalogCases = (builder) => {
    builder
        .addCase(catalogLoader.pending, (state) => {
            state.loadingStatus.catalog = true;
        })
        .addCase(catalogLoader.fulfilled, (state, {payload}) => {
            state.catalog = payload;
            state.loadingStatus.catalog = false;
        })
        .addCase(catalogLoader.rejected, (state, {payload}) => {
            state.loadingStatus.catalog = false;
            state.loadingError.catalog = true;
        });
    return builder;
};