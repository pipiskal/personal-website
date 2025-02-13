/* eslint-disable @typescript-eslint/no-unused-vars */
import Navigation from "./sections/Navigation/Navigation";
import ShapesBackground from "./components/ShapesBackgound/ShapesBackground";
import TechSkillList from "./components/TechSkillList/TeckSkillList";
import styles from "./page.module.css";
import Hero from "./sections/Hero/Hero";
import SkillTagList from "./components/SkillTagList/SkillTagList";
import Experience from "./sections/Experience/Experience";
import Image from "next/image";

import { useState } from "react";
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
  // console.log("active", active);

  return (
    <main className={styles.mainWrapper}>
      <div className={styles.blurryBackground} />

      <ShapesBackground />

      <div className={styles.page}>
        <Navigation />

        <Hero />

        <TechSkillList />

        <Carousel />

        <SkillTagList />

        <Experience />
      </div>
    </main>
  );
}
