import { format } from "date-fns";
import React from 'react'

import prismadb from '@/lib/prismadb'
import { OverviewClient } from "./components/client";

export type OverviewCardData = {
  id: string;
  header: string;
  description: string;
  updatedAt: string;
  createdAt: string;
}

const OverviewPage = async () => {
  const overview = await prismadb.overview.findMany()

  const formattedOverview: OverviewCardData[] = overview.map((item) => ({
    id: item.id,
    header: item.header,
    description: item.description,
    updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))
  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <OverviewClient data={formattedOverview} />
        </div>
      </div>
    </>
  )
}

export default OverviewPage
