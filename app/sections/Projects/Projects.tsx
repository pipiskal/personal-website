"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { JSX, useCallback, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import Link from "next/link";

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
      <div id="box1" className={styles.projectCard}>
        <div className={`${styles.blurryEffect} ${styles.blurryGreen}`} />

        <div className={styles.infoSection}>
          <div>
            <h3 className={styles.title}>
              Marketing template site with custom admin panel{" "}
            </h3>

            <h4 className={styles.description}>
              Achieved the main objective to appear first under google search.
              100% SEO using server side rendering leveraging Next.js
              capabilities. A fully custom admin panel to cover the customer
              future needs to manually change and add content.
            </h4>
          </div>

          <Link
            href={"https://glekashearing.gr/"}
            target="_blank"
            className={styles.viewCaseStudy}
          >
            View case
          </Link>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.projectImageWrapper}>
            <Image
              src="/glekasHearing.png"
              alt="showing a portfolio project"
              fill
              sizes="428px 270px"
            />
          </div>

          <div className={styles.techWrapper}>
            <h4 className={styles.technologyTitle}>Tech stack</h4>

            <p className={styles.techDescription}>
              Next js - MongoDB - Express
            </p>
          </div>
        </div>
      </div>

      <div
        id="box2"
        className={styles.projectCard}
        style={{
          top: 140,
        }}
      >
        <div className={`${styles.blurryEffect} ${styles.blurryPurple}`} />

        <div className={styles.infoSection}>
          <div>
            <h3 className={styles.title}>Marketing template site</h3>

            <h4 className={styles.description}>
              A multi page fully responsive design that represents all the basic
              needs a company needs to show off.
            </h4>
          </div>

          <Link
            href={"https://glekashearing.gr/"}
            target="_blank"
            className={styles.viewCaseStudy}
          >
            View case
          </Link>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.projectImageWrapper}>
            <Image
              src="/enospace.png"
              alt="showing a portfolio project"
              fill
              sizes="428px 270px"
            />
          </div>

          <div className={styles.techWrapper}>
            <h4 className={styles.technologyTitle}>Tech stack</h4>

            <p className={styles.techDescription}>Next js</p>
          </div>
        </div>
      </div>

      <div
        id="box3"
        className={styles.projectCard}
        style={{
          top: 180,
        }}
      >
        <div className={`${styles.blurryEffect} ${styles.blurryYellow}`} />

        <div className={styles.infoSection}>
          <div>
            <h3 className={styles.title}>PWA Management system and more</h3>

            <h4 className={styles.description}>
              A single page app that handles tennis court reservations. Finding
              matches between opponents that are registered. Book your
              reservation, Control your outcomes improve your play!
            </h4>
          </div>

          <Link
            href={"https://glekashearing.gr/"}
            target="_blank"
            className={styles.viewCaseStudy}
          >
            In Progress
          </Link>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.projectImageWrapper}>
            <Image
              src="/keletron.jpg"
              alt="showing a portfolio project"
              fill
              sizes="428px 270px"
            />
          </div>

          <div className={styles.techWrapper}>
            <h4 className={styles.technologyTitle}>Tech stack</h4>

            <p className={styles.techDescription}>
              Next js - MongoDB - Express - Tanstack Query - Zustand
            </p>
          </div>
        </div>
      </div>

      <div
        id="box4"
        className={styles.projectCard}
        style={{
          top: 220,
        }}
      >
        <div className={`${styles.blurryEffect} ${styles.blurryRed}`} />

        <div className={styles.infoSection}>
          <div>
            <h3 className={styles.title}>
              A mobile app that will find your next event for you
            </h3>

            <h4 className={styles.description}>
              Events is an upcoming mobile and web app using the power of React
              native and Next js so the users can find easily the next event
              they will visit near their preferred place.
            </h4>
          </div>

          <Link
            href={"https://glekashearing.gr/"}
            target="_blank"
            className={styles.viewCaseStudy}
          >
            View case
          </Link>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.projectImageWrapper}>
            <Image
              src="/events.jpg"
              alt="showing a portfolio project"
              fill
              sizes="428px 270px"
            />
          </div>

          <div className={styles.techWrapper}>
            <h4 className={styles.technologyTitle}>Tech stack</h4>

            <p className={styles.techDescription}>
              NX - Next js - React Native - MongoDB - Express
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
