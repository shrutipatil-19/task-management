<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Project;
use App\Models\User;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'project', 'assigned_to',
        'priority', 'status', 'due_date'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function assignee()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
}

