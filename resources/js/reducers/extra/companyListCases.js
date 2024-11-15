import {companyListLoader} from "../loaders/companyListLoader";
/**
 * Загрузка информации о компаниях пользователя
 * @param builder
 * @returns {*}
 */
export const companyListCases = (builder) => {
    builder
        .addCase(companyListLoader.pending, (state) => {
            state.loadingStatus.companyList = true;
        })
        .addCase(companyListLoader.fulfilled, (state, {payload}) => {
            state.companyList = payload;
            state.loadingStatus.companyList = false;
        })
        .addCase(companyListLoader.rejected, (state, {payload}) => {
            state.loadingStatus.companyList = false;
            state.loadingError.companyList = true;
        });
    return builder;
};