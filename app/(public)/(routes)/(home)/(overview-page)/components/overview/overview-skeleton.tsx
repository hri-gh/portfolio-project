import { Skeleton } from "@/components/ui/skeleton"



import React from 'react'

const OverviewSkeleton = () => {
    return (
        <>
            <div className="flex items-center ">
                <div className="space-y-2 mt-2">
                    <Skeleton className="h-4 w-[600px] bg-gray-500" />
                    <Skeleton className="h-4 w-[500px]  bg-gray-500" />
                    <Skeleton className="h-4 w-[400px]  bg-gray-500" />
                    <Skeleton className="h-4 w-[350px]  bg-gray-500" />
                </div>
            </div>

        </>
    )
}

export default OverviewSkeleton
