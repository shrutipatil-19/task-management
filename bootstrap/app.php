<?php

use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\AuthRoleMiddleware;
use App\Http\Middleware\LanguageMiddleware;
use App\Http\Middleware\LogVisit;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))

    // Register service providers
    ->withProviders([
        App\Providers\AuthServiceProvider::class,
    ])

    // Routing configuration
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        api: __DIR__ . '/../routes/api.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->append([
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        ]);

        $middleware->alias([
            'admin'    => AuthRoleMiddleware::class,
        ]);
    })


    // Exception handling (optional customization)
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })

    ->create();
