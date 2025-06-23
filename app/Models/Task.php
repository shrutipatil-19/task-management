<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'project_id',
        'title',
        'description',
        'assigned_by',
        'assigned_to',
        'priority',
        'status',
        'start_date',
        'due_date',
        'completed_at',
    ];
    // Relationships
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
    public function assignedBy()
    {
        return $this->belongsTo(User::class);
    }
    public function assignedTo()
    {
        return $this->belongsTo(User::class);
    }
}
