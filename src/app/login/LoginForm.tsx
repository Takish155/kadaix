"use client";

import React, { useState } from "react";
import useLoginForm from "./useLoginForm";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { register, errors, handleSubmit, handleLogin, error } = useLoginForm();
  const router = useRouter();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        handleLogin(data.username, data.password);
      })}
    >
      {error && <p className="formError">{error}</p>}
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
          style={{ maxWidth: "20rem" }}
        />
        {errors.username?.message && (
          <p className="inputError">{errors.username.message}</p>
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
          style={{ maxWidth: "20rem" }}
        />
        {errors.password?.message && (
          <p className="inputError">{errors.password.message}</p>
        )}
      </div>
      <button className="button" type="submit">
        ログイン
      </button>
    </form>
  );
};

export default LoginForm;
