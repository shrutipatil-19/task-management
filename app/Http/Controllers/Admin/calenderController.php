<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;

class calenderController extends Controller
{
    public function calender()
    {
        return view('admin/Pages/calender/calender');
    }

    public function index()
    {
        // Return only the necessary fields
        return response()->json(
            Event::select('id', 'title', 'description', 'start')->get()
        );
    }
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'nullable|string',
            'start' => 'required|date',
        ]);

        $event = Event::create($request->only(['title', 'description', 'start']));

        return response()->json($event);
    }
}
