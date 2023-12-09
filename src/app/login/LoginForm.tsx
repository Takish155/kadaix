"use client";

import React from "react";
import useLoginForm from "../custom_hooks/useLoginForm";
import Style from "./style.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const {
    register,
    errors,
    handleSubmit,
    handleLogin,
    error,
    loading,
    setLoading,
  } = useLoginForm();
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <span className="loader"></span>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <>
      <h2 className={Style.h2}>ログイン</h2>
      <form
        onSubmit={handleSubmit((data) => {
          setLoading(true);
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
        {!loading ? (
          <button className="button" type="submit">
            ログイン
          </button>
        ) : (
          <span className="loader"></span>
        )}
      </form>
    </>
  );
};

export default LoginForm;
