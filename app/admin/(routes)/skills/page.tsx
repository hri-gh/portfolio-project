import { format } from "date-fns";
import React from 'react'

import prismadb from '@/lib/prismadb'

import { SkillClient } from "./components/client";

export type SkillCardData = {
  id: string;
  name: string;
  image: string;
}

const SkillsPage = async () => {
  const skills = await prismadb.skill.findMany()

  const formattedSkills: SkillCardData[] = skills.map((item) => ({
    id: item.id,
    name:item.name,
    image: item.imageUrl,
    updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <SkillClient data={formattedSkills} />
        </div>
      </div>
    </>
  )
}

export default SkillsPage
