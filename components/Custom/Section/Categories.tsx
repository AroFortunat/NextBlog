"use client"
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllCategories } from "@/hooks/useGetAllCategories";
import Link from "next/link";

export function Categories() {
    const { data: CATEGORIES, isFetching, error ,isLoading} = useGetAllCategories()

    if (error) {
        return <p>error</p>
    }

    return (
        <div className=" mt-6 flex flex-col gap-4 md:flex-row justify-center items-center">
            {(isFetching || isLoading) ? (
                <>
                    {CATEGORIES?.map((_,key) => (
                        <div key={key} className="flex items-center gap-4">
                            <Skeleton className="h-4 w-[80px]" />
                        </div>
                    ))}
                </>
            ) : (
                <>
                    {CATEGORIES?.map(c =>
                        <Link href={`/categories/${c.slug}`} key={c.id}>
                            <Button variant={'outline'}>
                                {c.title}
                            </Button>
                        </Link>
                    )}
                </>
            )}
        </div>
    );
}