"use client";

import { signOut } from "next-auth/react";
import { CldImage } from "next-cloudinary";
import React from "react";
import { UseUserInfoContext } from "../context/UserInfoContext";
import image from "../../../public/images/emptyImage.webp";
import Style from "./Style.module.css";
import Image from "next/image";

const AccountNav = () => {
  const context = UseUserInfoContext();

  if (!context) {
    return <span className="loader"></span>;
  }

  const { isError, data } = context;

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <nav className={Style.accountNav}>
      {data?.image.length === 0 && (
        <Image
          alt="Empty image"
          src={image}
          width={60}
          height={60}
          className={Style.profilePicture}
        />
      )}
      {data?.image.length !== 0 && (
        <CldImage
          src={data?.image!}
          alt="ユーザーのプロファイル"
          width={60}
          height={60}
          className={Style.profilePicture}
        />
      )}

      <div>
        <p>こんにちわ！</p>
        <h2 className={Style.username}>{data?.username}</h2>
      </div>
      <button className="button" onClick={() => signOut()}>
        サインアウト
      </button>
    </nav>
  );
};

export default AccountNav;
