/* eslint-disable @typescript-eslint/no-unused-vars */
import Navigation from "./sections/Navigation/Navigation";
import ShapesBackground from "./components/ShapesBackgound/ShapesBackground";
import TechSkillList from "./components/TechSkillList/TeckSkillList";
import styles from "./page.module.css";
import Hero from "./sections/Hero/Hero";
import SkillTagList from "./components/SkillTagList/SkillTagList";
import Experience from "./sections/Experience/Experience";
import Image from "next/image";

import Carousel from "./components/Carousel/Carousel";
import Projects from "./sections/Projects/Projects";
import TechTagList from "./components/TechTagList/TechTagList";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.blurryBackground} />

      <ShapesBackground />

      <Navigation />

      <Hero />

      <TechSkillList />

      <Projects />

      {/* <Carousel /> */}

      <TechTagList />

      <Experience />

      <SkillTagList />
    </main>
  );
}
