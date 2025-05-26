<!-- partial:partials/_sidebar.html -->
<nav class="sidebar">
    <div class="sidebar-header">
        <a href="#" class="sidebar-brand w-100 h-100">
            <!-- Noble<span>UI</span> -->
             <img src="{{ asset('admin-assets/images/logo/sc-colored-horizontal.png') }}" alt="" class="w-100 h-100" style="object-fit: contain;">
        </a>
        <div class="sidebar-toggler">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="sidebar-body">
        <ul class="nav" id="sidebarNav">
            <!-- Admin Section (Show Everything) -->

            @can('all-access')
            <!-- <p>Admin Access is working!</p> -->
            <li class="nav-item nav-category">Main</li>
            <li class="nav-item">
                <a href="{{ url('/admin/dashboard') }}" class="nav-link">
                    <i class="link-icon" data-feather="box"></i>
                    <span class="link-title">Dashboard</span>
                </a>
            </li>
            @endcan
            <!-- User Section (Show Only Services, Blog, etc.) -->
            @can('user-access')
            <!-- <p>User Access is working!</p> -->
            <li class="nav-item nav-category">Project Management</li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="collapse" href="#emails" role="button" aria-expanded="false" aria-controls="emails">
                    <i class="link-icon" data-feather="mail"></i>
                    <span class="link-title">Projects</span>
                    <i class="link-arrow" data-feather="chevron-down"></i>
                </a>
                <div class="collapse" data-bs-parent="#sidebarNav" id="emails">
                    <ul class="nav sub-menu">
                        <li class="nav-item">
                            <a href="{{ route('projects.index') }}" class="nav-link">Projcets</a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('projects.create') }}" class="nav-link">Add Projcets</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link">
                    <i class="link-icon" data-feather="message-square"></i>
                    <span class="link-title">Task</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('calender') }}" class="nav-link">
                    <i class="link-icon" data-feather="message-square"></i>
                    <span class="link-title">Calendar</span>
                </a>
            </li>
             <li class="nav-item">
                <a class="nav-link" data-bs-toggle="collapse" href="#uiComponents" role="button" aria-expanded="false" aria-controls="uiComponents">
                    <i class="link-icon" data-feather="mail"></i>
                    <span class="link-title">Reports</span>
                    <i class="link-arrow" data-feather="chevron-down"></i>
                </a>
                <div class="collapse" data-bs-parent="#sidebarNav" id="uiComponents">
                    <ul class="nav sub-menu">
                        <li class="nav-item">
                            <a href="" class="nav-link">Teams</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Add PR</a>
                        </li>
                    </ul>
                </div>
            </li>
            @endcan


            @can('business-access')
            <!-- <p>Business Access is working!</p> -->
            <li class="nav-item nav-category">Setting</li>
            <li class="nav-item">
                <a href=""  class="nav-link">
                    <i class="link-icon" data-feather="hash"></i>
                    <span class="link-title">Teams</span>
                </a>
            </li>
            <li class="nav-item">
                <a href=""  class="nav-link">
                    <i class="link-icon" data-feather="hash"></i>
                    <span class="link-title">Setting</span>
                </a>
            </li>
           
            @endcan
        </ul>
    </div>
</nav>
<!-- partial -->