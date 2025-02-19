import { JSX } from "react";
import styles from "./Experience.module.css";
import { EXPERIENCE } from "@/app/modules/constants";

const Experience = (): JSX.Element => {
  return (
    <div className={`${styles.wrapper} maxWrapper`}>
      <h2>Experience</h2>

      <div className={styles.experienceWrapper}>
        {EXPERIENCE.map((item) => {
          return (
            <div key={item.company} className={styles.row}>
              <span className={styles.techTitle}>{item.techRole}</span>

              <div className={styles.rightSideWrapper}>
                <span className={styles.companyTitle}>{item.company}</span>

                <div
                  className={`${styles.roleText} ${styles.companyDateWrapper}`}
                >
                  <span className={styles.roleText}>{item.startingDate}</span>-
                  <span className={styles.roleText}>{item.endingDate}</span>
                </div>

                <span className={styles.roleText}>{item.workplace}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
