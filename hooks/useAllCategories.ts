import { AllCategory } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getAllCategories() {
  const { data } = await axios.get(`/api/categories/`);
  return data as AllCategory;
}

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["AllCategories"],
    queryFn: () => getAllCategories(),
  });
};
