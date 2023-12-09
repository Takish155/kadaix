import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./Provider";
import QueryProvider from "./context/QueryProvider";
import { UserInfoContextProvider } from "./context/UserInfoContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from "./header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KadaiX",
  description:
    "フロントエンドコーディング課題のウェブアプリケーションでございます",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpeedInsights />
        <AuthProvider>
          <QueryProvider>
            <UserInfoContextProvider>
              <NavBar />
              {children}
            </UserInfoContextProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
