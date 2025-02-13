import Navigation from "./sections/Navigation/Navigation";
import ShapesBackground from "./components/ShapesBackgound/ShapesBackground";
import TechSkillList from "./components/TechSkillList/TeckSkillList";
import styles from "./page.module.css";
import Hero from "./sections/Hero/Hero";
import SkillTagList from "./components/SkillTagList/SkillTagList";
import Experience from "./sections/Experience/Experience";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.blurryBackground} />

      <ShapesBackground />

      <div className={styles.page}>
        <Navigation />

        <Hero />

        <TechSkillList />

        <SkillTagList />

        <Experience />
      </div>
    </main>
  );
}
