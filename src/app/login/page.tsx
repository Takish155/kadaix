import React from "react";
import LoginForm from "./LoginForm";
import styles from "./style.module.css";
import Footer from "../header/Footer";
import type { Metadata } from "next";

const LoginPage = () => {
  return (
    <>
      <main>
        <section className={styles.section}>
          <LoginForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;

export const metadata: Metadata = {
  title: "ログイン | KadaiX",
  description: "KadaiXのログインページです。",
};
