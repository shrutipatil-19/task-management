<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\Contact;
use App\Models\outboundLead;
use Illuminate\Support\Facades\Log;
// use App\Models\Visit;

class DashboardController extends Controller
{

    public function index(Request $request)
    {
        return view("admin/Pages/Home/Dashboard");
    }
}
