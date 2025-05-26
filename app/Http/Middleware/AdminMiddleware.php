<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle($request, Closure $next, ...$roles)
    {
        // logger('User Role:', [Auth::user()->role]);
        // logger('Allowed Roles:', $roles);

        if (!Auth::check()) {
            return redirect('/admin/login');
        }

        // ✅ Check if user role matches any of the allowed roles
        if (in_array(Auth::user()->role, $roles)) {
            return $next($request);
        }

        abort(403, 'Unauthorized access.');
    }
}
