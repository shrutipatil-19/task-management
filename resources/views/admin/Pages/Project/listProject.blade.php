@extends('admin.layout.app')

@section('page-content')
<div class="page-content">
    <nav class="page-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Tables</a></li>
            <li class="breadcrumb-item active" aria-current="page">Project Table</li>
        </ol>
        <a href="{{ route('projects.create') }}">+ New project</a>
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
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($projects as $project)
                                <tr>
                                    <td>{{ $project->id }}</td>
                                    <td>{{ $project->name }}</td>
                                    <td>{{ $project->description }}</td>
                                    <td>{{ $project->deadline }}</td>
                                    <td>
                                        @if ($project->status == 'active')
                                        <i data-feather="zap" style="color: grey;"></i>
                                        @else
                                        <i data-feather="zap-off" style="color: grey;"></i>
                                        @endif
                                    </td>
                                    <td>{{ $project->created_at->format('Y-m-d') }}</td>
                                    <td>
                                        <!-- Edit Icon -->
                                        <a href="{{ route('projects.edit', $project->id) }}" style="margin-right: 8px;">
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