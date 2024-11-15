import {itemsLoader} from "../loaders/itemsLoader";

/**
 * Кейсы загрузки позиций
 * @param builder
 * @returns {*}
 */
export const itemsCases = (builder) => {
    builder
        .addCase(itemsLoader.pending, (state) => {
            state.loadingStatus.items = true;
        })
        .addCase(itemsLoader.fulfilled, (state, {payload}) => {
            state.items = payload;
            state.loadingStatus.items = false;
        })
        .addCase(itemsLoader.rejected, (state, {payload}) => {
            state.loadingStatus.items = false;
            state.loadingError.items = true;
        });
    return builder;
};