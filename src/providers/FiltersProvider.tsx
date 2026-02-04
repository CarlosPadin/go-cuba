"use client";

import {
  createContext,
  useState,
  ReactNode,
} from "react";
import { ISearchCarsFilters } from "@/src/interfaces";

interface FiltersContextType {
  filters: ISearchCarsFilters;
  setCity: (city: string | null) => void;
  setCarType: (carType: string | null) => void;
  setPowerType: (powerType: string | null) => void;
  setDateRange: (
    dateRange: [string | null, string | null],
  ) => void;
  setPrice: (price: number[]) => void;
  resetFilters: () => void;
}

export const FiltersContext = createContext<
  FiltersContextType | undefined
>(undefined);

const initialFilters: ISearchCarsFilters = {
  city: null,
  carType: null,
  powerType: null,
  dateRange: [null, null],
  price: [10, 150],
};

export const FiltersProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [filters, setFilters] =
    useState<ISearchCarsFilters>(initialFilters);

  const setCity = (city: string | null) => {
    setFilters((prev) => ({ ...prev, city }));
  };

  const setCarType = (carType: string | null) => {
    setFilters((prev) => ({ ...prev, carType }));
  };

  const setPowerType = (powerType: string | null) => {
    setFilters((prev) => ({ ...prev, powerType }));
  };

  const setDateRange = (
    dateRange: [string | null, string | null],
  ) => {
    setFilters((prev) => ({ ...prev, dateRange }));
  };

  const setPrice = (price: number[]) => {
    setFilters((prev) => ({ ...prev, price }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setCity,
        setCarType,
        setPowerType,
        setDateRange,
        setPrice,
        resetFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
