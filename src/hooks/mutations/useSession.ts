"use client";

import { useQuery } from "@tanstack/react-query";

export const useSession = () => {
  const query = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await fetch("/api/auth/session", {
        credentials: "include",
      });

      if (!res.ok) {
        return { user: null };
      }
      const data = await res.json();
      return {
        user: data?.user ?? null,
        accessToken: data?.accessToken ?? null,
      };
    },

    // Session in cache for 2 minutes
    staleTime: 1000 * 60 * 2,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    ...query,   // loading, error, isFetching, etc
    user: query.data?.user ?? null,
    accessToken: query.data?.accessToken ?? null,
  };
};

