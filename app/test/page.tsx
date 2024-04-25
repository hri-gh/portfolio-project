import React from 'react'
import OverviewSkeleton from '../(public)/(routes)/(home)/(overview-page)/components/overview/overview-skeleton'
import { GridCardSkeleton } from '../(public)/(routes)/(home)/(overview-page)/components/grid-card/grid-card-skeleton'
import SkillSkeleton from '@/components/public/skills/skill-skeleton'
const TestPage = () => {
  return (
    <>
    <OverviewSkeleton/>
    <GridCardSkeleton/>
    <SkillSkeleton/>
    </>
  )
}

export default TestPage
