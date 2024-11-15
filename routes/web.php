<?php

use Illuminate\Support\Facades\Route;

Route::get('/laravel', function () {
    return view('welcome');
});

// Маршрут для админов
Route::get('/admin', function () {
    return "здесь будет админ-панель";
});

// Маршрут для менеджеров
Route::get('/management', function () {
    return "здесь будет страница для менеджеров";
});

// Маршрут для клиентов
Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
