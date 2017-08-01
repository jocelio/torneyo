<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model {

    protected $fillable = ["name", "description", "image", "equipe_id"];

    protected $dates = [];

    public static $rules = [
        "name" => "required",
        "description" => "required",
        "image" => "required",
        "equipe_id" => "numeric",
    ];

    // Relationships

}
