"use client";

import { useQuery } from "@tanstack/react-query";

export const useSession = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await fetch("/api/auth/session");
      if (!res.ok)
        throw new Error("Session was unable to reach");
      return res.json();
    },
  });
};
