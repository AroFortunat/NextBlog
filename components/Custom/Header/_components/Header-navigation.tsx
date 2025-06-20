"use client"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useGetAllCategories } from "@/hooks/useGetAllCategories"
import { Skeleton } from "@/components/ui/skeleton"

export function HeaderNavigation() {

    const { data: CATEGORIES, isFetching, error } = useGetAllCategories()

    if (error) {
        return <p>error</p>
    }

    return (
        <NavigationMenu viewport={true}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {isFetching ?
                                (
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-[200px]" />
                                            <Skeleton className="h-4 w-[200px]" />
                                            <Skeleton className="h-4 w-[200px]" />
                                        </div>
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-[200px]" />
                                            <Skeleton className="h-4 w-[200px]" />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {CATEGORIES?.map((categori) => (
                                            <ListItem
                                                key={categori.id}
                                                href={`/categories/${categori.slug}`}
                                            >
                                                {categori.title}
                                            </ListItem>
                                        ))}
                                    </>
                                )
                            }

                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/write">Write a Post</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
