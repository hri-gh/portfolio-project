"use client"

import { Separator } from "@/components/ui/separator";
import { useAboutMe } from "@/hooks/get-about-me";
import { GridCardSkeleton } from "../grid-card-skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";


export const LearningJourneyCard = () => {
    const [data, error, loading] = useAboutMe()

    return (
        <>
            <div className="border-2 border-dotted border-green-400 overflow-hidden h-72 rounded-lg">
                <div className="flex-1 [grid-area:stack] group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    {loading && (<GridCardSkeleton />)}
                    <h3 className="text-2xl font-bold tracking-tight">{data[0]?.learningJourneyHeader}</h3>
                    <Separator />
                    <ScrollArea className="h-52">
                        <p className="leading-none text-lg font-medium my-3">
                            {data[0]?.learningJourney}
                        </p>
                    </ScrollArea>
                </div>
            </div>
        </>
    )
}

// bg-gray-900

