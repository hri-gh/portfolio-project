"use client"

import { Separator } from "@/components/ui/separator";
import { useAboutMe } from "@/hooks/get-about-me"
import { GridCardSkeleton } from "../grid-card-skeleton";
import { SkillList } from '@/components/public/skills/skill-list'


export const SkillsCard = () => {
    // const [data, error, loading] = useAboutMe()

    return (
        <>
            <div className="bg-gray-500 overflow-hidden rounded-lg">
                <div className=" flex-1 [grid-area:stack] bg-teal-500 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
                    {/* {loading && (<GridCardSkeleton />)} */}
                    <h3 className="text-xl font-bold tracking-tight text-center">Skills</h3>
                    <Separator />
                    <SkillList />
                    {/* <p className="leading-none font-medium">
                       {data[0]?.description}
                    </p> */}
                </div>
            </div>
        </>
    )
}


