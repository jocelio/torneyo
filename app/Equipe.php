<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipe extends Model {

    protected $fillable = ["name", "description","image"];

    protected $dates = ["due"];

    public static $rules = [
        "name" => "required",
        "description" => "required",
        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
    ];

    public function project()
    {
        return $this->belongsTo("App\Project");
    }


}
