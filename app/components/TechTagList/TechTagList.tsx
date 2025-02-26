import { JSX } from "react";
import styles from "./TechTagList.module.css";
import { TECH_STACK } from "@/app/modules/constants";
import SkillTag from "../SkillTag/SkillTag";

const TechTagList = (): JSX.Element => {
  return (
    <div className={`${styles.wrapper} maxWrapper`}>
      <h2>Tech Stack</h2>

      <div className={styles.skillsWrapper}>
        {TECH_STACK.map((skill) => (
          <SkillTag key={skill} tagName={skill} />
        ))}
      </div>
    </div>
  );
};

export default TechTagList;
