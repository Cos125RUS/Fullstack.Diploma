import {salesLoader} from "../loaders/salesLoader";

export const salesCases = (builder) => {
    builder
        .addCase(salesLoader.pending, (state) => {
            state.loadingStatus.sales = true;
        })
        .addCase(salesLoader.fulfilled, (state, {payload}) => {
            state.sales = payload;
            state.loadingStatus.sales = false;
        })
        .addCase(salesLoader.rejected, (state, {payload}) => {
            state.loadingStatus.sales = false;
            state.loadingError.sales = true;
        });
    return builder;
};