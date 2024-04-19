import { format } from "date-fns";
import React from 'react'

import prismadb from '@/lib/prismadb'

import { BadgeClient } from "./components/client";


export type BadgeCardData = {
  id: string;
  image: string;
  platformName: string;
  platformLink: string;
  updatedAt: string;
  createdAt: string;
}

const BadgesPage = async () => {
  const badges = await prismadb.badge.findMany()

  const formattedBadges: BadgeCardData[] = badges.map((item) => ({
    id: item.id,
    image: item.imageUrl,
    platformName: item.platformName,
    platformLink: item.platformLink,
    updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <BadgeClient data={formattedBadges} />
        </div>
      </div>
    </>
  )
}

export default BadgesPage
