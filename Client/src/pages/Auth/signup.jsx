import Common_Form from "@/components/common_form";
import { signup } from "@/components/common_form/form_controls";
import { useForm } from "react-hook-form";

function SignUP() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Common_Form
      form={form}
      handleSubmit={handleSubmit}
      formConfig={signup}
    ></Common_Form>
  );
}

export default SignUP;
