"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserAction } from "@/src/actions/auth";

export const useCreateUser = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const result = await createUserAction(data);

      if (!result.success) {
        throw new Error(result.error || "Unknown error");
      }

      return result.data;
    },
    onSuccess: (data) => {
      // Actualizar el cache del usuario inmediatamente
      if (data?.user) {
        queryClient.setQueryData(["user"], data.user);
      }
      // Invalidar para forzar refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // Recargar Server Components
      router.refresh();
    },
  });
};