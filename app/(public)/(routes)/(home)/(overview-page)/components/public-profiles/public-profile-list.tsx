"use client"

import React from 'react'

// import useQuery from '@/hooks/use-query';
import { usePublicProfiles } from '@/hooks/get-public-profile';

import PublicProfileCard from './public-profile-card';
import { PublicProfileSkeleton } from './public-profile-skeleton';


export const PublicProfileListList = () => {

    const [data, error, loading] = usePublicProfiles()
    const arr = [1, 2, 3, 4, 5, 6, 7]

    return (
        <>
            <div className='flex flex-wrap justify-center'>
                {loading && (arr.map((i)=>
                <PublicProfileSkeleton key={i}/>
                ))}
                {error && (<p>{error}</p>)}
                {data.map((item: any) => (
                    <PublicProfileCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}
