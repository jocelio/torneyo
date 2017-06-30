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

$app->routeMiddleware([
    'auth' => App\Http\Middleware\AuthTokenBearer::class,
]);

$app->get('/login', function ()  {
    return view('login');
});

$app->post('/login', 'UserController@login');

$app->get('/',['middleware' => 'auth', function ()  {
    return view('home', ['name' => 'teste']);
}]);


