import { useContext } from "react";
import { FiltersContext } from "@/src/providers/FiltersProvider";

export const useCarFilters = () => {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};