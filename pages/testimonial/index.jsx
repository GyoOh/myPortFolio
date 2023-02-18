import React from "react";
import styles from "./index.module.css";
// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: "aboutme.jpeg",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolores aliquam voluptas incidunt.",
  },
  {
    avatar: "aboutme.jpeg",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolores aliquam voluptas incidunt.",
  },
  {
    avatar: "aboutme.jpeg",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolores aliquam voluptas incidunt.",
  },
];

function Education() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>testimonials</h2>

      <Swiper
        className={`container ${styles.container} ${styles.testimonials__container}`}
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className={styles.testimonials}>
            <div className={styles.client__avatar}>
              <img src={avatar} alt="name" />
            </div>
            <h5 className={styles.client__name}>{name}</h5>
            <small className={styles.client__review}>{review}</small>
          </SwiperSlide>
        ))}
        {/* <article className={styles.testimonials}>
          <div className={styles.client__avatar}>
            <img src="aboutme.jpeg" alt="client-1" />
          </div>
          <h5 className={styles.client__name}>Ernest Achiever</h5>
          <small className={styles.client__review}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            dolores aliquam voluptas incidunt.
          </small>
        </article>
        <article className={styles.testimonials}>
          <div className={styles.client__avatar}>
            <img src="aboutme.jpeg" alt="client-1" />
          </div>
          <h5 className={styles.client__name}>Ernest Achiever</h5>
          <small className={styles.client__review}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            dolores aliquam voluptas incidunt.
          </small>
        </article>
        <article className={styles.testimonials}>
          <div className={styles.client__avatar}>
            <img src="aboutme.jpeg" alt="client-1" />
          </div>
          <h5 className={styles.client__name}>Ernest Achiever</h5>
          <small className={styles.client__review}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            dolores aliquam voluptas incidunt.
          </small>
        </article> */}
      </Swiper>
    </section>
  );
}

export default Education;
