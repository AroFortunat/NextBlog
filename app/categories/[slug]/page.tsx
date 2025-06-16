import { PageTitle } from "@/components/Custom/page-title"
import { PageContainer } from "@/components/Custom/PageContainer"

const page = ({params}:{params: { slug: string }}) => (
    <PageContainer>
        <PageTitle title={params.slug} />
    </PageContainer>
)
export default page
