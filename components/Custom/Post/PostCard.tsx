import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Post } from "@/types"
import Image from "next/image"
import Link from "next/link"

export const PostCard = (
    { data }: { data: Post }
) => {
    return (
        <div>
            <Link href={`/posts/${data.slug}`}>
                <Card className="flex flex-col justify-between rounded-lg border-2">
                    <CardHeader>
                        <div className="aspect-square relative">
                            <Image
                                className="aspect-square object-cover transition-all duration-300 hover:scale-110"
                                alt="image d'un post"
                                src={data.image ?? 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D'}
                                width={630}
                                height={630}
                                // quality={80}
                            />
                        </div>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </Link>
        </div>
    )
}

