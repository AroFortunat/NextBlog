"use client"
import { useAllPost } from "@/hooks/useAllPost"
import { PostCard } from "./_components/PostCard"
import { Loader } from "../Loader"

export const Postlist = () => {

  const { data: posts, isFetching, error } = useAllPost()
  if (isFetching) {
    return <Loader />
  }
  if (error) {
    return <p>error</p>
  }
  console.log(posts)
  return (
    <div
      className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {posts?.map((post) => (
        <PostCard key={post.id} data={post} />
      ))}
    </div>
  )
}
