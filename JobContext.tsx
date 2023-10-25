import { PropsWithChildren, createContext, useContext } from "react";

// Define the type that will be used for the JobContext
export interface JobExperience {
  title: string;
  years: number;
}

// Create the JobContext object
export const JobContext = createContext<JobExperience>({ title: "", years: 0 });

// helper hook function to get the value of the JobContext
export function useJobContext() {
  return useContext(JobContext);
}

// helper Component to provide the JobContext value
export function JobContextProvider({
  title,
  years,
  children,
}: PropsWithChildren<JobExperience>) {
  return (
    <JobContext.Provider value={{ title, years }}>
      {children}
    </JobContext.Provider>
  );
}
