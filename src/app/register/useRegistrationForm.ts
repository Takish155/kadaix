import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { Axios, AxiosError } from "axios";
import z from "zod";
import { signIn } from "next-auth/react";

type ErrorResponse = {
  error: string;
};

const registrationSchema = z.object({
  username: z
    .string()
    .min(4, { message: "ユーザIDは少なくとも6文字以上を入力してください。" }),
  email: z
    .string()
    .email({ message: "正しいメールアドレスを入力してください。" }),
  password: z
    .string()
    .min(6, { message: "パスワードは少なくとも6文字以上を入力してください。" }),
  birthDay: z.string().min(2, { message: "日を選んでください。" }),
  birthMonth: z.string().min(1, { message: "月を選んでください。" }),
  birthYear: z.string().min(2, { message: "年を選んでください。" }),
  gender: z.enum(["male", "female"]),
});

type RegistrationFormSchema = z.infer<typeof registrationSchema>;

const useRegistrationForm = () => {
  const [year, setYear] = useState(1923);
  const [years, setYears] = useState<number[]>([]);
  const [months, setMonths] = useState<number[]>([]);
  const [days, setDays] = useState<number[]>([]);
  const [registrationError, setRegistrationError] = useState("");

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    setYear(currentYear);
    setYears(
      Array.from({ length: currentYear - 1923 + 1 }, (_, i) => 1923 + i).sort(
        (a, b) => a + b
      )
    );
    setMonths(Array.from({ length: 12 }, (_, i) => i + 1));
    setDays(Array.from({ length: 31 }, (_, i) => i + 1));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormSchema>({
    resolver: zodResolver(registrationSchema),
  });

  const fetchData = async (
    username: string,
    email: string,
    password: string,
    birthDay: string,
    gender: string
  ) => {
    await axios
      .post(
        "http://localhost:3000/api/register",
        {
          username: username,
          email: email,
          password: password,
          birthDay: birthDay,
          gender: gender,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(async (response) => {
        const result = await signIn("credentials", {
          username,
          password,
          callbackUrl: "/",
          redirect: true,
        });
      })
      .catch((error) => {
        setRegistrationError((error as AxiosError).response?.data.error);
      });
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    fetchData,
    years,
    months,
    days,
    year,
    registrationError,
  };
};

export default useRegistrationForm;
