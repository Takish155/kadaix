"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import AccountNav from "./AccountNav";

const DesktopNavBar = () => {
  const { status } = useSession();

  return (
    <nav>
      {status === "loading" && <span className="loader"></span>}
      {status === "authenticated" && <AccountNav />}
      {status === "unauthenticated" && (
        <>
          <Link href="/" className="navLink">
            ホーム
          </Link>
          <Link href="/login" className="navLink">
            ログイン
          </Link>
          <Link href="/register" className="navLink">
            登録
          </Link>
        </>
      )}
    </nav>
  );
};

export default DesktopNavBar;
