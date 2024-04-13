import React from 'react'

import { Separator } from '@/components/ui/separator'

import OverviewPage from './overview/page'
import AboutmePage from './about-me/page'

const HomeContents = () => {
    return (
        <>
            <OverviewPage/>
            <Separator className='bg-red-500 p-1 rounded-md'/>
            <AboutmePage/>
            <Separator/>
            <h1 className='text-3xl m-3'>Learning Journey</h1>

        </>
    )
}

export default HomeContents
