import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/utils/categories";
import Link from "next/link";

export function Categories() {
    return (<div className=" mt-6 flex flex-col gap-4 md:flex-row justify-center items-center">
        {CATEGORIES.map(c =>
            <Link href={`/categories/${c.slug}`} key={c.id}>
                <Button variant={'outline'}>
                    {c.name}
                </Button>
            </Link>
        )}
    </div>);
}