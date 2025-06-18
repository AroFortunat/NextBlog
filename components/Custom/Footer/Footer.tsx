'use client'
import { PageContainer } from "../PageContainer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAllCategories } from "@/hooks/useAllCategories"

export const Footer = () => {

  const { data: CATEGORIES, isFetching, error } = useAllCategories()

  if (error) {
    return <p>error</p>
  }


  return (
    <footer className="p-4 border-t">
      <PageContainer>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <h1
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to to-blue-600"
          >NextBLog
          </h1>
          <div className="flex flex-col md:flex-row gap-2 ">
            {CATEGORIES?.map((c) => (
              <div key={c.id}>
                <Link href={`/categories/${c.slug}`}>
                  <Button variant={'ghost'}>
                    {c.title}
                  </Button>
                </Link>
              </div>
            ))}
            <Button variant={'ghost'}>
              <Link href={'/write'}>
                Write
              </Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}

