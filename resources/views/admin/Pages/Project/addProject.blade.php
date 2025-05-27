@extends('admin.layout.app')

@section('page-content')
<div class="page-content">

    <!-- <h6 class="card-title">Add Project</h6> -->
    {{-- Success Message --}}
    @if (session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
    @endif

    {{-- Validation Errors --}}
    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif
    <form action="{{ route('projects.store') }}" method="POST" enctype="multipart/form-data">
        @csrf

        <div class="row">
            <div class="col-md-8 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">

                        <h6 class="card-title">Add Project</h6>

                        <div class="mb-3">
                            <label>Project Name</label>
                            <input type="text" name="name" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <!-- <textarea name="description"></textarea> -->
                            <textarea id="summernote" name="description"></textarea>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-4 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">

                        <h6 class="card-title">Horizontal Form</h6>
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" name="status" id="active" value="active">
                                    <label class="form-check-label" for="active">
                                        Active
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" name="status" id="completed" value="completed">
                                    <label class="form-check-label" for="completed">
                                        Inactive
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" name="status" id="on_hold" value="on_hold">
                                    <label class="form-check-label" for="on_hold">
                                        On Hold
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-check form-check-inline">
                                <label class="form-label">Deadline</label>
                                <input type="date" name="deadline">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
    </form>
</div>
@endsection
@push('scripts')
<!-- Load Summernote -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-lite.min.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-lite.min.js"></script>
<script>
    $(document).ready(function() {
        $('#summernote').summernote({
            height: 100
        });

        $('.select2').select2({
            tags: true,
            tokenSeparators: [',']
        });

        // $('.dropify').dropify(); // Initialize Dropify
    });
</script>
@endpush