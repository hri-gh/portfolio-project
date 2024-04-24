"use client"

import { Separator } from "@/components/ui/separator";
import { useAboutMe } from "@/hooks/get-about-me"
import { GridCardSkeleton } from "./grid-card-skeleton";


export const AboutMeCard = () => {
    const [data, error, loading] = useAboutMe()
    console.log(data);

    return (
        <>
            <div className="bg-gray-500 overflow-hidden rounded-lg">
                {/* <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View</span>
                </Link> */}
                <div className="flex-1 [grid-area:stack] bg-gray-900 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    {loading && (<GridCardSkeleton/>)}
                    <h3 className="font-semibold tracking-tight">{data[0]?.header}</h3>
                    <Separator />
                    <p className="leading-none">
                       {data[0]?.description}
                    </p>
                    {/* <h4 className="font-semibold">$19.99</h4> */}
                </div>
            </div>
        </>
    )
}


