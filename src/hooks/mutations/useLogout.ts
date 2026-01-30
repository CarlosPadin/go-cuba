"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUserAction } from "@/src/actions/auth";

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const result = await logoutUserAction();

      if (!result.success) {
        throw new Error(result.error || "Logout failed");
      }

      return result;
    },
    onSuccess: () => {
      // Limpiar el cache del usuario inmediatamente
      queryClient.setQueryData(["user"], null);
      // Invalidar para forzar refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // Recargar Server Components
      router.refresh();
      // Redirigir al login
      router.push("/");
    },
  });
};