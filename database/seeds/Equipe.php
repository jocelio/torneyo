<?php

use Illuminate\Database\Seeder;

class Equipe extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('equipes')->drop();

        \App\Equipe::create(array(
                'name' => 'Valencia',
                'description' => 'Valencia Club de Fútbol'
            ),
            array(
                'name' => 'Borussia',
                'description' => 'Borussia Dortmund'
            ));
    }
}
