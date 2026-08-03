import Common_Form from "@/components/common_form";
import { signin } from "@/components/common_form/form_controls";
import { useForm } from "react-hook-form";

function SignIN() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Common_Form
      formConfig={signin}
      form={form}
      handleSubmit={handleSubmit}
    ></Common_Form>
  );
}

export default SignIN;
