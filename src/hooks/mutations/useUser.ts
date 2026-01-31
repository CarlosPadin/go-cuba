"use client";

import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/src/lib/supabase/client";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const queryClient = useQueryClient();

  useEffect(() => {
    // Obtener usuario inicial
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
      // Sincronizar con React Query
      queryClient.setQueryData(["user"], user);
    };

    getUser();

    // Escuchar cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session?.user);
        const newUser = session?.user ?? null;
        setUser(newUser);
        setLoading(false);
        // Sincronizar con React Query
        queryClient.setQueryData(["user"], newUser);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, queryClient]);

  return { user, loading };
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
  }, [user, userLoading]);  // supabase

  return { user, profile, loading: userLoading || loading };
};