<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model {

    protected $fillable = ["name", "surname", "image", "equipe_id"];

    protected $dates = [];

    public static $rules = [
        "name" => "required",
        "surname" => "required",
        "equipe_id" => "numeric",
    ];

    // Relationships

}
