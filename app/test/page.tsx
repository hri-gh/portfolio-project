import React from 'react'
import OverviewSkeleton from '../(public)/(routes)/(home)/(overview-page)/components/overview/overview-skeleton'
import { GridCardSkeleton } from '../(public)/(routes)/(home)/(overview-page)/components/grid-card/grid-card-skeleton'
import SkillSkeleton from '@/components/public/skills/skill-skeleton'
import { Skeleton } from '@/components/ui/skeleton'
import ProjectCardSkeleton from '@/components/public/projects/project-card-skeleton'
import { Separator } from '@/components/ui/separator'
import CertificateCardSkeleton from '@/components/public/certificates/certificate-card-skeleton'
import PublicProfileSkeleton from '@/components/public/public-profiles/public-profile-skeleton'
const TestPage = () => {
  return (
    <>
      {/* <OverviewSkeleton />
      <GridCardSkeleton />
      <SkillSkeleton />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Separator/> */}

      <ProjectCardSkeleton />
      {/* <CertificateCardSkeleton /> */}
      {/* <PublicProfileSkeleton /> */}
    </>
  )
}

export default TestPage
