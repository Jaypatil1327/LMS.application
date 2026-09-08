import { createContext } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const InstructorSchema = z.object({
  title: z.string(),
  category: z.string(),
  level: z.string(),
  primaryLanguage: z.string(),
  subtitle: z.string(),
  description: z.string(),
  pricing: z.string(),
  objectives: z.string(),
  welcomeMessage: z.string(),
  public_id: z.string(),
  image: z.string(),

  lectures: z.array(
    z.object({
      title: z.string(),
      freePreview: z.boolean(),
      public_id: z.string(),
      video_url: z.string(),
    }),
  ),
});

export const InstructorContext = createContext(null);

export function InstructorContextProvider({ children }) {
  const InstructorForm = useForm({
    defaultValues: {
      title: "",
      category: "",
      level: "",
      primaryLanguage: "",
      subtitle: "",
      description: "",
      pricing: "",
      objectives: "",
      welcomeMessage: "",
      public_id: "",
      image: "",

      lectures: [
        {
          title: "",
          freePreview: false,
          public_id: "",
          video_url: "",
        },
      ],
    },

    resolver: zodResolver(InstructorSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control: InstructorForm.control,
    name: "lectures",
  });

  const lectures = InstructorForm.watch("lectures");

  function handleSubmit(data) {
    console.log("form submit");
    console.log(data);
  }

  return (
    <InstructorContext.Provider
      value={{
        lectures,
        InstructorForm,
        handleSubmit,
        fields,
        append,
        remove,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
