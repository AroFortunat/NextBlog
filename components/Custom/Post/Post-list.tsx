import { Post } from "@/types"
import { PostCard } from "./PostCard"

export const Postlist = (
    {posts}:{posts:Post[]}
) => {
  return (
    <div
    className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {posts.map((post)=>(
        <PostCard key={post.id} data={post}/>
      ))}
    </div>
  )
}
