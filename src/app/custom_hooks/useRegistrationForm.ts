"use client";

import React, { useState, useEffect } from "react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError, AxiosResponse } from "axios";
import z from "zod";
import { signIn } from "next-auth/react";

interface ServerError {
  error: string;
}

interface ExtendedAxiosError extends AxiosError {
  response?: AxiosResponse<ServerError>;
}

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
  const [profileImage, setProfileImage] = useState("");

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
    gender: string,
    image: string
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
          image: image,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(async (_) => {
        await signIn("credentials", {
          username,
          password,
          callbackUrl: "/",
          redirect: true,
        });
      })
      .catch((error) => {
        setRegistrationError(
          (error as ExtendedAxiosError).response?.data!.error!
        );
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
    profileImage,
    setProfileImage,
  };
};

export type RegistrationFormStateType = {
  register: UseFormRegister<RegistrationFormSchema>;
  handleSubmit: UseFormHandleSubmit<RegistrationFormSchema>;
  reset: UseFormReset<RegistrationFormSchema>;
  errors: FieldErrors<RegistrationFormSchema>;
  fetchData: (
    username: string,
    email: string,
    password: string,
    birthDay: string,
    gender: string,
    image: string
  ) => void;
  years: number[];
  months: number[];
  days: number[];
  year: number;
  registrationError: string;
  profileImage: string;
  setProfileImage: React.Dispatch<React.SetStateAction<string>>;
};

export default useRegistrationForm;
