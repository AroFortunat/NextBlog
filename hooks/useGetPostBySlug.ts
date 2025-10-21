import { Post } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function getPostBySlug(slug: string) {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/post/${slug}`);
  return data as Post;
}

export const useGetPostBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPostBySlug(slug),
    enabled: !!slug,
  });
};
