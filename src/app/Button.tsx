"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const HeroButton = () => {
  const { status } = useSession();

  return (
    <div>
      {status === "loading" && <span className="loader"></span>}
      {status === "authenticated" && (
        <>
          <button onClick={() => signOut()}>サインアウト</button>
        </>
      )}
      {status === "unauthenticated" && (
        <>
          <button>
            <Link href="/login">ログイン</Link>
          </button>
          <button>
            <Link href="/register">登録</Link>
          </button>
        </>
      )}
    </div>
  );
};

export default HeroButton;
