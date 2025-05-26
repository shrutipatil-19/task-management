<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    // Registration Form
    public function showRegisterForm()
    {
        return view('admin/Register');
    }

    // Handle Registration
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
            'role' => 'required'
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('login')->with('success', 'Registration successful. Please login.');
    }

    // Login Form
    public function showLoginForm()
    {
        return view('admin/Login');
    }

    // Handle Login
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();

            if (in_array($user->role, ['admin', 'hr', 'business', 'user'])) {
                return redirect()->route('dashboard');
            }

            return redirect()->route('login')->withErrors(['email' => 'Unauthorized role.']);


            // Redirect based on role
            // switch ($user->role) {
            //     case 'admin':
            //         return redirect()->route('dashboard');
            //     case 'hr':
            //         return redirect()->route('dashboard');
            //     case 'business':
            //         return redirect()->route('dashboard');
            //     case 'user':
            //         return redirect()->route('dashboard');
            //     default:
            //         return redirect()->route('login')->withErrors(['email' => 'Unauthorized role.']);
            // }
        }
        return back()->withErrors(['email' => 'Invalid Credentials']);
    }


    // Logout
    // public function logout()
    // {
    //     Auth::logout();
    //     return redirect()->route('login');
    // }
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }
}
