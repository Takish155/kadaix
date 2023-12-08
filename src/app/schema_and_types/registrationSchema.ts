import { z } from "zod";

export const registrationSchema = z.object({
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
  birthYear: z.string().min(1, { message: "年を選んでください。" }),
  gender: z.enum(["male", "female"]),
});

export type RegistrationFormSchema = z.infer<typeof registrationSchema>;
