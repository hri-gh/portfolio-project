import { format } from "date-fns";
import React from 'react'

import {GridContentClient} from './components/client'
import { GridContentColumn } from './components/columns'

import prismadb from '@/lib/prismadb'

const GridContentsPage = async () => {
  const gridContents = await prismadb.gridContent.findMany()

  const formattedGridContents: GridContentColumn[] = gridContents.map((item)=>({
    id:item.id,
    header: item.header,
    title: item.title,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))
  return (
    <div className="flex-col">
    <div className="flex-1 space-y-4 p-8 pt-6">
        <GridContentClient data={formattedGridContents} />
    </div>
</div>
  )
}

export default GridContentsPage
