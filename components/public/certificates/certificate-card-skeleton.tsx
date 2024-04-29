import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'

const CertificateCardSkeleton = () => {
    const numSKill = [1, 2, 3, 4, 5, 6]

    return (
        <>
        {/* Remove this from below div : flex flex-wrap justify-center */}
            <div className=" grid grid-cols-3 gap-4">
                {numSKill.map((numitem) => (
                    <div key={numitem} className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>

                ))}
            </div>
        </>
    )
}

export default CertificateCardSkeleton
