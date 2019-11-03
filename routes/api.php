<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/projects','ApiController@getProjects');
Route::get('/categories','ApiController@getCategories');
Route::get('/project/{id}','ApiController@getProject');
Route::get('/slides','ApiController@getSlides');
Route::get('/about', 'ApiController@getAbout');
Route::get('/articles','ApiController@getArticles');
Route::get('/settings','ApiController@getSettings');
Route::get('/index_blocks','ApiController@getIndex');
Route::get('/index_categories','ApiController@getIndexCategories');
