import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import { RegistrationFormSchema } from "./registrationSchema";

export type FetchDataType = {
  username: string;
  email: string;
  password: string;
  birthDay: string;
  gender: string;
  image: string;
};

export type RegistrationFormStateType = {
  register: UseFormRegister<RegistrationFormSchema>;
  handleSubmit: UseFormHandleSubmit<RegistrationFormSchema>;
  reset: UseFormReset<RegistrationFormSchema>;
  errors: FieldErrors<RegistrationFormSchema>;
  fetchData: (data: FetchDataType) => void;
  years: number[];
  months: number[];
  days: number[];
  year: number;
  registrationError: string;
  profileImage: string;
  setProfileImage: React.Dispatch<React.SetStateAction<string>>;
};
