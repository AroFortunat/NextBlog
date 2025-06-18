"use client"
import { PageContainer } from "@/components/Custom/PageContainer"
import { ViewAndComments } from "@/components/Custom/ViewAndComments"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { usePost } from "@/hooks/usePost"
import { Post } from "@/types"

export const PostComponent = ({ slug }: { slug: string }) => {

  const { data: post, isFetching, error } = usePost(slug)

  if (isFetching) {
    return (
      <PageContainer>
        <div className="flex justify-center h-full my-80">
          <Spinner size={'large'}>Loading...</Spinner>
        </div>
      </PageContainer>
    )
  }
  if (error) {
    return <p>error</p>
  }

  return (
    <PageContainer>
      <div className="p-8">
        <div
          className="h-[400px] aspect-square md:aspect-[2.4/1] overflow-hidden w-full bg-cover bg-center bg-no-repeat rounded-lg" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D')"
          }}>
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-lg">
              <h1 className="font-bold text-3xl sm:text-5xl text-black dark:text-white text-center">
                {post?.title}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 mb-3">
          <div className="flex justify-center items-center gap-3">
            <Avatar>
              <AvatarImage src={'/defaultProfile.jpg'} />
              <AvatarFallback>{post?.author}</AvatarFallback>
            </Avatar>
            {post?.createdAt && (
              <div>
                <p> {post.author}</p>
                <p className="text-slate-500">
                  Posted on {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
          <ViewAndComments data={post as Post} iconCommentSize={24} iconViewSize={24} />
        </div>
        <Separator />
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: post?.content as string
          }}
        >

        </div>
      </div>
    </PageContainer>
  )
}

