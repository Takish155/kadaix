"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError, AxiosResponse } from "axios";
import { signIn } from "next-auth/react";
import {
  RegistrationFormSchema,
  registrationSchema,
} from "../schema_and_types/registrationSchema";

import { FetchDataType } from "../schema_and_types/useRegistrationFormType";

interface ServerError {
  error: string;
}

interface ExtendedAxiosError extends AxiosError {
  response?: AxiosResponse<ServerError>;
}

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

  const fetchData = async (data: FetchDataType) => {
    await axios
      .post(
        "../api/register",
        {
          username: data.username,
          email: data.email,
          password: data.password,
          birthDay: data.birthDay,
          gender: data.gender,
          image: data.image,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(async (_) => {
        await signIn("credentials", {
          username: data.username,
          password: data.password,
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

export default useRegistrationForm;
