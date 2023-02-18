import React from "react";
import styles from "./index.module.css";
import CTA from "./cta";
import HeaderSocial from "./headerSocial";

function Header() {
  return (
    <header className={styles.header}>
      <div
        className={`container ${styles.container} ${styles.header__container}`}
      >
        <h5>Hello I'm</h5>
        <h1>Gwanggyo Oh</h1>
        <h5 className={styles.text_light}>Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className={styles.me}>
          <img src="gwanggyooh_BCIT.jpeg" alt="me" />
          {/* change my full name + attributes such as school */}
        </div>

        <a href="#contact" className={styles.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
