"use client";

import { useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const queryClient = useQueryClient();

  const logout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    // Clean session cache
    queryClient.setQueryData(["session"], {
      user: null,
      accessToken: null,
    });
  };

  return logout;
};
