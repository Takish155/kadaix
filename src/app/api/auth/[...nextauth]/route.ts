import prisma from "@/../prisma/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { nextAuthOptions } from "./nextAuthOptions";

const getHandler = NextAuth(nextAuthOptions);
const postHandler = NextAuth(nextAuthOptions);

export { getHandler as GET, postHandler as POST };
