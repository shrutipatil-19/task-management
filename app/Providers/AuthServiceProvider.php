<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use App\Models\User;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        Gate::define('admin-access', function ($user) {
            return $user->role === 'admin';
        });

        Gate::define('all-access', function ($user) {
            return in_array($user->role, ['hr', 'admin','business', 'user']);
        });
        
        Gate::define('hr-access', function ($user) {
            return in_array($user->role, ['hr', 'admin']);
        });
        
        Gate::define('business-access', function ($user) {
            return in_array($user->role, ['business', 'admin']);
        });
        
        Gate::define('user-access', function ($user) {
            return in_array($user->role, ['user', 'admin']);
        });
        
        
    }
    
}
