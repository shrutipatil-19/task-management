<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // app/Http/Controllers/AuthController.php
    public function getUserInfo(Request $request)
    {
        return response()->json([
           'user' => $request->user()
        ]);
    }
}
