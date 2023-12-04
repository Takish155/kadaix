"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = ({ page }: { page: string }) => {
  const { status } = useSession();
  return (
    <header>
      <div>
        <h1>KadaiX</h1>
      </div>
      <nav>
        <Link
          href="/"
          className={page === "home" ? "navLinkCurrent" : "navLink"}
        >
          ホーム
        </Link>
        {status === "unauthenticated" ? (
          <>
            <Link
              href="/login"
              className={page === "login" ? "navLinkCurrent" : "navLink"}
            >
              ログイン
            </Link>
            <Link
              href="/register"
              className={page === "register" ? "navLinkCurrent" : "navLink"}
            >
              登録
            </Link>
          </>
        ) : (
          <Link href="" onClick={() => signOut()} className="navLink">
            Sign Out
          </Link>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
