import React from "react";
import styles from "./index.module.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
const About = () => {
  return (
    <section
      id="about"
      className={
        styles.about
        // styles.about + "w-full md:h-screen p-2 flex items-center py-16"
      }
    >
      <h2>About me</h2>
      <div
        className={`container ${styles.container} ${styles.about__container}`}
      >
        <div className={styles.about__me}>
          <div className={styles.about__me__img}>
            <img src="./aboutme.jpeg" alt="about-me" />
          </div>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icon} />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae, voluptatum, quod, voluptas quibusdam voluptates quidem
          </p>

          {/* <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
