import { courseLandingInitialFormData } from "@/config";
import { createContext } from "react";
import { useForm } from "react-hook-form";

export const InstructorContext = createContext(null);

export function InstructorContextProvider({ children }) {
  const instructorForm = useForm({
    defaultValues: courseLandingInitialFormData,
  });

  const handleSubmit = async (data) => {
    console.log(data);
  };

  return (
    <InstructorContext.Provider
      value={{
        instructorForm,
        handleSubmit,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
