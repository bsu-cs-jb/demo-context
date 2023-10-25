import { createContext } from "react";

interface NameAge {
  name: string;
  age: number;
}
// Create a context for name and age here
export const NameAgeContext = createContext<NameAge>({ name: "", age: 0 });
