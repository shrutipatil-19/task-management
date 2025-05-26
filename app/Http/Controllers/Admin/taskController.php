<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Task;
use App\Models\User;
class TaskController extends Controller
{
    public function index(Project $project)
    {
        $tasks = Task::all();
        return view('admin/Pages/task/listTask', compact('tasks'));
    }
    public function create(Project $project)
    {
        $users = User::all();
        return view('admin/Pages/task/addTask', compact('project', 'users'));
    }

    public function store(Request $request, Project $project)
    {
        $project->tasks()->create($request->all());
        return redirect()->route('projects.show', $project);
    }

    public function edit(Project $project, Task $task)
    {
        $users = User::all();
        return view('admin/Pages/task/editTask', compact('task', 'users', 'project'));
    }

    public function update(Request $request, Project $project, Task $task)
    {
        $task->update($request->all());
        return redirect()->route('projects.show', $project);
    }
}

