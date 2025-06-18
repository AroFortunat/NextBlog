import { PageContainer } from "@/components/Custom/PageContainer";
import { Postlist } from "@/components/Custom/Post/Post-list";
import { Categories } from "@/components/Custom/Section/Categories";
import { Hero } from "@/components/Custom/Section/Hero";
import { POSTS } from "@/utils/posts";

export default function Home() {
  return (
    <PageContainer>
      <div className="py-10 px-4">
        <Hero />
        <Categories />
        <Postlist />
      </div>
    </PageContainer>
  );
}