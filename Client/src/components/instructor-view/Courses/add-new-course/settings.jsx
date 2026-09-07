import { Button } from "@/components/ui/button";
import { InstructorContext } from "@/context/instructor-context";
import { useContext } from "react";

function CourseSettings() {
  const { InstructorForm, handleSubmit } = useContext(InstructorContext);

  return (
    <form onSubmit={InstructorForm.handleSubmit(handleSubmit)}>
      <Button type="submit">Upload Course</Button>
    </form>
  );
}

export default CourseSettings;
