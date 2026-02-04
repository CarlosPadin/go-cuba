"use server";

import { ICar, ISearchCarsFilters } from "@/src/interfaces";
import { createClient } from "@/src/lib/supabase/server";

export async function filterCars(filters: ISearchCarsFilters): Promise<ICar[]> {
  try {
    const supabase = await createClient();
    
    let query = supabase.from('cars').select('*');

    if (filters.city) {
      query = query.eq('city', filters.city);
    }

    if (filters.carType) {
      query = query.eq('car_type', filters.carType);
    }

    if (filters.powerType) {
      query = query.eq('power_type', filters.powerType);
    }

    if (filters.price && filters.price.length === 2) {
      query = query
        .gte('price', filters.price[0])
        .lte('price', filters.price[1]);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Failed to fetch cars: ${error.message}`);
    }

    let filteredCars = (data as ICar[]) || [];

    const [initialDate, finalDate] = filters.dateRange;
    
    if (initialDate && finalDate) {
      filteredCars = filteredCars.filter(car => {
        if (!car.reserved_dates || car.reserved_dates.length === 0) {
          return true;
        }

        return !hasDateConflict(
          initialDate,
          finalDate,
          car.reserved_dates
        );
      });
    }

    return filteredCars;
    
  } catch (error) {
    console.error('Error filtering cars:', error);
    throw new Error('Failed to filter cars');
  }
}

/**
 * Verifica si hay conflicto entre el rango solicitado y las fechas reservadas
 * Ahora trabaja directamente con strings en formato DD-MM-YYYY
 */
function hasDateConflict(
  requestedStart: string,
  requestedEnd: string,
  reservedDates: string[]
): boolean {
  // Comparación directa de strings en formato DD-MM-YYYY
  // Esto funciona porque el formato ISO es lexicográficamente ordenable
  
  for (const reservedDate of reservedDates) {
    // Si la fecha reservada está dentro del rango solicitado (inclusive)
    if (reservedDate >= requestedStart && reservedDate <= requestedEnd) {
      return true; // Hay conflicto
    }
  }

  return false; // No hay conflicto, está disponible
}