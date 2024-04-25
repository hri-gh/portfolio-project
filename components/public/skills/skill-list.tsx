"use client"

import { Skill } from "./skill"
import { useSkills } from "@/hooks/get-skills"
import SkillSkeleton from "./skill-skeleton"


export const SkillList = () => {

    const [data, error, loading] = useSkills();
    return (
        <>
            <div className=" flex flex-wrap justify-center">
                {loading && (<SkillSkeleton/>)}
                {error && (<p>{error}</p>)}
                {data.map((item: any) => (
                    <Skill key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

