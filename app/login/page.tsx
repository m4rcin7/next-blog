"use client";

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import FormButton from "@/components/form/form-button";
import { useAppContext } from "../provider";
import { onLogin } from "@/utils/actions";

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { isLogIn, setIsLogIn } = useAppContext();

  useEffect(() => {
    if (loginSuccess || isLogIn) {
      redirect("/dashboard");
    }
  }, [loginSuccess, isLogIn]);

  const handleLogin = async (
    _prevState: any,
    formData: FormData
  ): Promise<{ message: "success" | "error" }> => {
    const { login, password } = Object.fromEntries(formData) as {
      login: string;
      password: string;
    };

    try {
      const isSuccess = await onLogin(login, password);

      if (!isSuccess) {
        throw new Error("Invalid credentials");
      }

      setIsLogIn(true);
      setLoginSuccess(true);

      return { message: "success" };
    } catch {
      setIsLogIn(false);
      setLoginSuccess(false);
      return { message: "error" };
    }
  };

  return (
    <FormContainer action={handleLogin}>
      <FormInput type="text" name="login" label="Login :" />
      <FormInput type="password" name="password" label="Password :" />
      <FormButton text="Log in" />
    </FormContainer>
  );
};

export default Login;
