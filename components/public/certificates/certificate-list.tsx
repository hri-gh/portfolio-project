"use client"

import React, { useState } from 'react'
import { useCertificates } from '@/hooks/get-certificates';
import { Certificate } from './certificate';
import { BentoGrid } from '@/components/custom-ui/bento-grid';
import CertificateCardSkeleton from './certificate-card-skeleton';

export const CertificateList = () => {

    const [data, error, loading] = useCertificates()
    return (
        <>
            {loading && (<CertificateCardSkeleton />)}
            <BentoGrid className='max-w-4xl mx-auto'>
                {data.map((item: any) => (
                    <Certificate key={item.id} item={item} />
                ))}
            </BentoGrid>
        </>
    )
}
