import {createSlice} from "@reduxjs/toolkit";
import {catalogCases} from "./extra/catalogCases";
import {aboutUsCases} from "./extra/aboutUsCases";
import {bannersCases} from "./extra/bannersCases";
import {salesInfoCases} from "./extra/salesInfoCases";
import {searchHintsCases} from "./extra/searchHintsCases";
import {itemsCases} from "./extra/itemsCases";
import {salesCases} from "./extra/salesCases";
import {userCases} from "./extra/userCases";
import {accountRoutesCases} from "./extra/accountRoutesCases";
import {companyListCases} from "./extra/companyListCases";
import {ordersCases} from "./extra/ordersCases";
import {env} from "../config/env";

const siteSlice = createSlice({
    name: "site",
    initialState: {
        env: env,
        cart: {
            count: 0,
            items: [],
            sum: 0
        },
        isAuth: false,
        user: [],
        companyList: [],
        orders: [],
        salesInfo: [],
        searchHints: [],
        banners: [],
        catalog: [],
        items: [],
        info: {},
        sales: [],
        aboutUs: [],
        accountRoutes: [],
        linkToPrice: "files\\price.pdf",
        loadingStatus: {
            cart: false,
            user: false,
            companyList: false,
            orders: false,
            salesInfo: false,
            // searchHints: false,
            banners: false,
            catalog: false,
            items: false,
            sales: false,
            aboutUs: false,
            accountRoutes: false,
        },
        loadingError: {
            cart: false,
            user: false,
            companyList: false,
            orders: false,
            salesInfo: false,
            // searchHints: false,
            banners: false,
            catalog: false,
            items: false,
            sales: false,
            aboutUs: false,
            accountRoutes: false,
        },
    },
    reducers: {
        /**
         * Изменение активной метки раздела О Нас на главной странице
         * @param state
         * @param action
         */
        changeActive: (state, action) => {
            state.aboutUs.forEach(item => item.isActive = item.index === action.payload.index);
        },
        /**
         * Добавление товара в корзину
         * @param state
         * @param action
         */
        addToCart: (state, action) => {
            state.cart.count++;
            //TODO Добавить суммирование имеющихся ранее позиций
            state.cart.items.push(action.payload);
            state.cart.sum += action.payload.total;
            //TODO добавить отправку данных на сервер
        },
        /**
         * Удаление товара из корзины
         * @param state
         * @param action
         */
        deleteFromCart: (state, action) => {
            state.cart.count--;
            state.cart.sum -= action.payload.total;
            state.cart.items = state.cart.items.filter(item => item.cartId !== action.payload.cartId);
        },
        /**
         * Обновление информации о товаре в корзине
         * @param state
         * @param action
         */
        updateInCart: (state, action) => {
            const oldTotal = state.cart.items.filter(item => item.cartId === action.payload.cartId)[0].total;
            const newTotal = action.payload.total;
            const difference = newTotal - oldTotal;
            state.cart.sum += difference;
            state.cart.items.filter(item => item.cartId === action.payload.cartId)[0].total = newTotal;
            state.cart.items.filter(item => item.cartId === action.payload.cartId)[0].selected.count = action.payload.use.count[0];
            state.cart.items.filter(item => item.cartId === action.payload.cartId)[0].selected.countsType = action.payload.use.countsType[0];
            state.cart.items.filter(item => item.cartId === action.payload.cartId)[0].selected.cutting = action.payload.use.cutting[0];
            state.cart.items.filter(item => item.cartId === action.payload.cartId)[0].selected.size = action.payload.use.size[0];
            state.cart.items.filter(item => item.cartId === action.payload.cartId)[0].selected.thickness = action.payload.use.thickness[0];
            state.cart.items.filter(item => item.cartId === action.payload.cartId)[0].selected.total = newTotal;
        },
        /**
         * Подтверждение покупки
         * @param state
         * @param action
         */
        confirmBuy: (state, {payload}) => {
            console.log('Подтверждение покупки на сумму ' + state.cart.sum);
            state.cart.items = [];
            state.cart.sum = 0;
            state.cart.count = 0;
            state.orders.push(payload);
        },
        /**
         * Добавление в список истории поиска
         * @param state
         * @param payload
         */
        addToSearchHints: (state, {payload}) => {
            state.searchHints.unshift(payload);
        },
        /**
         * Авторизация пользователя
         * @param state
         * @param payload
         */
        authUser: (state, {payload}) => {
            //TODO реализовать
            //заглушка
            state.isAuth = true;
        },
        /**
         * Выход из учётной записи
         * @param state
         * @param payload
         */
        logoutUser: (state, {payload}) => {
            //TODO реализовать
            state.isAuth = false;
            state.user = [];
            state.companyList = [];
            state.orders = [];
        },
        /**
         * Обновление данных пользователя
         * @param state
         * @param payload
         */
        updateUserProfile: (state, {payload}) => {
            const keys = Object.keys(payload).filter(key => Object.keys(state.user).includes(key));
            keys.forEach(key => state.user[key] = payload[key]);
        },
        /**
         * Переключатель индикатора загрузки данных пользователя
         * @param state
         */
        switchLoadingUser: (state) => {
            state.loadingStatus.user = !state.loadingStatus.user;
        },
        /**
         * Обновить данные о компании
         * @param state
         * @param payload
         */
        updateCompanyData: (state, {payload}) => {
            payload.id = parseInt(String(payload.id));
            const company = state.companyList.filter(company => company.id === payload.id)[0];
            const keys = Object.keys(payload).filter(key => Object.keys(company).includes(key));
            keys.forEach(key => company[key] = payload[key]);
        },
        /**
         * Добавить данные о новой компании
         * @param state
         * @param payload
         */
        addNewCompany: (state, {payload}) => {
            //заглушка
            payload.id = state.companyList[state.companyList.length - 1].id + 1;
            state.companyList.push(payload);
        },
        /**
         * Добавить в хранилище информационную информацию о позиции
         * @param state
         * @param payload
         */
        addInfo: (state, {payload}) => {
            state.info[payload.id] = payload;
        },
    },
    extraReducers: (builder) => {
        catalogCases(builder);
        itemsCases(builder);
        salesCases(builder);
        aboutUsCases(builder);
        bannersCases(builder);
        salesInfoCases(builder);
        // searchHintsCases(builder);
        userCases(builder);
        accountRoutesCases(builder);
        companyListCases(builder);
        ordersCases(builder);
    },
});

export const {
    changeActive,
    addToCart,
    deleteFromCart,
    updateInCart,
    confirmBuy,
    addToSearchHints,
    authUser,
    logoutUser,
    updateUserProfile,
    switchLoadingUser,
    updateCompanyData,
    addNewCompany,
    addInfo,
} = siteSlice.actions;

export default siteSlice.reducer;