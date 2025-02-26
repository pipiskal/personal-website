import { JSX } from "react";
import styles from "./Navigation.module.css";

const Navigation = (): JSX.Element => {
  return (
    <div className={`${styles.navigation} maxWrapper`}>
      <span className={styles.logo}>Ks</span>

      {/* <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>Work</li>
        <li className={styles.navigationItem}>Experience</li>
        <li className={styles.navigationItem}>FAQ</li>
        <li className={styles.navigationItem}>blog</li>
      </ul> */}
    </div>
  );
};

export default Navigation;
