import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-10/12 mx-auto my-5">

      <Card className="col-span-1 p-4">
        <Skeleton className="w-full h-80 rounded-lg" />

        <div className="flex gap-2 mt-3">
          <Skeleton className="w-16 h-16 rounded-md" />
          <Skeleton className="w-16 h-16 rounded-md" />
          <Skeleton className="w-16 h-16 rounded-md" />
        </div>
      </Card>

      <Card className="col-span-3 p-6">
        <CardContent className="space-y-4">

          <div className="flex gap-2">
            <Skeleton className="w-20 h-6 rounded-full" />
            <Skeleton className="w-20 h-6 rounded-full" />
          </div>

          <Skeleton className="w-2/3 h-8" />

          <Skeleton className="w-32 h-5" />

          <Skeleton className="w-24 h-8" />

          <Skeleton className="w-full h-4" />
          <Skeleton className="w-5/6 h-4" />
          <Skeleton className="w-4/6 h-4" />

          <Skeleton className="w-32 h-10" />

          <Skeleton className="w-full h-12 rounded-lg" />

          <div className="flex gap-3">
            <Skeleton className="flex-1 h-12 rounded-lg" />
            <Skeleton className="flex-1 h-12 rounded-lg" />
          </div>

          <Skeleton className="w-full h-12 rounded-lg" />

        </CardContent>
      </Card>

    </div>
  )
}