<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use app\Models\Project;
use app\Models\Task;
use app\Models\User;
class TaskController extends Controller
{
    public function create(Project $project)
    {
        $users = User::all();
        return view('tasks.create', compact('project', 'users'));
    }

    public function store(Request $request, Project $project)
    {
        $project->tasks()->create($request->all());
        return redirect()->route('projects.show', $project);
    }

    public function edit(Project $project, Task $task)
    {
        $users = User::all();
        return view('tasks.edit', compact('task', 'users', 'project'));
    }

    public function update(Request $request, Project $project, Task $task)
    {
        $task->update($request->all());
        return redirect()->route('projects.show', $project);
    }
}

