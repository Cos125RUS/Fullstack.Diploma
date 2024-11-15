import {createAsyncThunk} from "@reduxjs/toolkit";
import {companyList} from "../../data/companyList";

/**
 * Загрузка информации о компаниях пользователя
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const companyListLoader = createAsyncThunk(
    'site/companyList/companyListLoader', async () => {
        // имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(companyList), 1000)
        ).then(companyList => companyList);
    }
);