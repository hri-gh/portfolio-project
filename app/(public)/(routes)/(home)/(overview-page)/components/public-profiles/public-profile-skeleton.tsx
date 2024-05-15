import { Skeleton } from "@/components/ui/skeleton"


export const PublicProfileSkeleton = () => {
    const numSKill = [1, 2, 3, 4, 5, 6,7, 8]
    return (
        <>
            <div className=" flex flex-wrap justify-center gap-2">
                {numSKill.map((numitem) => (
                    <div key={numitem} className="flex flex-col mx-auto">

                        <Skeleton className="h-20 w-15 mb-2 p-3 mt-2 rounded object-cover bg-zinc-400" />
                        <Skeleton className="h-8 w-[80px]" />

                    </div>
                ))}
            </div>
        </>
    )
}

