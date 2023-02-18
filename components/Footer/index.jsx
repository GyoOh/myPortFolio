import React from "react";
import styles from "./index.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <Link href="#" className={styles.footer__logo}>
        Gwanggyo Oh
      </Link> */}

      <ul className={styles.permalinks}>
        <li className={styles.link}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.link}>
          <Link href="/experience">Experience</Link>
        </li>
        <li className={styles.link}>
          <Link href="/services">Services</Link>
        </li>
        <li className={styles.link}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={styles.link}>
          <Link href="/testimonials">Testimonials</Link>
        </li>
        <li className={styles.link}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className={styles.footer__socials}>
        <Link href="https://facebook.com">
          <FaFacebookF />
        </Link>
        <Link href="https://instagram.com">
          <FiInstagram />
        </Link>
        <Link href="https://twitter.com">
          <FaTwitter />
        </Link>
      </div>

      <div className={styles.footer__copyright}>
        <small>&copy; Gwanggyo Oh. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
