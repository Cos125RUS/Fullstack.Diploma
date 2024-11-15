import {createAsyncThunk} from "@reduxjs/toolkit";
import {user} from "../../data/user";

/**
 * Загрузка данных о пользователе
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const userLoader = createAsyncThunk(
    'site/user/userLoader', async () => {
        // имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(user), 1000)
        ).then(user => user);
    }
);