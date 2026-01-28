// "use client";

// import { useQueryClient } from "@tanstack/react-query";

// export const useLogout = () => {
//   const queryClient = useQueryClient();

//   const logout = async () => {
//     await fetch("/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     });

//     // Clean session cache
//     queryClient.setQueryData(["session"], {
//       user: null,
//       accessToken: null,
//     });
//   };

//   return logout;
// };

"use client";

import { useRouter } from "next/navigation";
import { logoutUserAction } from "@/src/actions/auth";

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    await logoutUserAction();
    
    router.refresh();
    // router.push("/login");
  };

  return logout;
};
