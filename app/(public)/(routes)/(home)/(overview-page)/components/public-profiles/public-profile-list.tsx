"use client"

import React from 'react'

// import useQuery from '@/hooks/use-query';
import { usePublicProfiles } from '@/hooks/get-public-profile';

import PublicProfileCard from './public-profile-card';
import { PublicProfileSkeleton } from './public-profile-skeleton';
export const PublicProfileListList = () => {

    const [data, error, loading] = usePublicProfiles()


    return (
        <>
            <div className='flex flex-wrap justify-center'>
                {loading && (<PublicProfileSkeleton/>)}
                {error && (<p>{error}</p>)}
                {data.map((item: any) => (
                    <PublicProfileCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}
