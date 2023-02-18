import React from "react";
import styles from "./index.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2>My Experience</h2>

      <div
        className={`container ${styles.container} ${styles.experience__container}`}
      >
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>HTML</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>CSS</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Intermediated
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>Javascript</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>Bootstrap</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>Tailwind</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>React JS</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>Next JS</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}
        <div className={styles.experience__backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>Node JS</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                {" "}
                <h4>MySQL</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>Postgresql</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Intermediate
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>Prisma</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>Express</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                {" "}
                <h4>Next JS</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience_details_icon}
              />
              <div>
                <h4>PHP</h4>
                <small className={`text-light ${styles.text_light}`}>
                  Experienced
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
