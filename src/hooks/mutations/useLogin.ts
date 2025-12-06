"use client";

import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/src/services/auth";

export function useLogin() {
  return useMutation({
    mutationFn: loginUser,
  });
}
