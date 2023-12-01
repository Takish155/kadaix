import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="username" className="formLabel">
          ユーザID
        </label>
        <br />
        <input
          required
          type="text"
          id="username"
          className="input"
          style={{ maxWidth: "20rem" }}
        />
      </div>
      <div>
        <label htmlFor="password" className="formLabel">
          パスワード
        </label>
        <br />
        <input
          required
          type="password"
          id="password"
          className="input"
          style={{ maxWidth: "20rem" }}
        />
      </div>
      <button className="button" type="submit">
        ログイン
      </button>
    </form>
  );
};

export default LoginForm;
