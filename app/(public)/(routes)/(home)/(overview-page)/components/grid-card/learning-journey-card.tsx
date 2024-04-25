"use client"

import { Separator } from "@/components/ui/separator";
import { useLearningJourney } from "@/hooks/get-learning-journey"
import { GridCardSkeleton } from "./grid-card-skeleton";


export const LearningJourneyCard = () => {
    const [data, error, loading] = useLearningJourney()

    return (
        <>
            <div className="bg-gray-500 overflow-hidden rounded-lg">
                <div className="flex-1 [grid-area:stack] bg-gray-900 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    {loading && (<GridCardSkeleton />)}
                    <h3 className="text-xl font-bold tracking-tight">{data[0]?.header}</h3>
                    <Separator />
                    <p className="leading-none font-medium">
                        {data[0]?.description}
                    </p>

                </div>
            </div>
        </>
    )
}


