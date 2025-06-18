"use client"
import { Button } from "@/components/ui/button";
import { useAllCategories } from "@/hooks/useAllCategories";
import Link from "next/link";

export function Categories() {
    const { data: CATEGORIES, isFetching, error } = useAllCategories()

    if (error) {
        return <p>error</p>
    }

    return (<div className=" mt-6 flex flex-col gap-4 md:flex-row justify-center items-center">
        {CATEGORIES?.map(c =>
            <Link href={`/categories/${c.slug}`} key={c.id}>
                <Button variant={'outline'}>
                    {c.title}
                </Button>
            </Link>
        )}
    </div>);
}