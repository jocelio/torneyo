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

//        CREATE TABLE IF NOT EXISTS equipes (
//        id INT(5) AUTO_INCREMENT PRIMARY KEY,
//        name VARCHAR(20),
//        description VARCHAR(30),
//        created_at DATE,
//        updated_at DATE,
//        due DATE);

        \App\Equipe::truncate();
        \App\Equipe::insert(array(
                'name' => 'Valencia',
                'description' => 'Valencia Club de Fútbol',
                'created_at' =>  new DateTime('02/31/2011'),
                'updated_at' =>  new DateTime('02/31/2011'),
                'due' =>  new DateTime('02/31/2011')
            ));
        \App\Equipe::insert(array(
                'name' => 'Borussia',
                'description' => 'Borussia Dortmund',
                'created_at' =>  new DateTime('02/31/2011'),
                'updated_at' =>  new DateTime('02/31/2011'),
                'due' =>  new DateTime('02/31/2011')
        ));
            \App\Equipe::insert(array(
                'name' => 'Monaco',
                'description' => 'Association Sportive de Monaco Football Club',
                'created_at' =>  new DateTime('02/31/2011'),
                'updated_at' =>  new DateTime('02/31/2011'),
                'due' =>  new DateTime('02/31/2011')
            ));
                \App\Equipe::insert(array(
                'name' => 'Inter de Milão',
                'description' => 'Football Club Internazionale Milano',
                'created_at' =>  new DateTime('02/31/2011'),
                'updated_at' =>  new DateTime('02/31/2011'),
                'due' =>  new DateTime('02/31/2011')
                ));
         \App\Equipe::insert(array(
                'name' => 'Bayer 04',
                'description' => 'Bayer 04 Leverkusen',
                'created_at' =>  new DateTime('02/31/2011'),
                'updated_at' =>  new DateTime('02/31/2011'),
                'due' =>  new DateTime('02/31/2011')
            ));

    }
}
