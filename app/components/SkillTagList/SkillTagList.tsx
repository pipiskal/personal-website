import { JSX } from "react";
import styles from "./SkillTagList.module.css";
import { SKILLS } from "@/app/modules/constants";
import SkillTag from "./SkillTag/SkillTag";

const SkillTagList = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h2>Skills</h2>

      <div className={styles.skillsWrapper}>
        {SKILLS.map((skill) => (
          <SkillTag key={skill} tagName={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillTagList;
