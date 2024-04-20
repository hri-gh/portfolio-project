"use client"

import React, { useState } from 'react'
import { useBadges } from '@/hooks/get-badges';
import { Badge } from './badge';
import { BentoGrid } from '@/components/custom-ui/bento-grid';

export const BadgeList = () => {

    const [data, error, loading] = useBadges()
    return (
        <>
            <BentoGrid className='max-w-4xl mx-auto'>
                {data.map((item: any) => (
                    <Badge key={item.id} item={item} />
                ))}
            </BentoGrid>
        </>
    )
}
