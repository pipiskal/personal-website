import { JSX } from "react";
import styles from "./SkillTag.module.css";

type SkillTagProps = {
  tagName: string;
};

const SkillTag = ({ tagName }: SkillTagProps): JSX.Element => {
  return <div className={styles.wrapper}>{tagName}</div>;
};

export default SkillTag;
