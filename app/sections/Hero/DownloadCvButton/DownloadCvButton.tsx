"use client";

import Link from "next/link";
import { JSX } from "react";

import styles from "./DownloadCvButton.module.css";

const DownloadCvButton = (): JSX.Element => {
  return (
    <Link
      download
      href="/KALIMERIS_SPYROS_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.secondaryButton}
    >
      Download CV
    </Link>
  );
};

export default DownloadCvButton;
