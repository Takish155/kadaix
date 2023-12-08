"use client";

import React, { useState } from "react";
import Style from "./style.module.css";
import Link from "next/link";
import ImageUpload from "./ImageUpload";
import { UseRegistrationFormContext } from "../context/RegistrationFormContext";

const RegistrationForm = () => {
  const context = UseRegistrationFormContext();
  const [agree, setAgree] = useState(false);
  const [imageError, setImageError] = useState("");

  if (!context) {
    return <p>Loading...</p>;
  }
  const {
    register,
    handleSubmit,
    errors,
    fetchData,
    days,
    years,
    months,
    registrationError,
    profileImage,
  } = context;
  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (profileImage.length === 0) {
          setImageError("プロファイルをはってくだっさい");
          return;
        }
        fetchData(
          data.username,
          data.email,
          data.password,
          `${data.birthYear}-${data.birthMonth}-${data.birthDay}`,
          data.gender,
          profileImage
        );
      })}
    >
      {registrationError && <p className="formError">{registrationError}</p>}
      <div>
        <label htmlFor="username" className="formLabel">
          ユーザID
        </label>
        <br />
        <input
          type="text"
          id="username"
          className="input"
          {...register("username", { required: true })}
        />
        {errors.username?.message && (
          <p className="inputError">{errors.username.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="formLabel">
          メールアドレス
        </label>
        <br />
        <input
          type="email"
          id="email"
          className="input"
          {...register("email", { required: true })}
        />
        {errors.email?.message && (
          <p className="inputError">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="formLabel">
          パスワード
        </label>
        <br />
        <input
          type="password"
          id="password"
          className="input"
          {...register("password", { required: true })}
        />
        {errors.password?.message && (
          <p className="inputError">{errors.password?.message}</p>
        )}
      </div>
      <div className={Style.birthDaySection}>
        <div className={Style.containerStyle}>
          <label htmlFor="birthday" className="formLabel">
            生年月日
          </label>
          <div>
            <br />
            <select className={Style.selectStyle} {...register("birthYear")}>
              <option value="a">年</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}年
                </option>
              ))}
            </select>
            {errors.birthYear?.message && (
              <p className="inputError">{errors.birthYear.message}</p>
            )}
          </div>
          <div>
            <select className={Style.selectStyle} {...register("birthMonth")}>
              <option value="">月</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}月
                </option>
              ))}
            </select>
            {errors.birthMonth?.message && (
              <p className="inputError">{errors.birthMonth.message}</p>
            )}
          </div>
          <div>
            <select className={Style.selectStyle} {...register("birthDay")}>
              <option value="">日</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}日
                </option>
              ))}
            </select>
            {errors.birthDay?.message && (
              <p className="inputError">{errors.birthDay.message}</p>
            )}
          </div>
        </div>
        <div className={Style.containerStyle}>
          <label htmlFor="gender" className="formLabel">
            性別
          </label>
          <select className={Style.selectStyle} {...register("gender")}>
            <option value="male">男性</option>
            <option value="female">女性</option>
          </select>
          {errors.gender?.message && (
            <p className="inputError">{errors.gender.message}</p>
          )}
        </div>
        <div>
          <label className="formLabel">プロフィール</label>
          <br />
          <ImageUpload />
          {imageError && <p className="inputError">{imageError}</p>}
        </div>
      </div>
      <div>
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="agreePolicy"
          id="agreePolicy"
          className={Style.policyCheckBox}
        />
        <label htmlFor="agreePolicy" className={Style.policy}>
          <span>KadaiX</span>
          への登録には、
          <Link
            href="https://menherasenpai.notion.site/457df49475494671807673a0a3346451"
            rel="noopener noreferrer"
            target="_blank"
          >
            規約
          </Link>
          および個人情報保護方針への同意が必要です
        </label>
      </div>
      {!agree && <p className="formError">規約を同意してください。</p>}
      <button
        className="button"
        style={{ marginTop: "2rem" }}
        disabled={!agree}
        type="submit"
      >
        登録
      </button>
    </form>
  );
};

export default RegistrationForm;
