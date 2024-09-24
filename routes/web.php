<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartaController;
use Illuminate\Routing\RouteGroup;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [CartaController::class, 'indexx']);
Route::get('/bebidas', [CartaController::class, 'bebidas']);
Route::get('/cervezas', [CartaController::class, 'cervezas']);
Route::get('/vinos', [CartaController::class, 'vinos']);
Route::get('/pollos', [CartaController::class, 'pollos']);
Route::get('/mariscos', [CartaController::class, 'mariscos']);
Route::get('/chifa', [CartaController::class, 'chifa']);
Route::get('/sopas', [CartaController::class, 'sopas']);
Route::get('/criolla', [CartaController::class, 'criolla']);
Route::get('/auth', function () {
    return view('auth.login');
});

/*Route::get('/plato', function () {
    return view('plato.index');
});

Route::get('/plato/create', [CartaController::class, 'create']);
*/

Route::resource('plato', CartaController::class)->middleware('auth');

Auth::routes(['register' => false, 'reset' => false]);

Route::get('/home', [CartaController::class, 'index'])->name('home');

Route::group(['middleware' => 'auth'], function () {

    Route::get('/auth', [CartaController::class, 'index'])->name('home');
});
