"use client"

import { Separator } from "@/components/ui/separator";
import { useAboutMe } from "@/hooks/get-about-me"
import { GridCardSkeleton } from "../grid-card-skeleton";
import { PublicProfileListList } from "./public-profile-list";

export const PublicProfiles = () => {
    // const [data, error, loading] = useAboutMe()

    return (
        <>
            <div className="bg-gray-500 overflow-hidden rounded-lg">
                <div className=" flex-1 [grid-area:stack] bg-indigo-500 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    {/* {loading && (<GridCardSkeleton />)} */}
                    <h3 className="text-xl font-bold tracking-tight text-center">Public Profiles</h3>
                    <Separator />
                    <PublicProfileListList/>
                    {/* <p className="leading-none font-medium">
                       {data[0]?.description}
                    </p> */}
                </div>
            </div>
        </>
    )
}


