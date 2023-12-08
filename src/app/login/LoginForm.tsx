"use client";

import React from "react";
import useLoginForm from "../custom_hooks/useLoginForm";
import Style from "./style.module.css";

const LoginForm = () => {
  const { register, errors, handleSubmit, handleLogin, error } = useLoginForm();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        handleLogin(data.username, data.password);
      })}
      className={Style.loginForm}
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
