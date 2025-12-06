import { createUser } from "@/src/services/auth";
import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () =>
  useMutation({
    mutationFn: createUser,
  });
