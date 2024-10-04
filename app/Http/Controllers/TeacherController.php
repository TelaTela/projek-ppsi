<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class TeacherController extends Controller
{
    public function index()
    {
        Gate::authorize('manage-teacher');

        return Inertia::render('Teacher/ListTeacher', [
            'teachers' => Teacher::all()->toArray(),
        ]);
    }

    public function create()
    {
        Gate::authorize('manage-teacher');

        return Inertia::render('Teacher/AddTeacher');
    }

    public function store(Request $request)
    {
        Teacher::create($request->all());

        $request->session()->flash('success', 'Berhasil menambah data guru.');

        return to_route('teacher.index');
    }

    public function edit(Teacher $teacher)
    {
        Gate::authorize('manage-teacher');

        return Inertia::render('Teacher/EditTeacher', [
            'teacher' => $teacher->only([
                'id',
                'name',
                'subject',
                'class',
                'email',
                'created_at',
                'updated_at',
            ]),
        ]);
    }

    public function update(Request $request, Teacher $teacher)
    {
        Gate::authorize('manage-teacher');

        $teacher->update($request->all());

        $request->session()->flash('success', 'Berhasil mengubah data guru.');

        return to_route('teacher.index');
    }

    public function destroy(Request $request, Teacher $teacher)
    {
        $teacher->delete();

        $request->session()->flash('success', 'Berhasil menghapus data guru.');

        return to_route('teacher.index');
    }
}
