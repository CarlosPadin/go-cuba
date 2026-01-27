import { createClient } from '@supabase/supabase-js';
import { parseCar } from '@/src/lib/functions';
import { ICar, IOwner } from '@/src/interfaces';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to get all cars from the database
export const getCars = async (): Promise<ICar[]> => {
  const { data, error } = await supabase
    .from('cars')
    .select('*');

  if (error) throw new Error(`Error fetching cars: ${error.message}`);
  
  return (data || []).map(parseCar);
};

// Function to get cars by their type, with an optional limit
export const getCarsByType = async ({
  carType,
  limit,
  excludeId
}: {
  carType: string;
  limit?: number;
  excludeId?: string;
}): Promise<ICar[]> => {
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

// Function to get one car by its ID
export const getCarById = async (id: string): Promise<ICar> => {
  const { data, error } = await supabase
    .from('cars')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(`Error fetching car: ${error.message}`);
  if (!data) throw new Error('Car not found');

  return parseCar(data);
};

// Function to get one owner by its ID
export const getOwnerById = async (id: string): Promise<IOwner> => {
  const { data, error } = await supabase
    .from('owners')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(`Error fetching owner: ${error.message}`);
  if (!data) throw new Error('Owner not found');

  return data as IOwner;
};

