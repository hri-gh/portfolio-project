"use client"

import { Separator } from "@/components/ui/separator";
import { useAboutMe } from "@/hooks/get-about-me"
import { GridCardSkeleton } from "../grid-card-skeleton";


export const AboutMeCard = () => {
    const [data, error, loading] = useAboutMe()

    return (
        <>
            <div className="bg-blue-500 overflow-hidden rounded-lg">
                <div className="flex-1 [grid-area:stack] bg-teal-500 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    {loading && (<GridCardSkeleton/>)}
                    <h3 className="text-xl font-bold tracking-tight">{data[0]?.header}</h3>
                    <Separator />
                    <p className="leading-none font-medium">
                       {data[0]?.aboutMeDescription}
                    </p>
                    {/* <h4 className="font-semibold">$19.99</h4> */}
                </div>
            </div>
        </>
    )
}


