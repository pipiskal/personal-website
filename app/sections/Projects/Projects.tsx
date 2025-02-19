/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { JSX, useCallback, useEffect, useRef } from "react";
import styles from "./Projects.module.css";

const Projects = (): JSX.Element => {
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const thirdBox = useRef(null);
  const fourthBox = useRef(null);

  //   useEffect(() => {
  //     const scrollY = window?.scrollY;
  //     const projectWrapper =
  //       document.getElementById("projectsWrapper")?.scrollTop;

  //     console.log("scrollY", scrollY);
  //     console.log("projectWrapper", projectWrapper);
  //   }, []);

  // console.log("firstBox", firstBox.current?.scrollTop);

  // const handleScroll = (element: any) => {
  //   const position = window.pageYOffset;
  //   console.log("position", position);

  //   if (position > 800 && position < 1300) {
  //     firstBox.current?.setAttribute(
  //       "style",
  //       `scale : ${1 - position / 10000}`
  //     );
  //   }

  //   if (position > 1300 && position < 1800) {
  //     secondBox.current?.setAttribute(
  //       "style",
  //       `scale : ${1 - position / 40000}`
  //     );
  //   }

  //   if (position > 1800 && position < 2000) {
  //     thirdBox.current?.setAttribute(
  //       "style",
  //       `scale : ${1 - position * 0.00002}`
  //     );
  //   }

  //   // if (position > 2300 && position < 2300) {
  //   //   thirdBox.current?.setAttribute("style", `scale : ${1 - position / 8000}`);
  //   // }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   // const takis2 = document.getElementById("takis");

  //   return () => {
  //     window.removeEventListener("scroll", () => handleScroll(takis2));
  //   };
  // }, []);

  return (
    <div
      id="projectsWrapper"
      className={`${styles.projects} maxWrapper`}
      onScroll={(e) => console.log(e)}
    >
      <div id="box1" className={styles.projectCard1} ref={firstBox}>
        <div className={styles.blurryEffect} />
      </div>

      <div id="box2" className={styles.projectCard2} ref={secondBox}>
        <div className={styles.blurryEffect} />
      </div>
      <div id="box3" className={styles.projectCard3} ref={thirdBox} />

      <div id="box4" className={styles.projectCard4} ref={fourthBox} />
    </div>
  );
};

export default Projects;
