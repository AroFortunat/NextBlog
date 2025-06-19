import { allPost } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getAllPost(slug:string) {
  const { data } = await axios.get(`/api/posts?cat=${slug}`);
  return data as allPost;
}

export const useGetAllPost = (slug:string) => {
  return useQuery({
    queryKey: ["Allpost",slug],
    queryFn: () => getAllPost(slug),
  });
};
