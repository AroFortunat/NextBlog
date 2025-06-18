import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const PostCardSkeleton = () => {
    return (
        <Card className="flex flex-col justify-between rounded-lg border-2 h-[100%]">
            <CardHeader>
                <div className="aspect-square relative">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                </div>
                <Skeleton className="h-4 w-[250px]" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-4 w-[20px]" />
            </CardContent>
            <CardFooter>
                <Skeleton className="h-4 w-[20px]" />
            </CardFooter>
        </Card>
    )
}

