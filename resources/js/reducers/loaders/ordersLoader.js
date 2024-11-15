import {createAsyncThunk} from "@reduxjs/toolkit";
import {orders} from "../../data/orders";

/**
 * Загрузка информации о покупках
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const ordersLoader = createAsyncThunk(
    'site/orders/ordersLoader', async () => {
        // имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(orders), 1000)
        ).then(orders => orders);
    }
);