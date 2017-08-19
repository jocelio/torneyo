<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

use Illuminate\Http\Request;
use App\User;

class UserController extends BaseController
{
    private $salt;

    public function __construct()
    {
        $this->salt="userloginregister";
    }
    public function login(Request $request){

        if ($request->has('username') && $request->has('password')) {
            $user = new User();
            $user->name ="Jocelio Lima";
            $user->email ="";

            if ($user) {
                $token=str_random(60);
                $user->api_token = $token;
//                ?$user->save();
                return $user->api_token;
            } else {
                return "user not found";
            }
        } else {
            return "username and passwords is required";
        }
    }
}
