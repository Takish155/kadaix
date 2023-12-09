"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import AccountNav from "./AccountNav";
import { usePathname } from "next/navigation";

const DesktopNavBar = () => {
  const { status } = useSession();
  const path = usePathname();

  return (
    <nav>
      {status === "loading" && <span className="loader"></span>}
      {status === "authenticated" && <AccountNav />}
      {status === "unauthenticated" && (
        <>
          <Link
            href="/"
            className={path === "home" ? "navLinkCurrent" : "navLink"}
          >
            ホーム
          </Link>
          <Link
            href="/login"
            className={path === "login" ? "navLinkCurrent" : "navLink"}
          >
            ログイン
          </Link>
          <Link
            href="/register"
            className={path === "register" ? "navLinkCurrent" : "navLink"}
          >
            登録
          </Link>
        </>
      )}
    </nav>
  );
};

export default DesktopNavBar;
