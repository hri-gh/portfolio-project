import React from 'react'
import OverviewSkeleton from '../(public)/(routes)/(home)/(overview-page)/components/overview-header/overview-skeleton'
import { GridCardSkeleton } from '../(public)/(routes)/(home)/(overview-page)/components/grid-card-skeleton'
import SkillSkeleton from '@/components/public/skills/skill-skeleton'
import { Skeleton } from '@/components/ui/skeleton'
import ProjectCardSkeleton from '@/components/public/projects/project-card-skeleton'
import { Separator } from '@/components/ui/separator'
import CertificateCardSkeleton from '@/components/public/certificates/certificate-card-skeleton'
//import PublicProfileSkeleton from '@/components/public/public-profiles/public-profile-skeleton'
import { PublicProfileSkeleton } from '../(public)/(routes)/(home)/(overview-page)/components/public-profiles/public-profile-skeleton'
import CertificateSkeleton from '../(public)/(routes)/(home)/(overview-page)/components/certificates/certificate-skeleton'
const TestPage = () => {
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <>
      {/* <OverviewSkeleton />
      <GridCardSkeleton />
      <SkillSkeleton />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Separator/> */}
      {/*
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {arr.map((item: any) => (
          <ProjectCardSkeleton key={item} />
        ))}
      </div> */}

      {/* <PublicProfileSkeleton/> */}
      <CertificateSkeleton />
      {/* <CertificateCardSkeleton /> */}
      {/* <PublicProfileSkeleton /> */}
    </>
  )
}

export default TestPage
