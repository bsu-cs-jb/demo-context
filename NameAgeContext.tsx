import { createContext, PropsWithChildren, useState } from "react";
import { useScale } from "./ScaleContext";
import { genid } from "./utils";

interface NameAge {
  id: string;
  name: string;
  age: number;
}
interface NameAgeContextType {
  people: NameAge[];
  addPerson: (person: NameAge) => void;
}
// Create a context for name and age here
export const NameAgeContext = createContext<NameAgeContextType>({
  people: [],
  addPerson: () => undefined,
});

export function NameAgeProvider({ children }: PropsWithChildren) {
  const [people, setPeople] = useState<NameAge[]>([
    {
      id: genid(),
      name: "Charles",
      age: 55,
    },
  ]);

  const addPerson = (person: NameAge) => {
    setPeople([...people, person]);
  };

  return (
    <NameAgeContext.Provider value={{ people, addPerson }}>
      {children}
    </NameAgeContext.Provider>
  );
}
