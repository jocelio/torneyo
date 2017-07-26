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



$app->get('/', function ()  {
    return view('home', ['name' => 'teste']);
});




/**
 * Routes for resource equipe
 */
$app->get('equipe/search/', 'EquipesController@search');
$app->get('equipe', 'EquipesController@all');
$app->get('equipe/{id}', 'EquipesController@get');
$app->post('equipe', 'EquipesController@add');
$app->put('equipe/{id}', 'EquipesController@put');
$app->delete('equipe/{id}', 'EquipesController@remove');

Dusterio\LumenPassport\LumenPassport::routes($app);


//Dusterio\LumenPassport\LumenPassport::routes($app, ['prefix' => 'v1/oauth']);
/**
 * Routes for resource task
 */
$app->get('task', 'TasksController@all');
$app->get('task/{id}', 'TasksController@get');
$app->post('task', 'TasksController@add');
$app->put('task/{id}', 'TasksController@put');
$app->delete('task/{id}', 'TasksController@remove');

/**
 * Routes for resource user
 */
$app->get('UserSeeder', 'UsersController@all');
$app->get('user/{id}', 'UsersController@get');
$app->post('UserSeeder', 'UsersController@add');
$app->put('user/{id}', 'UsersController@put');
$app->delete('user/{id}', 'UsersController@remove');
