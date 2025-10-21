import { AllCategory } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function getAllCategories() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/categorie/all`);
  return data as AllCategory;
}

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ['AllCategories'],
    queryFn: () => getAllCategories(),
  });
};
