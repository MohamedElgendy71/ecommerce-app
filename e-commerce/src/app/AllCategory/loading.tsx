import React from 'react'

export default function Loading() {
    return (
        <div className="container mx-auto p-5 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
                <div
                    key={i}
                    className="p-3 border border-[#F3F4F6] rounded-xl bg-white"
                >
                    {/* Image Skeleton */}
                    <div className="bg-[#F9FAFB] p-7 rounded-xl flex items-center justify-center">
                        <div className="h-16 w-16 bg-gray-200 animate-pulse rounded-lg" />
                    </div>

                    {/* Text Skeleton */}
                    <div className="mt-5 flex justify-center">
                        <div className="h-4 w-20 bg-gray-200 animate-pulse rounded-md" />
                    </div>
                </div>
            ))}
        </div>
    )
}