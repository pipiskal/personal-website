import { JSX } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";

const Hero = (): JSX.Element => {
  return (
    <div className={`${styles.hero} maxWrapper`}>
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
        {/* Experienced front-end developer specializing in creating responsive,
        clean, and user-friendly interfaces */}
        Experienced front-end developer translating complex needs into software
        solutions
      </p>

      <Link
        href="mailto:kalimerisspyros@gmail.com"
        className={styles.heroButtons}
      >
        <div className={styles.contactWrapper}>
          <div className={styles.snake} />
          <button className={styles.primaryButton}>Contact Me</button>
        </div>

        <button className={styles.secondaryButton}>Download CV</button>
      </Link>
    </div>
  );
};

export default Hero;
