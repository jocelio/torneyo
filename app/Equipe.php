<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipe extends Model {

    protected $fillable = ["name", "description"];

    protected $dates = ["due"];

    public static $rules = [
        "name" => "required",
        "description" => "required",
    ];

    public function project()
    {
        return $this->belongsTo("App\Project");
    }


}
