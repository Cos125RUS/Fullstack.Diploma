import {ordersLoader} from "../loaders/ordersLoader";

export const ordersCases = (builder) => {
    builder
        .addCase(ordersLoader.pending, (state) => {
            state.loadingStatus.orders = true;
        })
        .addCase(ordersLoader.fulfilled, (state, {payload}) => {
            state.orders = payload;
            state.loadingStatus.orders = false;
        })
        .addCase(ordersLoader.rejected, (state, {payload}) => {
            state.loadingStatus.orders = false;
            state.loadingError.orders = true;
        });
    return builder;
};