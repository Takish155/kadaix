"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { useUserInfo } from "../custom_hooks/useUserInfo";
import { UserInfoStateType } from "../schema_and_types/useUserInfoType";

const UserInfoContext = createContext<UserInfoStateType | undefined>(undefined);

export const UserInfoContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const UserInfoState = useUserInfo();

  return (
    <UserInfoContext.Provider value={UserInfoState}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const UseUserInfoContext = () => {
  return useContext(UserInfoContext);
};
