import { Skeleton } from "@/components/ui/skeleton"


export const PublicProfileSkeleton = () => {
    return (
        <>
            <div className="flex flex-col mx-auto">

                <Skeleton className="h-20 w-15 mb-2 p-3 mt-2 rounded object-cover bg-zinc-400" />
                <Skeleton className="h-8 w-[80px]" />

            </div>
        </>
    )
}

