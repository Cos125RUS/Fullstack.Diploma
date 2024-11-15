import {info} from "../../data/info";

/**
 * Запрос справочной информации
 * @param id
 */
export const requestInfo = (id) => {
    // имитация запроса данных
    return new Promise(
        resolve => setTimeout(() => resolve({
            fakeId: parseInt(String(Math.random()*1000)),
            stubId: id,
            ...info
        }), 1000)
    );
};