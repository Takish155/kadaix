import prisma from "@/../prisma/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

export const nextAuthOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials?.username === "" || credentials?.password === "") {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { username: credentials?.username },
          include: { accounts: true },
        });

        if (!user) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          credentials?.password!,
          user.hashedPassword
        );

        return passwordMatch ? { ...user, username: user.username } : null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};
