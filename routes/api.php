<?php

use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/hello', function () {
    return response()->json(['message' => 'Shruti']);
});

Route::get('/home', function(){
    return response()->json(['Message'=> 'shruti']);
});

Route::get('/about', function(){
    return response()->json(['message'=> 'about']);
});