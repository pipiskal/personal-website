import ShapesBackground from "./components/ShapesBackgound/ShapesBackground";
import TechSkillList from "./components/TechSkillList/TeckSkillList";
import styles from "./page.module.css";
import Hero from "./sections/Hero/Hero";
import SkillTagList from "./components/SkillTagList/SkillTagList";
import Experience from "./sections/Experience/Experience";

import Projects from "./sections/Projects/Projects";
import TechTagList from "./components/TechTagList/TechTagList";
import ContactDetails from "./sections/ContactDetails/ContactDetails";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.blurryBackground} />

      <ShapesBackground />

      {/* <Navigation /> */}

      <Hero />

      <TechSkillList />

      <Projects />

      {/* <Carousel /> */}

      <TechTagList />

      <Experience />

      <SkillTagList />

      <ContactDetails />
    </main>
  );
}
