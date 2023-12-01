"use client";

import React from "react";
import styles from "./style.module.css";
import Birthday from "./Birthday";
import Link from "next/link";

const RegistrationForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="username" className="formLabel">
          ユーザID
        </label>
        <br />
        <input required type="text" id="username" className="input" />
      </div>
      <div>
        <label htmlFor="email" className="formLabel">
          メールアドレス
        </label>
        <br />
        <input required type="email" id="email" className="input" />
      </div>
      <div>
        <label htmlFor="password" className="formLabel">
          パスワード
        </label>
        <br />
        <input required type="password" id="password" className="input" />
      </div>
      <div>
        <label htmlFor="passwordAgain" className="formLabel">
          パスワードもう一度
        </label>
        <br />
        <input required type="password" id="passwordAgain" className="input" />
      </div>
      <Birthday />
      <div>
        <input
          type="checkbox"
          name="agreePolicy"
          id="agreePolicy"
          className={styles.policyCheckBox}
        />
        <label htmlFor="agreePolicy" className={styles.policy}>
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
      <button className="button" style={{ marginTop: "2rem" }}>
        登録
      </button>
    </form>
  );
};

export default RegistrationForm;
