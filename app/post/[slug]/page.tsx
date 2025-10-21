import { PostComponent } from "./component/Post"

const SinglePostPage = async  ({ params }: { params: { slug: string } }) => {

  const {slug} = await params

  return (
    <PostComponent slug={slug}/>
  )
}

export default SinglePostPage