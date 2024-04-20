"use client"

import { Skill } from "./skill"
import { useSkills } from "@/hooks/get-skills"

export const SkillList = () => {
    const [data, error, loading] = useSkills();
    return (
        <>
            <div className=" flex flex-wrap justify-center">
                {loading && (<p>Loading...</p>)}
                {error && (<p>{error}</p>)}
                {data.map((item: any) => (
                    <Skill key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

