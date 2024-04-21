"use client"

import { useOverview } from "@/hooks/get-overview"
import { ScrollArea } from "@radix-ui/react-scroll-area"

export const OverviewScrollarea = () => {
    const [data, error, loading] = useOverview()


    return (
        <>
            <ScrollArea className="bg-black mb-2 rounded-xl border ">
                <p className='p-4'>{data[0]?.description}</p>
            </ScrollArea>
        </>
    )
}


