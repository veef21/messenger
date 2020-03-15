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
            'name' => 'evalderrama',
            'email' => 'endrielfer.v@gmail.com',
            'password' => bcrypt('1234')
        ]);

        User::create([
            'name' => 'rarzola',
            'email' => 'rarzolad.v@gmail.com',
            'password' => bcrypt('1234')
        ]);
    }
}
