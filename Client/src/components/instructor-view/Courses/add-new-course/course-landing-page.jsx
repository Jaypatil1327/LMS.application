import Common_Form from "@/components/common_form";
import { courseLandingPageFormControls } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { useContext } from "react";

function CourseLandingPage() {
  const { InsturctorForm, handleSubmit } = useContext(InstructorContext);
  return (
    <div className="w-full">
      <Common_Form
        formConfig={courseLandingPageFormControls}
        form={InsturctorForm}
        handleSubmit={handleSubmit}
      ></Common_Form>
    </div>
  );
}

export default CourseLandingPage;
