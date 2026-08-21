import Common_Form from "@/components/common_form";
import { signin } from "@/config";
import { authContext } from "@/context/auth-context";
import { useContext } from "react";

function SignIN() {
  const { signinForm, handleSignin, loading } = useContext(authContext);
  return (
    <Common_Form
      form={signinForm}
      handleSubmit={handleSignin}
      formConfig={signin}
      loading={loading}
    ></Common_Form>
  );
}

export default SignIN;
