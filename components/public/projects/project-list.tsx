"use client"

import React from 'react'

// import useQuery from '@/hooks/use-query';
import { useProjects } from '@/hooks/get-projects';

import ProjectCard from '@/components/public/projects/project-card';

export const ProjectsList = () => {

    const [data, error, loading] = useProjects()

    const tech = data.map((item: any) => item.technologies.split(','))
    // console.log('PROJECT-LIST.TSX::',data);

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {loading && (<p>Loading...</p>)}
                {error && (<p>{error}</p>)}
                {data.map((item: any) => (
                    <ProjectCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}
