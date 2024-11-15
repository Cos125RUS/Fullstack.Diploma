import {createAsyncThunk} from "@reduxjs/toolkit";
import {items} from "../../data/items";

/**
 * Загрузка информации о товаре
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const itemsLoader = createAsyncThunk(
    'site/items/itemsLoader', async () => {
        // имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(items), 1000)
        ).then(items => items);
    }
);