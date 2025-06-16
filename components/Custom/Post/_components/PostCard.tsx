import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Post } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { ViewAndComments } from "../../ViewAndComments"

export const PostCard = (
    { data }: { data: Post }
) => {
    return (
        <div>
            <Link href={`/posts/${data.slug}`}>
                <Card className="flex flex-col justify-between rounded-lg border-2 h-[100%]">
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
                        <p className="font-semibold text-lg mt-3">{data.title}</p>
                    </CardHeader>
                    <CardContent>
                        <Badge variant={'outline'}>
                            {data.category}
                        </Badge>
                    </CardContent>
                    <CardFooter>
                        <ViewAndComments data={data} iconCommentSize={20} iconViewSize={20} />
                    </CardFooter>
                </Card>
            </Link>
        </div>
    )
}

