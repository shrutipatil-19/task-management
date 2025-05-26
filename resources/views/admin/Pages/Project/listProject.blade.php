@extends('admin.layout.app')

@section('page-content')
 <h2>Projects</h2>
    <a href="{{ route('projects.create') }}">+ New Project</a>
    <ul>
        @foreach ($projects as $project)
            <li>
                <a href="{{ route('projects.show', $project) }}">{{ $project->name }}</a>
                ({{ $project->tasks_count }} Tasks)
            </li>
        @endforeach
    </ul>
@endsection