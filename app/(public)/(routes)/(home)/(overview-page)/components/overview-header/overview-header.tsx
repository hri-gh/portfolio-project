"use client"

import { useAboutMe } from "@/hooks/get-about-me"
import { ScrollArea } from "@/components/ui/scroll-area"
import OverviewSkeleton from "./overview-skeleton"


export const OverviewHeader = () => {
    const [data, error, loading] = useAboutMe()
    console.log(data);



    return (
        <>
            <ScrollArea className="bg-black mb-2 rounded-xl border ">
                {loading && (<OverviewSkeleton />)}
                <p className='p-4 text-xl md:text-2xl lg:text-3xl font-bold text-center text-white relative z-20'>{data[0]?.overview}</p>
            </ScrollArea>
        </>
    )
}


