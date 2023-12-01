import React from "react";
import NavBar from "../NavBar";
import LoginForm from "./LoginForm";
import styles from "./style.module.css";
import Footer from "../Footer";

const LoginPage = () => {
  return (
    <>
      <NavBar page="login" />
      <main>
        <section className={styles.section}>
          <h2 className={styles.h2}>ログイン</h2>
          <LoginForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
