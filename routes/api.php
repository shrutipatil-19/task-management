<?php

use App\Http\Controllers\Api\AuthController;
use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegisterController;

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [RegisterController::class, 'login']);
Route::post('/logout', [RegisterController::class, 'logout']);
Route::middleware(['auth'])->group(function () {
    Route::get('/user-info', [AuthController::class, 'getUserInfo'])->name('getUserInfo');
});
// api.php
Route::middleware('auth:sanctum')->get('/user-info', function (Request $request) {
    return response()->json([
        'user' => $request->user()
    ]);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/hello', function () {
    return response()->json(['message' => 'Shruti']);
});

Route::get('/home', function () {
    return response()->json(['Message' => 'shruti']);
});

Route::get('/about', function () {
    return response()->json(['message' => 'about']);
});
