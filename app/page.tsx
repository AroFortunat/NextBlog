import { PageContainer } from "@/components/Custom/PageContainer";
import { Categories } from "@/components/Custom/Section/Categories";
import { Hero } from "@/components/Custom/Section/Hero";

export default function Home() {
  return (
    <PageContainer>
      <div className="py-10 px-4">
        <Hero/>
        <Categories /> 
      </div>
    </PageContainer>
  );
}