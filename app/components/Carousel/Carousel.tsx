/* eslint-disable @next/next/no-img-element */
"use client";
import { JSX, useState } from "react";
import styles from "./Carousel.module.css";
// import Image from "next/image";

const items = [
  {
    header: "Canada",
    image: "/1.jpg",
    text: `Image description`,
  },
  {
    header: "New Zealand",
    image: "/2.jpg",
    text: `Image description`,
  },

  {
    header: "Indonesia",
    image: "/3.jpg",
    text: `Image description`,
  },
  {
    header: "Spain",
    image: "/4.jpg",
    text: `Image description`,
  },
];

const Carousel = (): JSX.Element => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.wrapper}>
      {/* <Image
        src={items[active].image}
        alt={"test"}
        fill
        className={styles.genericBackground}
        fetchPriority="high"
        priority
      /> */}

      {/* <div className={styles.genericBackground} /> */}

      <div className={styles.imageAccordion}>
        {items.map((item, index) => {
          const isActive = active === index;
          return (
            <div
              key={index}
              className={`${styles["image-accordion-item"]} ${
                isActive && `${styles.activeItem}`
              }`}
              onClick={() => setActive(index)}
            >
              <img
                src={item.image}
                alt={"test"}
                className={`${isActive ? styles.takis : styles.takis2}`}
              />

              {/* <div className={`${isActive && `${styles.text2}`}`}>
                  <h2>{item.header}</h2>
                  <p>{item.text}</p>
                </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
