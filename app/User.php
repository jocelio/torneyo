<?php

namespace App;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;
use Illuminate\Database\Eloquent\Model as Model;

class User extends Model implements Authenticatable
{
    use AuthenticableTrait;

    protected $fillable = ["username", "email","password"];

    public static $rules = [
        "username" => "required",
        "email" => "required",
        'password' => 'required'
    ];

}
