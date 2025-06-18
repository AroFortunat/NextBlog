"use client"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { useAllCategories } from "@/hooks/useAllCategories"
import { Menu } from "lucide-react"
import Link from "next/link"

export const HeaderResponsiveMenu = () => {

  const { data: CATEGORIES, isFetching, error ,isLoading} = useAllCategories()

  if (isFetching || isLoading) {
    return <Skeleton className="h-4 w-[40px] md:hidden" />
  }

  if (error) {
    return <p>error</p>
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-6 w-6 md:hidden" />
      </SheetTrigger>
      <SheetContent
        side="left"
      >
        <div className="flex flex-col gap-4">
          <Link href={'/write'}>
            <Button variant="ghost">Write a Post </Button>
          </Link>
          <p>Categories</p>
          {CATEGORIES?.map((c) => (
            <Link
              key={c.id}
              href={`/categories/${c.slug}`}
              className="block px-2 py-1 text-lg"
            >
              {c.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

