<!DOCTYPE html>
<html lang="en">

<head>
    @include('admin.partials.styleLinks')
    @yield('custom-style')
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
 
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>
    <div class="main-wrapper">
        @include('admin.partials.Sidebar')
        <div class="page-wrapper">
            @include('admin.partials.Header')
            @yield('page-content')
            @include('admin.partials.Footer')
        </div>
    </div>

    @yield('custom-js')
    @stack('scripts')

    @include('admin.partials.jsLink')

</body>

</html>