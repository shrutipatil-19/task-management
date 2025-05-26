@extends('admin.layout.app')

@section('page-content')
 <h2>Task</h2>
    <a href="{{ route('task.create') }}">+ New Task</a>
    <ul>
        @foreach ($tasks as $task)
            <li>
                <a href="{{ route('task.show', $task) }}">{{ $task->name }}</a>
            </li>
        @endforeach
    </ul>
@endsection