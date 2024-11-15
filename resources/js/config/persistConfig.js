import storage from 'redux-persist/lib/storage';

/**
 * Настройки конфигурации персистора
 * @type {{blacklist: string[], storage: WebStorage, key: string}}
 */
const persistConfig = {
    key: "site",
    storage,
    blacklist: ['loadingError', 'loadingStatus', 'user', 'isAuth', 'linkToPrice', 'sales', 'orders'],
};

export default persistConfig;