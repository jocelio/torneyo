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



$app->get('/login', function ()  {
    return view('login', ['name' => 'teste']);
});

    $app->get('/', function ()  {
        return view('home');
    });
$app->group(['middleware' => ['auth']], function($app) {

    $app->get('equipe/search/', 'EquipesController@searchEquipe');
    $app->get('equipe', 'EquipesController@all');
    $app->get('equipe/{id}', 'EquipesController@get');
    $app->post('equipe', 'EquipesController@addEquipe');
    $app->put('equipe/{id}', 'EquipesController@put');
    $app->delete('equipe/{id}', 'EquipesController@removeEquipe');

    /**
     * Routes for resource player
     */
    $app->get('player', 'PlayersController@all');
    $app->get('player/{id}', 'PlayersController@get');
    $app->post('player', 'PlayersController@addPlayer');
    $app->put('player/{id}', 'PlayersController@put');
    $app->delete('player/{id}', 'PlayersController@removePlayer');

    /**
     * Routes for resource user
     */
    $app->get('User', 'UsersController@all');
    $app->get('user/{id}', 'UsersController@get');
    $app->post('UserSeeder', 'UsersController@add');
    $app->put('user/{id}', 'UsersController@put');
    $app->delete('user/{id}', 'UsersController@remove');

});



Dusterio\LumenPassport\LumenPassport::routes($app);


//Dusterio\LumenPassport\LumenPassport::routes($app, ['prefix' => 'v1/oauth']);



