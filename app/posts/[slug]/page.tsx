import { PageContainer } from "@/components/Custom/PageContainer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Post } from "@/types"

const SinglePostPage = ({ params }: { params: { slug: string } }) => {
  const POST: Post = {
    id: 1,
    category: "React",
    title: "React State Management: Choosing the Right Solution",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    caption:
      "Explore different state management solutions in React and choose the one that fits your needs.",
    date: "2023-01-15",
    minutesToRead: 10,
    author: "John ReactDev",
    nbViews: 25,
    nbComments: 8,
    slug: "react-state-management-choosing-right-solution",
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
                {POST.title}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 mb-3">
          <div className="flex justify-center items-center gap-3">
            <Avatar>
              <AvatarImage src={'/defaultProfile.jpg'} />
              <AvatarFallback>{POST.author}</AvatarFallback>
            </Avatar>
            <div>
              <p> {POST.author}</p>
              <p className="text-slate-500">
                Posted on {new Date(POST.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default SinglePostPage