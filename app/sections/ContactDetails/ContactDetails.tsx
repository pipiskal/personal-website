"use client";
import Link from "next/link";

import { JSX, useState } from "react";
import styles from "./ContactDetails.module.css";

const ContactDetails = (): JSX.Element => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  return (
    <div id="contact-details" className={styles.wrapper}>
      <p>Contact Details : </p>

      <div
        style={{
          position: "relative",
        }}
        onClick={() => {
          navigator.clipboard.writeText("kalimerisspyros@gmail.com");

          setIsEmailCopied(true);

          setTimeout(() => {
            setIsEmailCopied(false);
          }, 3000);
        }}
      >
        <span
          className={`${styles.tooltip} ${
            isEmailCopied && styles.tooltipVisible
          }`}
        >
          Email copied!
        </span>

        <span
          style={{
            cursor: "pointer",
          }}
        >
          kalimerisspyros@gmail.com
        </span>
      </div>

      <Link
        href="https://www.linkedin.com/in/spyros-kalimeris-b11aab172/?originalSubdomain=gr"
        target="_blank"
      >
        Linkedin
      </Link>
    </div>
  );
};

export default ContactDetails;
