import React from "react";
import NavBar from "../NavBar";
import styles from "./style.module.css";
import RegistrationForm from "./RegistrationForm";
import Footer from "../Footer";

const RegisterPage = () => {
  return (
    <>
      <NavBar page="register" />
      <main>
        <section className={styles.section}>
          <h2 className={styles.h2}>登録</h2>
          <RegistrationForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;
