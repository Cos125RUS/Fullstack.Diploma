/**
 * Перехватчик поисковых запросов
 * @param navigate
 * @returns {(function({payload: *}): void)|*}
 */
export const useSearch = (navigate) => {
    return ({payload}) => {
        console.log(payload);
        // navigate('/');
        //TODO добавить обработку поиска
    };
};