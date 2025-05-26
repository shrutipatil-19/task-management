<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use app\Models\Project;
class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::withCount('tasks')->get();
        return view('admin/Pages/Project/listProject', compact('projects'));
    }

    public function create()
    {
        return view('admin/Pages/Project/addProject');
    }

    public function store(Request $request)
    {
        Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'deadline' => $request->deadline,
            'status' => $request->status,
            'created_by' => auth()->id(),
        ]);

        return redirect()->route('projects.index');
    }

    public function show(Project $project)
    {
        $tasks = $project->tasks()->with('assignee')->get();
        return view('admin/Pages/Project/showProject', compact('project', 'tasks'));
    }
}

