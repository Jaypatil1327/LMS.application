import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "@/services";
import { login } from "../services";
export const authContext = createContext(null);
const signupSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z
    .string()
    .min(3, "password is too short!")
    .max(12, "password is too long!!"),
});

const signinSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(3, "password is too short!")
    .max(12, "password is too long!!"),
});

export function AuthProvider({ children }) {
  const signupForm = useForm({
    defaultValues: {
      name: "",
      password: "",
      email: "",
    },
    resolver: zodResolver(signupSchema),
  });

  const signinForm = useForm({
    defaultValues: {
      password: "",
      email: "",
    },
    resolver: zodResolver(signinSchema),
  });
  const [loading, isLoading] = useState(false);
  const [state, setState] = useState("signin");
  const [auth, setAuth] = useState({});

  async function handleSignin(vals) {
    isLoading(true);
    const data = await login(vals);
    console.log(data);
    if (data.status) {
      sessionStorage.setItem("accessToken", data.data.access_token);
    }
    isLoading(false);
  }

  async function handleSignup(vals) {
    isLoading(true);
    const data = await register(vals);
    isLoading(false);
    setState("signin");
  }
  return (
    <authContext.Provider
      value={{
        signinForm,
        signupForm,
        handleSignin,
        handleSignup,
        state,
        setState,
        loading,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
