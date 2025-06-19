import { PageTitle } from "@/components/Custom/page-title"
import { PageContainer } from "@/components/Custom/PageContainer"

const page = async ({params}:{params: { slug: string }}) => {
    const {slug} = await params
    return (
        <PageContainer>
            <PageTitle title={slug} />
        </PageContainer>
    )
}
export default page
