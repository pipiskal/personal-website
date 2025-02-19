import { JSX } from "react";
import styles from "./TechSkillList.module.css";
import TechSkill from "./TechSkill/TechSkill";

const TechSkillList = (): JSX.Element => {
  const TECH_SKILLS_ICON_NAMES = [
    "ReactSvg",
    "CssSvg",
    "JavascriptSvg",
    "MongoDbSvg",
    "NextJsSvg",
    "TanstackSvg",
    "TypescriptSvg",
    "FigmaSvg",
    "HtmlSvg",
    "GraphqlSvg",
    "ZodSvg",
    "JtwSvg",
    // "ExpressJsSvg",
    // "NodeJsSvg",
  ] as const;

  return (
    <div className={`${styles.techSkillsWrapper} maxWrapper`}>
      <div className={styles.marqueeTrack}>
        {TECH_SKILLS_ICON_NAMES.map((skillName: string) => (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <TechSkill key={skillName} iconName={skillName as any} />
        ))}

        {TECH_SKILLS_ICON_NAMES.map((skillName: string) => (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <TechSkill key={skillName} iconName={skillName as any} />
        ))}
      </div>
    </div>
  );
};

export default TechSkillList;
