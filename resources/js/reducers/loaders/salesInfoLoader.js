import {createAsyncThunk} from "@reduxjs/toolkit";
import {salesInfo} from "../../data/salesInfo";

/**
 * Загрузчик данных о ссылках на страницы с информацией для покупателей
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const salesInfoLoader = createAsyncThunk(
    'site/salesInfo/salesInfoLoader', async () => {
        // имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(salesInfo), 1000)
        ).then(salesInfo => salesInfo);
    }
);