import {createAsyncThunk} from "@reduxjs/toolkit";
import {sales} from "../../data/sales";

/**
 * Загрузка данных о страницах раздела "Покупателям"
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const salesLoader = createAsyncThunk(
    'site/sales/salesLoader', async () => {
        // имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(sales), 1000)
        ).then(sales => sales);
    }
);