import React from "react";
import styles from "./style.module.css";
import RegistrationForm from "./RegistrationForm";
import Footer from "../header/Footer";
import { RegistrationFormContextProvider } from "../context/RegistrationFormContext";
import type { Metadata } from "next";

const RegisterPage = () => {
  return (
    <>
      <RegistrationFormContextProvider>
        <main>
          <section className={styles.section}>
            <h2 className={styles.h2}>登録</h2>
            <RegistrationForm />
          </section>
        </main>
        <Footer />
      </RegistrationFormContextProvider>
    </>
  );
};

export default RegisterPage;

export const metadata: Metadata = {
  title: "登録 | KadaiX",
  description: "KadaiXの登録ページです。",
};
