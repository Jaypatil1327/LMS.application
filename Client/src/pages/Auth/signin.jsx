import Common_Form from "@/components/common_form";
import { signin } from "@/components/common_form/form_controls";
import { authContext } from "@/context/auth-context";
import { useContext } from "react";

function SignIN() {
  const { signinForm, handleSignin } = useContext(authContext);
  return (
    <Common_Form
      form={signinForm}
      handleSubmit={handleSignin}
      formConfig={signin}
    ></Common_Form>
  );
}

export default SignIN;
