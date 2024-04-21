"use client"

import React from 'react'

// import useQuery from '@/hooks/use-query';
import { usePublicProfiles } from '@/hooks/get-public-profile';

import PublicProfileCard from './public-profile-card';

export const PublicProfileListList = () => {

    const [data, error, loading] = usePublicProfiles()


    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {loading && (<p>Loading...</p>)}
                {error && (<p>{error}</p>)}
                {data.map((item: any) => (
                    <PublicProfileCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}
