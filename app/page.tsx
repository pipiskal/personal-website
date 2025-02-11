/* eslint-disable @typescript-eslint/no-explicit-any */
// import Image from "next/image";
import styles from "./page.module.css";
// import Icon from "./components/Icon/Icon";
import TechSkill from "./components/TechSkill/TechSkill";
import Image from "next/image";

const TECH_SKILLS_ICON_NAMES = [
  "ReactSvg",
  "CssSvg",
  "ExpressJsSvg",
  "JavascriptSvg",
  "MongoDbSvg",
  "NextJsSvg",
  "TanstackSvg",
  "TypescriptSvg",
  "FigmaSvg",
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
          Designed for Designers to showcase their work
        </p>

        <p>
          Helping startups and brands to craft expressive and engaging solutions
          for their software needs.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        {/* <div className={styles.shape}></div> */}
        {/* <div className={styles.shape}></div> */}
        {/* <div className={styles.shape}></div> */}
        {/* <div className={styles.shape}></div> */}
      </div>

      <br />

      <br />

      <br />

      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            gap: 46,
          }}
        >
          {TECH_SKILLS_ICON_NAMES.map((skillName: string) => (
            <TechSkill key={skillName} iconName={skillName as any} />
          ))}
        </div>
      </main>
    </div>
  );
}
