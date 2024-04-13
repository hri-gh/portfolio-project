import { format } from "date-fns";
import React from 'react'

import prismadb from '@/lib/prismadb'
import { AboutmeClient } from "./components/client";

export type AboutmeCardData = {
  id: string;
  header: string;
  description: string;
  updatedAt: string;
  createdAt: string;
}

const AboutmePage = async () => {
  const aboutMe = await prismadb.aboutMe.findMany()

  const formattedAboutMe: AboutmeCardData[] = aboutMe.map((item) => ({
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
          <AboutmeClient data={formattedAboutMe} />
        </div>
      </div>
    </>
  )
}

export default AboutmePage
