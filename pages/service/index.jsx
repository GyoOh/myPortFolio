import React from "react";
import styles from "./index.module.css";
import { BsCheck } from "react-icons/bs";

function Services() {
  return (
    <section id="services" className={styles.services}>
      <h2>My Services</h2>
      <div
        className={`container ${styles.container} ${styles.services__container}`}
      >
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>UI/UX Design</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            {/* End of UI/UX */}
          </ul>
        </article>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Web Development</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            {/* End of Web Development*/}
          </ul>
        </article>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Content Creation</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className={styles.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            {/* End of Content Creation */}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
