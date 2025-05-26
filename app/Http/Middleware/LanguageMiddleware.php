<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class LanguageMiddleware
{
    public function handle($request, Closure $next)
    {
        // Get the language from the session, default to 'en' (English)
        $locale = Session::get('locale', 'en');

        // Set the app's locale based on the session
        App::setLocale($locale);

        return $next($request);
    }
}
