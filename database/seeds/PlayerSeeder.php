<?php

use Illuminate\Database\Seeder;

class PlayerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        \App\Player::truncate();

        \App\Player::insert(array(
                'name' => 'Neymar',
                'surname' => 'Neymar Junior',
                'image' => null,
                'created_at' =>  new DateTime('02/31/2011'),
                'updated_at' =>  new DateTime('02/31/2011'),
                'equipe_id' => 1,
                'due' =>  new DateTime('02/31/2011')
            ));


    }
}
