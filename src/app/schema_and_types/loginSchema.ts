import { z } from "zod";

export const schema = z.object({
  username: z.string().min(6, { message: "正しいユーザIDを入力してください" }),
  password: z
    .string()
    .min(6, { message: "正しいパスワードを入力してください" })
    .max(20, { message: "正しいパスワードを入力してください" }),
});

export type TransactionFormData = z.infer<typeof schema>;
