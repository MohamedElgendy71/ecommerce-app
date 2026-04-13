import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 m-10">
            {Array.from({ length: 5 }).map((_, i) => (
                <Card key={i} className="h-70 w-full">
                    <CardHeader>
                        <Skeleton className="h-4 w-2/3" />
                        <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="aspect-video w-full" />
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
