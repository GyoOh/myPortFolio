import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import styles from "./index.module.css";
function HeaderSocial() {
  return (
    <div className={styles.header__socials}>
      <a href="https://www.linkedin.com/in/fullstack-gyooh/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/GyoOh" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}

export default HeaderSocial;
