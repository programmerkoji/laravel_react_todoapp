<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Task;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    public function test_get_list()
    {
        $tasks = Task::factory()->count(10)->create();

        $response = $this->getJson('api/tasks');

        $response
            ->assertOk()
            ->assertJsonCount($tasks->count());
    }
    /**
     * @test
     */
    public function can_be_createed()
    {
        $data = [
            'title' => 'テスト投稿'
        ];

        $response = $this->postJson("api/tasks", $data);

        dd($response->json());
        // $response
        //     ->assertStatus(201);
    }
}
