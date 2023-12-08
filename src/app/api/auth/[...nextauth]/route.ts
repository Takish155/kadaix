import NextAuth from "next-auth";
import { nextAuthOptions } from "./nextAuthOptions";

const getHandler = NextAuth(nextAuthOptions);
const postHandler = NextAuth(nextAuthOptions);

export { getHandler as GET, postHandler as POST };
