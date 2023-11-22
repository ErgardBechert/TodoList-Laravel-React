<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tasks>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'id' => rand(1, 1000),
            'user_id' => rand(1, 10),
            'title' => 'Заголовок ',
            'description' => 'Описание ',
            'status' => '1'
        ];
    }
}
