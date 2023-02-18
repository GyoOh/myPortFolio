import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
function CTA() {
  return (
    <div className={styles.cta}>
      <Link href="cv.pdf">
        <a className="btn">Download CV</a>
      </Link>
      <Link href="/contact">
        <a className="btn btn-primary">Let's Talk</a>
      </Link>
    </div>
  );
}

export default CTA;
