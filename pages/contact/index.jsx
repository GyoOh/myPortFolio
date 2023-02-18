import React, { useRef } from "react";
import styles from "./index.module.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import emailjs from "emailjs-com";
import Headder from "../../components/head";
const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6gt25a",
        "template_q64l05m",
        form.current,
        "PP8YAZk0lxHHwMF5_"
      )
      .then(
        result => {
          window.alert("Email sent successfully!");
          console.log(result.text);
        },
        error => {
          window.alert("Email failed to send.");
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section id="contact" className={styles.contact}>
        <h2>Contact Me</h2>

        <div
          className={`container ${styles.container} ${styles.contact__container}`}
        >
          <div className={styles.contact__options}>
            <article className={styles.contact__option}>
              <h4>Email</h4>
              <h5 className={styles.h5}>gwanggyooh@gmail.com</h5>
              <a href="mailto:gwanggyooh@gmail.com" target="_blank">
                Send a message
              </a>
            </article>
            <article className={styles.contact__option}>
              <AiOutlineLinkedin className={styles.contact__option_icon} />
              <h4>Linkedin</h4>
              <h5 className={styles.h5}>fullstack-gyooh</h5>
              <a
                href="https://www.linkedin.com/in/fullstack-gyooh/"
                target="_blank"
              >
                Send a message
              </a>
            </article>
            <article className={styles.contact__option}>
              <BsChatText className={styles.contact__option_icon} />
              <h4>Text</h4>
              <h5 className={styles.h5}>+1 778 863 2478</h5>
              <a href="sms:17788632478" target="_blank">
                Send a message
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form
            ref={form}
            className={styles.form__container}
            onSubmit={sendEmail}
          >
            <input
              className={styles.form__input}
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              className={styles.form__input}
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className={styles.form__textarea}
              name="message"
              rows="3"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
