import { format } from "date-fns";
import React from 'react'

import prismadb from '@/lib/prismadb'

import { PublicProfileClient } from "./components/client";


export type PublicProfileCardData = {
  id: string;
  image: string;
  publicProfileName: string;
  publicProfileLink: string;
  updatedAt: string;
  createdAt: string;
}

const PublicProfilesPage = async () => {
  const publicProfiles = await prismadb.publicProfile.findMany()

  const formattedPublicProfiles: PublicProfileCardData[] = publicProfiles.map((item) => ({
    id: item.id,
    image: item.imageUrl,
    publicProfileName: item.publicProfileName,
    publicProfileLink: item.publicProfileLink,
    updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <PublicProfileClient data={formattedPublicProfiles} />
        </div>
      </div>
    </>
  )
}

export default PublicProfilesPage
