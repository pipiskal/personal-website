"use client";

import { JSX } from "react";

import styles from "./ContactButton.module.css";

const ContactButton = (): JSX.Element => {
  const scroll = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const contact: any = document.querySelector("#contact-details");
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.snake} />

      <button className={styles.primaryButton} onClick={scroll}>
        Contact Me
      </button>
    </div>
  );
};

export default ContactButton;
