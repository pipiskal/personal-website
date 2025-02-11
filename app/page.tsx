/* eslint-disable @typescript-eslint/no-explicit-any */
<button>Contact</button>;

import styles from "./page.module.css";
import TechSkill from "./components/TechSkill/TechSkill";
import Image from "next/image";

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

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.navigation}>
        <div>Ks</div>

        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>Work</li>
          <li className={styles.navigationItem}>Experience</li>
          <li className={styles.navigationItem}>FAQ</li>
          <li className={styles.navigationItem}>blog</li>
        </ul>
      </div>

      <div className={styles.hero}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>
            <Image
              src="/akiraFace.webp"
              alt="my dogs face. Its an akita!"
              width={76}
              height={100}
              quality={100}
              priority
            />
          </div>

          <div className={styles.avatarTag}>Software Engineer</div>
        </div>

        <p className={styles.heroText}>
          Developer that get things done. Save time and money
        </p>

        <p className={styles.heroDescription}>
          Helping startups and brands to craft expressive and engaging solutions
          for their software needs.
        </p>

        <div className={styles.heroButtons}>
          <button className={styles.primaryButton}>Contact Akira</button>
          <button className={styles.secondaryButton}>Download CV</button>
        </div>
      </div>

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

      <br />

      <br />

      <br />

      <div className={styles.techSkillsWrapper}>
        <div className={styles.marqueeTrack}>
          {TECH_SKILLS_ICON_NAMES.map((skillName: string) => (
            <TechSkill key={skillName} iconName={skillName as any} />
          ))}

          {TECH_SKILLS_ICON_NAMES.map((skillName: string) => (
            <TechSkill key={skillName} iconName={skillName as any} />
          ))}
        </div>
      </div>
    </div>
  );
}
