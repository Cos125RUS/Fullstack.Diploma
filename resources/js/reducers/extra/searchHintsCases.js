import {searchHintsLoader} from "../loaders/searchHintsLoader";

/**
 * Загрузка истории поиска
 * @param builder
 * @returns {*}
 */
export const searchHintsCases = (builder) => {
    builder
        .addCase(searchHintsLoader.pending, (state) => {
            state.loadingStatus.searchHints = true;
        })
        .addCase(searchHintsLoader.fulfilled, (state, {payload}) => {
            state.searchHints = payload;
            state.loadingStatus.searchHints = false;
        })
        .addCase(searchHintsLoader.rejected, (state, {payload}) => {
            state.loadingStatus.searchHints = false;
            state.loadingError.searchHints = true;
        });
    return builder;
};