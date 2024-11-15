import {userLoader} from "../loaders/userLoader";

/**
 * Загрузка информации о пользователе
 * @param builder
 * @returns {*}
 */
export const userCases = (builder) => {
    builder
        .addCase(userLoader.pending, (state) => {
            state.loadingStatus.user = true;
        })
        .addCase(userLoader.fulfilled, (state, {payload}) => {
            state.user = payload;
            state.loadingStatus.user = false;
        })
        .addCase(userLoader.rejected, (state, {payload}) => {
            state.loadingStatus.user = false;
            state.loadingError.user = true;
        });
    return builder;
};