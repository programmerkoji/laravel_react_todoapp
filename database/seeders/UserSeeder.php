<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'admin',
                'email' => 'test@test.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password1234'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'yamada',
                'email' => 'yamada@test.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password1234'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'tanaka',
                'email' => 'tanaka@test.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password1234'),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
