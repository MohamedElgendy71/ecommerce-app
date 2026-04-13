import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { array } from 'zod'

export default function CategorySkeleton() {
    return (
        <>
        <div className='w-10/12 mx-auto p-3'>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-4 my'>
                {Array.from({ length: 6 }).map((_, i) => (
                    <Card className="w-40">
                        <CardContent className="flex flex-col items-center gap-3 p-4">

                            {/* صورة الكاتيجوري */}
                            <Skeleton className="h-24 w-24 rounded-full" />

                            {/* اسم الكاتيجوري */}
                            <Skeleton className="h-4 w-20" />

                        </CardContent>
                    </Card>
                ))}
            </div>
                </div>
        </>
    )
}
