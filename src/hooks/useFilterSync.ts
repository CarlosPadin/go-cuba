// src/hooks/useFilterSync.ts
"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ISearchCarsFilters } from "../interfaces";

export const useFilterSync = (filters: ISearchCarsFilters) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.city) params.set('city', filters.city);
    if (filters.carType) params.set('carType', filters.carType);
    if (filters.powerType) params.set('powerType', filters.powerType);
    
    if (filters.dateRange[0]) params.set('initialDate', filters.dateRange[0]);
    if (filters.dateRange[1]) params.set('finalDate', filters.dateRange[1]);
    
    if (filters.price[0] !== 10 || filters.price[1] !== 50) {
      params.set('minPrice', filters.price[0].toString());
      params.set('maxPrice', filters.price[1].toString());
    }

    const queryString = params.toString();
    const newUrl = queryString ? `/search?${queryString}` : '/search';

    const currentQuery = searchParams.toString();
    if (queryString !== currentQuery) {
      router.replace(newUrl, { scroll: false });
    }
  }, [filters, router, searchParams]);
};