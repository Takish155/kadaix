"use client";

import React, { useState } from "react";
import { UseUserInfoContext } from "../context/UserInfoContext";
import { useSession } from "next-auth/react";
import AccountNav from "./AccountNav";
import Link from "next/link";
import Style from "./Style.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const MobileNavBar = () => {
  const { isError, isLoading } = UseUserInfoContext() || {};
  const { status } = useSession();
  const [open, setOpen] = useState(false);

  if (status === "loading" || isLoading) {
    <span className="loader"></span>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <>
      <span onClick={() => setOpen(!open)}>
        <MenuIcon className={Style.menuIcon} />
      </span>
      <nav
        className={Style.mobileNav}
        style={{ display: open ? "flex" : "none" }}
      >
        <ul className={Style.unauthenticatedNav}>
          {status === "loading" && <span className="loader"></span>}
          {status === "authenticated" && <AccountNav />}
          {status === "unauthenticated" && (
            <ul className={Style.unauthenticatedNav}>
              <li>
                <Link href="/" onClick={() => setOpen(!open)}>
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/login" onClick={() => setOpen(!open)}>
                  ログイン
                </Link>
              </li>
              <li>
                <Link href="/register" onClick={() => setOpen(!open)}>
                  登録
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </>
  );
};

export default MobileNavBar;
