import React from 'react'
import OverviewPage from './overview/page'
import { Separator } from '@/components/ui/separator'

const HomeContents = () => {
    return (
        <>
            <OverviewPage />
            <Separator className='bg-red-500 p-1 rounded-md'/>
            <h1 className='text-3xl m-3'>About Me</h1>
            <Separator/>
            <h1 className='text-3xl m-3'>Learning Journey</h1>

        </>
    )
}

export default HomeContents
