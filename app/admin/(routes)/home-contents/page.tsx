import React from 'react'

import { Separator } from '@/components/ui/separator'

import OverviewsPage from './overview/page'
import AboutmePage from './about-me/page'
import LearningJourneysPage from './learning-journey/page'

const HomeContents = () => {
    return (
        <>
            <OverviewsPage/>
            <Separator className='bg-gray-500 p-1 rounded-md'/>
            <AboutmePage/>
            <Separator className='bg-gray-500 p-1 rounded-md'/>
            <LearningJourneysPage/>

        </>
    )
}

export default HomeContents
