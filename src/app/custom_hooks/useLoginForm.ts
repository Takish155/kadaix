"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const schema = z.object({
  username: z.string().min(6, { message: "正しいユーザIDを入力してください" }),
  password: z
    .string()
    .min(6, { message: "正しいパスワードを入力してください" })
    .max(20, { message: "正しいパスワードを入力してください" }),
});

type TransactionFormData = z.infer<typeof schema>;

const useLoginForm = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionFormData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const handleLogin = async (username: string, password: string) => {
    const result = await signIn("credentials", {
      username,
      password,
      callbackUrl: "/",
      redirect: false,
    });
    if (result?.error) {
      setError("ユーザID・パスワードが一致しません。");
    } else {
      router.push("/");
    }
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    error,
    setError,
    handleLogin,
  };
};

export default useLoginForm;
