"use client"

import { Separator } from "@/components/ui/separator";
import { useAboutMe } from "@/hooks/get-about-me"
import { GridCardSkeleton } from "../grid-card-skeleton";
import { SkillList } from '@/components/public/skills/skill-list'
import { ScrollArea } from "@/components/ui/scroll-area";

export const Skills = () => {
    // const [data, error, loading] = useAboutMe()

    return (
        <>
            <ScrollArea className="bg-teal-500 rounded-lg h-80">
                <div className=" flex-1 [grid-area:stack]   group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    {/* {loading && (<GridCardSkeleton />)} */}
                    <h3 className="text-xl font-bold tracking-tight text-center">Skills</h3>
                    <Separator />
                    <SkillList />

                    {/* <p className="leading-none font-medium">
                       {data[0]?.description}
                    </p> */}
                </div>
            </ScrollArea>
        </>
    )
}


