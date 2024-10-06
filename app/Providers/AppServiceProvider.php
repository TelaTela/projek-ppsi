<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        Gate::define('manage-teacher', function (User $user) {
            return in_array($user->role, ['admin', 'superadmin']);
        });

        Gate::define('manage-user', function (User $user) {
            return in_array($user->role, ['superadmin']);
        });
    }
}
