import {createAsyncThunk} from "@reduxjs/toolkit";
import {searchHints} from "../../data/searchHints";

/**
 * Загрузчик данных об истории поиска
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const searchHintsLoader = createAsyncThunk(
    'site/searchHints/searchHintsLoader', async () => {
        // имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(searchHints), 1000)
        ).then(searchHints => searchHints);
    }
);