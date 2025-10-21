import { PageTitle } from '@/components/Custom/page-title';
import { PageContainer } from '@/components/Custom/PageContainer';
import { Postlist } from '@/components/Custom/Post/Post-list';
import { capitalizeFirstLetter } from '@/utils/capitalizeWord';

const page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const title = capitalizeFirstLetter(slug).replace('-', ' ');
  return (
    <PageContainer>
      <PageTitle title={title} />
      <Postlist categories={slug} />
    </PageContainer>
  );
};
export default page;