<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Task;
use App\Models\User;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::with('project')->get();
        return view('admin/Pages/task/listTask', compact('tasks'));
    }
    public function create()
    {
        $users = User::all();
        $projects = Project::all();
        return view('admin/Pages/task/addTask', compact('users', 'projects'));
    }

    public function store(Request $request)
    {
        // Validate input
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'project' => 'required|string|max:255',
            'assigned_to' => 'required|exists:users,id',
            'due_date' => 'required|date|after_or_equal:today',
            'status' => 'required|in:to_do,in_progress,review,done',
        ]);

        // Store task
        Task::create([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
            'project' => $validated['project'],
            'assigned_to' => $validated['assigned_to'],
            'status' => $validated['status'],
            'due_date' => $validated['due_date'],
        ]);
        return redirect()->route('tasks.index')->with('success', 'Category created successfully.');
        // return redirect()->route('blogs.index')->with('success', 'Category created successfully.');
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
