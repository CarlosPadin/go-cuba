import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () =>
  useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error creating user");

      return res.json();
    },
  });
