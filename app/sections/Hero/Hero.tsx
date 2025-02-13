import { JSX } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = (): JSX.Element => {
  return (
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

        <div className={styles.avatarTag}>
          <div className={styles.greenFlashingCircle} />
          <span className={styles.openForWork}>OPEN FOR WORK</span>
        </div>
      </div>

      <p className={styles.heroText}>
        Passionate Software Engineer creating efficient, scalable, and
        innovative solutions
      </p>

      <p className={styles.heroDescription}>
        Experienced front-end developer specializing in creating responsive,
        clean, and user-friendly interfaces
      </p>

      <div className={styles.heroButtons}>
        <button className={styles.primaryButton}>Contact Akira</button>
        <button className={styles.secondaryButton}>Download CV</button>
      </div>
    </div>
  );
};

export default Hero;
