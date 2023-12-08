"use client";

import React from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { UseRegistrationFormContext } from "../context/RegistrationFormContext";
import Style from "./style.module.css";

type Cloudinary = {
  public_id: string;
};

const ImageUpload = () => {
  const context = UseRegistrationFormContext();

  if (!context) {
    return <span className="loader"></span>;
  }
  const { setProfileImage, profileImage } = context;

  return (
    <>
      {profileImage && (
        <CldImage
          src={profileImage}
          alt="Profile image"
          width={"100"}
          height={"100"}
          className={Style.profileImage}
        />
      )}
      <CldUploadWidget
        uploadPreset="lm2wgjbz"
        options={{
          sources: ["local"],
          multiple: false,
          maxFileSize: 1000000,
          language: "ja",
        }}
        onUpload={(result, _) => {
          if (result.event !== "success") return;
          const info = result.info as Cloudinary;
          setProfileImage(info.public_id);
        }}
      >
        {({ open }) => (
          <button
            type="button"
            className="button"
            style={{ width: "60%", marginTop: "1rem" }}
            onClick={() => open()}
          >
            画像をアップロードする
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default ImageUpload;
