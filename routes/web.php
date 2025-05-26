<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\calenderController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\TaskController;

Route::get('/', function () {
    return view('welcome');
});

// admin

Route::get('/admin/register', [AuthController::class, 'showRegisterForm'])->name('register');
Route::post('/admin/register', [AuthController::class, 'register'])->name('storeregister');
Route::get('/admin/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/admin/login', [AuthController::class, 'login']);
Route::post('/admin/logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware(['admin:admin,hr,business,user'])->group(function () {
    Route::resource('/admin/projects', ProjectController::class);
    Route::get('/admin/tasks/index', [TaskController::class, 'index'])->name('tasks.index');
    Route::get('/admin/tasks/create', [TaskController::class, 'create'])->name('tasks.create');
    Route::post('/admin/tasks', [TaskController::class, 'store'])->name('tasks.store');
    Route::get('/admin/tasks/{task}/edit', [TaskController::class, 'edit'])->name('tasks.edit');
    Route::put('/admin/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');
    Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/admin/calender', [calenderController::class, 'calender'])->name('calender');
    Route::get('/admin/calendar/events', [CalenderController::class, 'index']); // for FullCalendar AJAX
    Route::post('/admin/calendar/events/store', [calenderController::class, 'store'])->name('eventsStore');
});
