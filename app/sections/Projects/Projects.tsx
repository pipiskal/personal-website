"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { JSX, useCallback, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import Link from "next/link";

const Projects = (): JSX.Element => {
  // const handleScroll = (cards: any, stickyOffset, maxScale) => {
  //   cards.forEach((card, index) => {
  //     const cardRect = card.getBoundingClientRect();
  //     const cardTop = cardRect.top; // Distance from the top of the viewport

  //     console.log("cardTop", cardTop, "index", index);

  //     // Check if the card has reached the sticky position
  //     if (cardTop > stickyOffset) {
  //       const scale = Math.max(1 - cardTop * 0.0001, 0.85);

  //       card.style.transform = `scale(${scale})`;
  //     }
  //     // else {
  //     //   // Reset the scale if the card is not at the sticky position
  //     //   card.style.transform = "scale(1)";
  //     // }

  //     // Enable scaling for the next card only if the current card has reached the sticky position
  //     // if (index < cards.length - 1) {
  //     //   const nextCard = cards[index + 1];
  //     //   const nextCardRect = nextCard.getBoundingClientRect();
  //     //   if (cardTop <= stickyOffset && nextCardRect.top > stickyOffset) {
  //     //     nextCard.style.position = "sticky";
  //     //     nextCard.style.top = `${stickyOffset}px`;
  //     //   }
  //     // }
  //   });
  // };

  // useEffect(() => {
  //   const cards = document.querySelectorAll(".card");
  //   const stickyOffset = 100; // Sticky position offset (100px from the top)
  //   const maxScale = 0.85; // Minimum scale value
  //   // const maxScroll = document.body.scrollHeight - window.innerHeight;

  //   window.addEventListener("scroll", () =>
  //     handleScroll(cards, stickyOffset, maxScale)
  //   );

  //   return () => {
  //     window.removeEventListener("scroll", () =>
  //       handleScroll(cards, stickyOffset, maxScale)
  //     );
  //   };
  // }, []);

  return (
    <div
      id="projectsWrapper"
      className={`${styles.projects} maxWrapper`}
      onScroll={(e) => console.log(e)}
    >
      <div id="box1" className={`${styles.projectCard} card`}>
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
        className={`${styles.projectCard} card`}
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
        className={`${styles.projectCard} card`}
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
        className={`${styles.projectCard} card`}
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
