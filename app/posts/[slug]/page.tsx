import { PostComponent } from "./component/Post"

const SinglePostPage = async  ({ params }: { params: { slug: string } }) => {

  const {slug} = params

  return (
    <PostComponent slug={slug}/>
  )
}

export default SinglePostPage