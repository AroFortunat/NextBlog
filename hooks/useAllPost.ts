import { allPost } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getAllPost() {
  const { data } = await axios.get(`/api/posts/`);
  return data as allPost;
}

export const useAllPost = () => {
  return useQuery({
    queryKey: ["Allpost"],
    queryFn: () => getAllPost(),
  });
};
