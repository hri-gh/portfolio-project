import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export function GridCardSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-6 w-[250px]" />
      <Separator className="w-[250px]"/>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[180px]" />
      </div>
    </div>
  )
}
