@extends('admin.layout.app')

@section('page-content')
 <form method="POST" action="{{ route('projects.store') }}">
        @csrf
        <div>
            <label>Project Name</label>
            <input type="text" name="name" required>
        </div>

        <div>
            <label>Description</label>
            <textarea name="description"></textarea>
        </div>

        <div>
            <label>Deadline</label>
            <input type="date" name="deadline">
        </div>

        <div>
            <label>Status</label>
            <select name="status">
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="on_hold">On Hold</option>
            </select>
        </div>

        <button type="submit">Create Project</button>
    </form>
@endsection