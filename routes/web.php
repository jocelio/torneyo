<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/



//$app->get('/', function ()  {
//    return view('login');
//});

$app->get('/', function ()  {
    return view('home', ['name' => 'teste']);
});

//$app->post('/login', 'UserController@login');

//----------------


/**
 * Routes for resource equipe
 */
$app->get('equipe', 'EquipesController@all');
$app->get('equipe/{id}', 'EquipesController@get');
$app->get('equipe/search', 'EquipesController@search');
$app->post('equipe', 'EquipesController@add');
$app->put('equipe/{id}', 'EquipesController@put');
$app->delete('equipe/{id}', 'EquipesController@remove');
