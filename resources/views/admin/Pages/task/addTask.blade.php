@extends('admin.layout.app')
@section('page-content')
 <h2>Create Task for Project: {{ $project->name }}</h2>

    <form method="POST" action="{{ route('tasks.store', $project) }}">
        @csrf
        <div>
            <label>Title</label>
            <input type="text" name="title" required>
        </div>

        <div>
            <label>Description</label>
            <textarea name="description"></textarea>
        </div>

        <div>
            <label>Assign To</label>
            <select name="assigned_to" required>
                @foreach($users as $user)
                    <option value="{{ $user->id }}">{{ $user->name }}</option>
                @endforeach
            </select>
        </div>

        <div>
            <label>Priority</label>
            <select name="priority">
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
            </select>
        </div>

        <div>
            <label>Status</label>
            <select name="status">
                <option value="to_do">To Do</option>
                <option value="in_progress">In Progress</option>
                <option value="review">Review</option>
                <option value="done">Done</option>
            </select>
        </div>

        <div>
            <label>Due Date</label>
            <input type="date" name="due_date">
        </div>

        <button type="submit">Create Task</button>
    </form>
@endsection