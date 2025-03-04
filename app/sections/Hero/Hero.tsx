import { JSX } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import ContactButton from "./ContactButton/ContactButton";
import DownloadCvButton from "./DownloadCvButton/DownloadCvButton";

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
        Software Developer creating efficient, scalable, and innovative
        solutions
      </p>

      <p className={styles.heroDescription}>
        {/* Experienced front-end developer specializing in creating responsive,
        clean, and user-friendly interfaces */}
        Experienced front-end developer translating complex needs into software
        solutions
      </p>

      <div className={styles.heroButtons}>
        <ContactButton />

        <DownloadCvButton />
      </div>
    </div>
  );
};

export default Hero;
