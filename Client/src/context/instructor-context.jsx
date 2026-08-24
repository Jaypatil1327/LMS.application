import {
  courseLandingInitialFormData,
  initialCourseCurriculam,
} from "@/config";
import { createContext, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const InstructorContext = createContext(null);

export function InstructorContextProvider({ children }) {
  const InsturctorForm = useForm({
    defaultValues: {
      ...courseLandingInitialFormData,
    },
  });
  const MediaForm = useForm({
    defaultValues: {
      lectures: [
        {
          title: "",
          freePreview: false,
          video_url: "",
          public_id: "",
        },
      ],
    },
  });

  const Lectures = useFieldArray({
    control: MediaForm.control,
    name: "lectures",
  });

  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <InstructorContext.Provider
      value={{
        InsturctorForm,
        handleSubmit,
        Lectures,
        MediaForm,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
