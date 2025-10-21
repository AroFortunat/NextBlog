import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { FormValues } from "../types";

export const loginMutation = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (data:FormValues) => {
      const result = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/login`, data);
      return result.data;
    },
  });
};
