"use client";

import React, { createContext, ReactNode, useContext } from "react";
import useRegistrationForm, {
  RegistrationFormStateType,
} from "../custom_hooks/useRegistrationForm";

const RegistrationFormContext = createContext<
  RegistrationFormStateType | undefined
>(undefined);

export const RegistrationFormContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const RegistrationFormState = useRegistrationForm();

  return (
    <RegistrationFormContext.Provider value={RegistrationFormState}>
      {children}
    </RegistrationFormContext.Provider>
  );
};

export const UseRegistrationFormContext = () => {
  return useContext<RegistrationFormStateType | undefined>(
    RegistrationFormContext
  );
};
