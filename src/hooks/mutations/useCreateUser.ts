import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () =>
  useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        const message =
          json.errors
            ? String(Object.values(json.errors)[0])
            : "Error creating user";

        throw new Error(message);
      }

      return json;
    },
  });
