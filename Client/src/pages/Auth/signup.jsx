import Common_Form from "@/components/common_form";
import { signup } from "@/components/common_form/form_controls";
import { authContext } from "@/context/auth-context";
import { useContext } from "react";

function SignUP() {
  const { signupForm, handleSignup, loading } = useContext(authContext);
  return (
    <Common_Form
      formConfig={signup}
      form={signupForm}
      handleSubmit={handleSignup}
      loading={loading}
    ></Common_Form>
  );
}

export default SignUP;
