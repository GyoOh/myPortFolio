import React from "react";
import styles from "./index.module.css";

const data = [
  {
    id: 1,
    image: "emotion-diary.png",
    title: "This is a portfolio item title",
    github: "https://github.com/GyoOh/emotion-diary",
    demo: "https://dribbble.com/shots/20277172-Emotion-diary",
  },
  {
    id: 2,
    image: "emotion-diary.png",
    title: "This is a portfolio item title",
    github: "https://github.com/GyoOh/emotion-diary",
    demo: "https://dribbble.com/shots/20277172-Emotion-diary",
  },
  {
    id: 3,
    image: "emotion-diary.png",
    title: "This is a portfolio item title",
    github: "https://github.com/GyoOh/emotion-diary",
    demo: "https://dribbble.com/shots/20277172-Emotion-diary",
  },
  {
    id: 4,
    image: "emotion-diary.png",
    title: "This is a portfolio item title",
    github: "https://github.com/GyoOh/emotion-diary",
    demo: "https://dribbble.com/shots/20277172-Emotion-diary",
  },
  {
    id: 5,
    image: "emotion-diary.png",
    title: "This is a portfolio item title",
    github: "https://github.com/GyoOh/emotion-diary",
    demo: "https://dribbble.com/shots/20277172-Emotion-diary",
  },
];

function Project() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>My Recent Work</h2>

      <div
        className={`container ${styles.container} ${styles.portfolio__container}`}
      >
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className={styles.portfolio__item}>
            <div className={styles.portfolio__item__img}>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className={styles.portfolio__item_cta}>
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}

        {/* <article className={styles.portfolio__item}>
          <div className={styles.portfolio__item__img}>
            <img src="aboutme.jpeg" alt="portfolio" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={styles.portfolio__item_cta}>
            <a href="https://www.google.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://www.google.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={styles.portfolio__item}>
          <div className={styles.portfolio__item__img}>
            <img src="aboutme.jpeg" alt="portfolio" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={styles.portfolio__item_cta}>
            <a href="https://www.google.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://www.google.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={styles.portfolio__item}>
          <div className={styles.portfolio__item__img}>
            <img src="aboutme.jpeg" alt="portfolio" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={styles.portfolio__item_cta}>
            <a href="https://www.google.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://www.google.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={styles.portfolio__item}>
          <div className={styles.portfolio__item__img}>
            <img src="aboutme.jpeg" alt="portfolio" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={styles.portfolio__item_cta}>
            <a href="https://www.google.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://www.google.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={styles.portfolio__item}>
          <div className={styles.portfolio__item__img}>
            <img src="aboutme.jpeg" alt="portfolio" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={styles.portfolio__item_cta}>
            <a href="https://www.google.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://www.google.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default Project;
