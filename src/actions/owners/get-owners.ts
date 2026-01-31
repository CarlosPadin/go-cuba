'use server'

import { createClient } from "@/src/lib/supabase/server";
import { IOwner } from "@/src/interfaces";

// Function to get one owner by its ID
export const getOwnerById = async (id: string): Promise<IOwner> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('owners')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(`Error fetching owner: ${error.message}`);
  if (!data) throw new Error('Owner not found');

  return data as IOwner;
};
