"use client"

import React, { useState } from 'react'
import { useBadges } from '@/hooks/get-badges';
import { Badge } from './badge';
import { BentoGrid } from '@/components/custom-ui/bento-grid';
import BadgeSkeleton from './badge-skeleton';
export const BadgeList = () => {

    const [data, error, loading] = useBadges()
    const skeletons = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {loading && (
                // grid lg:grid-cols-3 md:grid-cols-1  gap-4
                <div className="lg:flex lg:flex-wrap lg:justify-between mx-auto max-w-4xl ">
                    {skeletons.map((skeleton: any) => (
                        <BadgeSkeleton key={skeleton} />

                    ))}
                </div>
            )}
            <BentoGrid className='max-w-4xl mx-auto'>
                {data.map((item: any) => (
                    <Badge key={item.id} item={item} />
                ))}
            </BentoGrid>
        </>
    )
}
