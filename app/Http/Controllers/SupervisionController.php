<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SupervisionController extends Controller
{
    public function index()
    {
        $performanceItems = config('performance_items');

        $teachers = Teacher::with(['supervision'])->get();
        $supervisionLevels = [];
        foreach ($teachers as $key => $teacher) {
            $teacherKey = intval($key);

            /**
             * @var Supervision $supervision
             */
            $supervision = $teacher->supervision;

            if (!$supervision) {
                $supervisionLevels[$teacherKey] = null;
                continue;
            }

            $performanceItem = $performanceItems[$supervision->item_number];
            $levelsRequirement = $performanceItem['levels'];
            $indicatorsMet = [];
            $checkedIndicators = json_decode($supervision->checked_indicators, associative: true)[15];
            foreach ($checkedIndicators as $key => $indicator) {
                if (in_array(true, $indicator)) {
                    $indicatorsMet[] = intval($key);
                }
            }

            $highestPoint = 0;
            $levelWithHighestMpoint = 0;
            foreach ($levelsRequirement as $level => $requirement) {
                $requirementNotMet = collect($requirement)->diff($indicatorsMet);
                $point = count($requirement) - $requirementNotMet->count();

                if ($point > $highestPoint) {
                    $levelWithHighestMpoint = $level;
                    $highestPoint = $point;
                }
            }

            $supervisionLevels[$teacherKey] = $levelWithHighestMpoint;
        }

        $teachersArray = $teachers->toArray();
        foreach ($teachersArray as $key => $teacher) {
            if (!isset($teacher['supervision'])) continue;

            $teachersArray[$key]['supervision']['level'] = $supervisionLevels[$key];
        }

        return Inertia::render('Supervision/ListSupervision', [
            'teachers' => $teachersArray,
            'performanceItems' => config('performance_items'),
        ]);
    }

    public function start(Teacher $teacher)
    {
        return Inertia::render('Supervision/StartSupervision', [
            'teacher' => $teacher->toArray(),
            'performanceItem' => config('performance_items.15'),
            'performanceItemNumber' => 15,
        ]);
    }

    public function save(Request $request, Teacher $teacher)
    {
        $evaluations = $request->all();
        $evaluationsArray = [];
        foreach ($evaluations as $key => $evaluation) {
            $keySplit = explode('_', $key);
            $performanceItemNumber = $keySplit[0];
            $indicatorNumber = $keySplit[1];
            $indicatorItemNumber = $keySplit[2];

            if (!isset($evaluationsArray[$performanceItemNumber])) {
                $evaluationsArray[$performanceItemNumber] = [];
            }

            if (!isset($evaluationsArray[$performanceItemNumber][$indicatorNumber])) {
                $evaluationsArray[$performanceItemNumber][$indicatorNumber] = [];
            }

            $evaluationsArray[$performanceItemNumber][$indicatorNumber][$indicatorItemNumber] = $evaluation;
        }

        if ($teacher->supervision) {
            $teacher->supervision->delete();
        }

        $teacher->supervision()->updateOrCreate([
            'item_number' => 15,
            'checked_indicators' => json_encode($evaluationsArray),
            'supervised_at' => now('Asia/Jakarta'),
        ]);

        $request->session()->flash('success', 'Berhasil menyimpan hasil supervisi.');

        return to_route('supervision.index');
    }

    public function check(Teacher $teacher)
    {
        return Inertia::render('Supervision/CheckSupervision', [
            'teacher' => $teacher->loadMissing(['supervision'])->toArray(),
            'performanceItem' => config('performance_items.15'),
            'performanceItemNumber' => 15,
        ]);
    }
}
