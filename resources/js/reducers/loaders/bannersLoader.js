import {createAsyncThunk} from "@reduxjs/toolkit";
import {banners} from "../../data/banners";

/**
 * Загрузчик данных о баннерах
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const bannersLoader = createAsyncThunk(
    'site/banners/bannersLoader', async () => {
        // имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(banners), 1000)
        ).then(banners => banners);
    }
);