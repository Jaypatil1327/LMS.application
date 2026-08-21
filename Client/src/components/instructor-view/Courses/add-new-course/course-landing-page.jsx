import Common_Form from "@/components/common_form";
import { courseLandingPageFormControls } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { useContext } from "react";

function CourseLandingPage() {
  const { instructorForm, handleSubmit } = useContext(InstructorContext);
  return (
    <div className="w-2xl">
      <Common_Form
        formConfig={courseLandingPageFormControls}
        form={instructorForm}
        handleSubmit={handleSubmit}
      ></Common_Form>
    </div>
  );
}

export default CourseLandingPage;
