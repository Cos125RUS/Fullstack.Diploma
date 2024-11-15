import {createAsyncThunk} from "@reduxjs/toolkit";
import {aboutUs} from "../../data/aboutUs";

/**
 * Загрузчик данных раздела "О Нас"
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const aboutUsLoader = createAsyncThunk(
    'site/aboutUs/aboutUsLoader', async () => {
        // имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(aboutUs), 1000)
        ).then(data => data);
    }
);