<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
//     public function handle($request, Closure $next, ...$roles)
// {
//     // Debug to check the user role and authentication
//     dd(Auth::check(), Auth::user()->role, $roles);

//     if (!Auth::check() || !in_array(Auth::user()->role, $roles)) {
//         abort(403); // Forbidden
//     }

//     return $next($request);
// }

}

