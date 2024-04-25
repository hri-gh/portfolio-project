"use client"

import { useOverview } from "@/hooks/get-overview"
import { ScrollArea } from "@/components/ui/scroll-area"
import OverviewSkeleton from "./overview-skeleton"


export const OverviewScrollarea = () => {
    const [data, error, loading] = useOverview()


    return (
        <>
            <ScrollArea className="bg-black mb-2 rounded-xl border ">
                {loading && (<OverviewSkeleton />)}
                <p className='p-4 font-semibold text-white'>{data[0]?.description}</p>
            </ScrollArea>
        </>
    )
}


