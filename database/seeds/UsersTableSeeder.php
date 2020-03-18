<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Juan',
            'email' => 'endrielfer.v@gmail.com',
            'password' => bcrypt('1234')
        ]);

        User::create([
            'name' => 'Carlos',
            'email' => 'carlos@gmail.com',
            'password' => bcrypt('1234')
        ]);

        User::create([
            'name' => 'Ramos',
            'email' => 'ramos@gmail.com',
            'password' => bcrypt('1234')
        ]);
    }
}
