// import {
//   useMutation,
//   useQueryClient,
// } from "@tanstack/react-query";

// export function useLogin() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (data: {
//       username: string;
//       password: string;
//     }) => {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (!res.ok) {
//         const error = await res.json();
//         throw new Error(error.message || "Login Error");
//       }

//       return res.json();
//     },
//     onSuccess: (data) => {
//       queryClient.setQueryData(["session"], data.user);

//       queryClient.invalidateQueries({
//         queryKey: ["session"],
//       });
//     },
//   });
// }

import { useMutation } from "@tanstack/react-query";
import { loginUserAction } from "@/src/actions/auth";

export const useLogin = () =>
  useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const result = await loginUserAction(credentials);

      if (!result.success) {
        throw new Error(result.error || "Unknown error");
      }

      return result.data;
    },
  });
