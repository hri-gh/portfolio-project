"use client"

import { Separator } from "@/components/ui/separator";
import { useAboutMe } from "@/hooks/get-about-me"
import { GridCardSkeleton } from "../grid-card-skeleton";
import { PublicProfileListList } from "./public-profile-list";
import { ScrollArea } from "@/components/ui/scroll-area";

export const PublicProfiles = () => {
    // const [data, error, loading] = useAboutMe()

    return (
        <>
            <ScrollArea className="bg-indigo-500  rounded-lg h-80">
                <div className=" flex-1 [grid-area:stack]  group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    <h3 className="text-xl font-bold tracking-tight text-center">Public Profiles</h3>
                    <Separator />
                    <PublicProfileListList/>
                    {/* <p className="leading-none font-medium">
                       {data[0]?.description}
                    </p> */}
                </div>
            </ScrollArea>
        </>
    )
}


