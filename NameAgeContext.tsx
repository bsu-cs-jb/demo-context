import { createContext, PropsWithChildren, useState } from "react";
import { useScale } from "./ScaleContext";
import { genid, log } from "./utils";

export interface NameAge {
  id: string;
  name: string;
  age: number;
}
interface NameAgeContextType {
  people: NameAge[];
  addPerson: (person: NameAge) => void;
  deletePerson: (person: NameAge) => void;
}
// Create a context for name and age here
export const NameAgeContext = createContext<NameAgeContextType>({
  people: [],
  addPerson: () => undefined,
  deletePerson: () => undefined,
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
    log(`addPerson() id: ${person.id}`);
    setPeople([...people, person]);
  };

  const deletePerson = (toDelete: NameAge) => {
    log(`deletePerson() id: ${toDelete.id}`);
    setPeople(people.filter((person) => person.id !== toDelete.id));
  };

  return (
    <NameAgeContext.Provider value={{ people, addPerson, deletePerson }}>
      {children}
    </NameAgeContext.Provider>
  );
}
