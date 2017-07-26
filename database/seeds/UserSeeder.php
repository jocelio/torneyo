<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        CREATE TABLE IF NOT EXISTS users (
//        id INT(5) AUTO_INCREMENT PRIMARY KEY,
//        user VARCHAR(20),
//        email VARCHAR(30),
//        password VARCHAR(100));

//        \App\User::truncate();


        \App\User::insert(array(
                'username' => 'root',
                'email' => 'root@mail.com',
                'password' => 'password'
        ));
    }

}
