<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEquipesTable extends Migration
{

    public function up()
    {
//        Schema::drop('equipes');
        Schema::create('equipes', function(Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('description');
            $table->binary('image')->nullable();
            $table->date('due');
            $table->timestamps();
        });


    }

    public function down()
    {
        Schema::drop('equipes');
    }
}
