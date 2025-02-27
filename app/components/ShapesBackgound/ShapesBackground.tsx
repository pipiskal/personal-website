import { JSX } from "react";
import styles from "./ShapesBackground.module.css";

const ShapesBackground = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.shape} />
      <div className={styles.shape} />
      <div className={styles.shape} />
      <div className={styles.shape} />
      <div className={styles.shape} />
      <div className={styles.shape} />
      <div className={styles.shape} />
      <div className={styles.shape} />
    </div>
  );
};

export default ShapesBackground;
