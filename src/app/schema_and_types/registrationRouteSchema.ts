import z from "zod";

export const registrationSchema = z.object({
  username: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(6),
  birthDay: z.string(),
  gender: z.enum(["male", "female"]),
});
