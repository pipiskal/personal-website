import Navigation from "./sections/Navigation/Navigation";
// import ShapesBackground from "./components/ShapesBackgound/ShapesBackground";
import TechSkillList from "./components/TechSkillList/TeckSkillList";
import styles from "./page.module.css";
import Hero from "./sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <div className={styles.blurryBackground} />

      {/* <ShapesBackground /> */}

      <div className={styles.page}>
        <Navigation />

        <Hero />

        <TechSkillList />
      </div>
    </>
  );
}
