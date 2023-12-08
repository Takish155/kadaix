"use client";

import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export type UserInfoDataType = {
  id: string;
  name: string;
  email: string;
  username: string;
  birthday: string;
  gender: string;
  image: string;
  info: string;
  createdAt: string;
};

export type FetchUserInfoDataType = {
  user: UserInfoDataType;
};

export const useUserInfo = () => {
  const { data: session, status } = useSession();
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [status, session]);

  const fetchData = async () => {
    try {
      const response = await axios.post<FetchUserInfoDataType>(
        "../api/user/info",
        {
          email: session?.user?.email,
        }
      );
      return response.data.user;
    } catch (err) {
      throw new Error((err as AxiosError).message);
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["userInfo", enable],
    queryFn: fetchData,
    enabled: enable,
  });

  return { data, isLoading, isError };
};

export type UserInfoStateType = {
  data: UserInfoDataType | undefined;
  isLoading: boolean;
  isError: boolean;
};
