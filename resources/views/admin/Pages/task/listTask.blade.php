@extends('admin.layout.app')

@section('page-content')
<div class="page-content">
    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Tables</a></li>
            <li class="breadcrumb-item active" aria-current="page">Task Table</li>
        </ol>
        <a href="{{ route('tasks.create') }}">+ New Task</a>
    </nav>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Project Table</h6>
                    <!-- <p class="text-secondary mb-3">Read the <a href="https://datatables.net/" target="_blank"> Official DataTables Documentation </a>for a full list of instructions and other options.</p> -->
                    <div class="table-responsive">
                        <table id="dataTableExample" class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Project Title</th>
                                    <th>Description</th>
                                    <th>Project</th>
                                    <th>Employee</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($tasks as $task)
                                <tr>
                                    <td>{{ $task->id }}</td>
                                    <td>{{ $task->name }}</td>
                                    <td>{{ $task->description }}</td>
                                    <td>{{ $task->project->name }}</td>
                                    <td>{{ $task->assigned_to }}</td>
                                    <td>{{ $task->due_date }}</td>
                                     <td>
                                        @if ($task->status == 'to_do')
                                        <span class="badge bg-warning text-white">To Do</span>
                                        @elseif ($task->status == 'in_progress')
                                        <span class="badge bg-danger">In Progress</span>
                                        @elseif ($task->status == 'review')
                                        <span class="badge bg-orange text-white">Review</span>
                                        @elseif ($task->status == 'done')
                                        <span class="badge bg-success">Done</span>
                                        @else
                                        <span class="badge bg-secondary">Unknown</span>
                                        @endif
                                    </td>
                                    <td>{{ $task->created_at->format('Y-m-d') }}</td>
                                    <td>
                                        <!-- Edit Icon -->
                                        <a href="{{ route('tasks.edit', $task->id) }}" style="margin-right: 8px;">
                                            <i data-feather="edit"></i>
                                        </a>
                                    </td>

                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection