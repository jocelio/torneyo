<?php
/**
 * Created by PhpStorm.
 * User: jocelio
 * Date: 25/07/17
 * Time: 21:59
 */

return [
    'defaults' => [
        'guard' => 'api',
        'passwords' => 'users',
    ],

    'guards' => [
        'api' => [
            'driver' => 'passport',
            'provider' => 'users',
        ],
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => \App\User::class
        ]
    ],
    'cipher' => 'AES-128-CBC'

];