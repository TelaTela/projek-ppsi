import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Teacher } from "@/types/models";
import { Head } from "@inertiajs/react";
import { Avatar, AvatarFallback } from "@/Components/ui/avatar";
import SupervisionLevelBadge from "./Partials/SupervisionLevelBadge";
import SupervisionIndicatorBadge from "./Partials/SupervisionIndicatorBadge";
import { PerformanceItem } from "@/types";

interface CheckSupervisionProps {
    teacher: Teacher;
    performanceItem: PerformanceItem;
    performanceItemNumber: number;
}

export default function CheckSupervision({ teacher, performanceItem, performanceItemNumber }: CheckSupervisionProps) {
    const indicatorsMet = teacher?.supervision?.simple_result.indicatorsMet ?? [];
    const indicators = performanceItem.indicators;
    const indicatorsKeys = Object.keys(indicators);
    const indicatorsInfo = indicatorsKeys.map((indicatorKey) => {
        const indicator = indicators[indicatorKey];

        return (
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mb-2" key={indicatorKey}>
                <div className="p-6 text-gray-900 flex flex-row justify-between items-center">
                    <h1 className="text-xl font-semibold">{indicator.name}</h1>
                    <SupervisionIndicatorBadge fulfilled={indicatorsMet.includes(+indicatorKey)} />
                </div>
            </div>
        )
    });

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Supervisi {teacher.name} - {teacher.subject} ({teacher.class})
                </h2>
            }
        >
            <Head title={`Supervisi ${teacher.name} - ${teacher.subject} (${teacher.class})`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mb-2">
                        <div className="p-6 text-gray-900 flex flex-col gap-2 justify-center items-center">
                            <Avatar className="w-12 h-12">
                                <AvatarFallback>{teacher.initial}</AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <h1 className="text-xl font-bold">{teacher.name}</h1>
                                <span>{teacher.class} - {teacher.subject}</span>
                            </div>
                            <SupervisionLevelBadge level={teacher.supervision?.simple_result.level} />
                        </div>
                    </div>
                    {indicatorsInfo}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
