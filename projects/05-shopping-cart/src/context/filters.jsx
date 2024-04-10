import { Children, createContext, useState } from "react";

// 1. Este es el que tenemos que consumir
export const FiltersContext = createContext();

// 2. Este es el que nos provee acceso al contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  })

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
