"use client"
import { PageTitle } from "@/components/Custom/page-title"
import { PageContainer } from "@/components/Custom/PageContainer"
import { Postlist } from "@/components/Custom/Post/Post-list"

const page = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params
    return (
        <PageContainer>
            <PageTitle title={slug.replace("-", " ")} />
            <Postlist categories={slug} />
        </PageContainer>
    )
}
export default page
