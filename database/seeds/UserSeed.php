<?php

use Illuminate\Database\Seeder;

class UserSeed extends Seeder
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

        \App\User::truncate();


        \App\User::insert(array(
                'username' => 'root',
                'email' => 'root@mail.com',
                'password' => 'password'
        ));
    }

}
