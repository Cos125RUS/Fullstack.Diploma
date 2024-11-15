import {createAsyncThunk} from "@reduxjs/toolkit";
import {accountRoutes} from "../../data/accountRoutes";

/**
 * Загрузчик данных о страницах профиля
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const accountRoutesLoader = createAsyncThunk(
    'site/accountRoutes/accountRoutesLoader', async () => {
        // имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(accountRoutes), 1000)
        ).then(accountRoutes => accountRoutes);
    }
);