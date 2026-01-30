"use client";

import { useEffect, useState } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { createClient } from "@/src/lib/supabase/client";

export const useUser = () => {
  const supabase = createClient();
  const queryClient = useQueryClient();

  const { data: user, isLoading: loading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      return user;
    },
    staleTime: Infinity, // No refetch automático, solo cuando se invalide
  });

  useEffect(() => {
    // Escuchar cambios de autenticación en tiempo real
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session?.user);
        // Actualizar el cache cuando cambie la sesión
        queryClient.setQueryData(["user"], session?.user ?? null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, queryClient]);

  return { user: user ?? null, loading };
};

export const useUserProfile = () => {
  const { user, loading: userLoading } = useUser();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getProfile = async () => {
      if (!user) {
        setProfile(null);
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(data);
      setLoading(false);
    };

    if (!userLoading) {
      getProfile();
    }
  }, [user, userLoading]);

  return { user, profile, loading: userLoading || loading };
};