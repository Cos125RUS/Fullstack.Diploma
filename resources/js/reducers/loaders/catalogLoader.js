import {createAsyncThunk} from "@reduxjs/toolkit";
import {products} from "../../data/products";

/**
 * Загрузчик данных о каталоге товаров
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const catalogLoader = createAsyncThunk(
    'site/catalog/catalogLoader', async () => {
        // имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(products), 1000)
        ).then(catalog => catalog);
    }
);