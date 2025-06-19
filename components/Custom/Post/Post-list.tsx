"use client"
import { useGetAllPost } from "@/hooks/useGetAllPost"
import { PostCard } from "./_components/PostCard"
import { PostCardSkeleton } from "./_components/PostCardSkeleton"
import { Loader } from "../Loader"

export const Postlist = () => {

  const { data: posts, isFetching, error,isLoading } = useGetAllPost()

  if (isLoading) {
    return <Loader/>
  }

  if (isFetching && !isLoading) {
    return (
      <div
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {posts?.map((_,key) => (
          <PostCardSkeleton key={key} />
        ))}
      </div>
    )
  }
  if (error) {
    return <p>error</p>
  }
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
