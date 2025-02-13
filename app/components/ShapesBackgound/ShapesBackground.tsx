import { JSX } from "react";
import styles from "./ShapesBackground.module.css";

const ShapesBackground = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
    </div>
  );
};

export default ShapesBackground;
