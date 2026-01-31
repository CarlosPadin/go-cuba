"use client";

import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/src/lib/supabase/client";

export const useUser = () => {
  const [isClient, setIsClient] = useState(false);
  const supabase = createClient();
  const queryClient = useQueryClient();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      return user;
    },
    enabled: isClient,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (!isClient) return;

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        // Update the user in the query client
        queryClient.setQueryData(["user"], session?.user ?? null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [isClient, supabase, queryClient]);

  return { 
    user: user ?? null, 
    loading: !isClient || userLoading 
  };
};

export const useUserProfile = () => {
  const { user, loading: userLoading } = useUser();
  const supabase = createClient();

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      
      return data;
    },
    enabled: !!user?.id && !userLoading, 
    staleTime: Infinity,
  });

  return { 
    user, 
    profile: profile ?? null, 
    loading: userLoading || profileLoading 
  };
};