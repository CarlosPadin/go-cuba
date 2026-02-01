'use server'

import { createClient } from "@/src/lib/supabase/server";
import { parseCar } from '@/src/lib/utils';
import { ICar } from '@/src/interfaces';

// Get all cars from the database
export const getCars = async (): Promise<ICar[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('cars')
    .select('*');

  if (error) throw new Error(`Error fetching cars: ${error.message}`);
  
  return (data || []).map(parseCar);
};

// Get cars by their type, with an optional limit
export const getCarsByType = async ({
  carType,
  limit,
  excludeId
}: {
  carType: string;
  limit?: number;
  excludeId?: string;
}): Promise<ICar[]> => {
    const supabase = await createClient();

  let query = supabase
    .from('cars')
    .select('*')
    .eq('car_type', carType);

  if (excludeId) {
    query = query.neq('id', excludeId);
  }

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) throw new Error(`Error fetching cars by type: ${error.message}`);

  return (data || []).map(parseCar);
};

// Get one car by its ID
export const getCarById = async (id: string): Promise<ICar> => {
    const supabase = await createClient();

  const { data, error } = await supabase
    .from('cars')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(`Error fetching car: ${error.message}`);
  if (!data) throw new Error('Car not found');

  return parseCar(data);
};

