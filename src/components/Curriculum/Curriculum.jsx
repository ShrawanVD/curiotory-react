import React from "react";
import styles from "./Curriculum.module.css";
import Carousel from "react-bootstrap/Carousel";

function Curriculum() {
  return (
    <>
      <div className={styles.head}>
        <h3
          style={{
            textDecoration: "underline",
          }}
        >
          Curriculum
        </h3>
        <a target="_blank" href="https://drive.google.com/file/d/1ax_-BPiedYzBhqUmVW7WzyfKEf5KH3qj/view?usp=sharing">
          <button><strong>Download <br />Curriculum</strong></button>
        </a>
      </div>

      <Carousel
      className={styles.carousel}
        fade
        interval={6000}
        controls={true}
        indicators={false}
        prevLabel={false}
        nextLabel={false}


        // prevIcon={<span aria-hidden="true" className={`${styles.carousel-control-prev-icon} ${styles.changed}`} ></span>}
      >
        {/* 1st item */}
        <Carousel.Item>
          <div className={styles.container1}>
            {/* first card */}
            <div className={styles.header}>
              {/* 1st line */}
              <p className={styles.title}>
                <span
                  style={{
                    color: "#EF4B2B",
                  }}
                >
                  CEFRL:{" "}
                </span>
                Common European Framework of Reference for Languages
              </p>

              {/* 2nd line */}
              <p className={styles.title}>
                <span
                  style={{
                    color: "#EF4B2B",
                  }}
                >
                  Purpose:
                </span>{" "}
                Standardizes description of French language proficiency
              </p>

              {/* 3rd line */}
              <p className={styles.title}>
                A total of <strong>six levels</strong> being{" "}
                <strong
                  style={{
                    color: "#F4AD28",
                  }}
                >
                  A1, A2, B1, B2, C1, and C2
                </strong>
                , with A1 being the beginner level and C2 the most advanced.
              </p>

              {/* 4th line */}
              <p className={styles.title}>
                Our French courses focus on developing all{" "}
                <strong>four key skills:</strong>{" "}
                <span className={styles.keySkills}>
                  Speaking, Reading, Writing, and Listening.
                </span>
              </p>
            </div>

            {/* text betn */}
            <div className={styles.cefrLevel}>CEFR - A1</div>

            {/* bottom cards */}
            <div className={styles.modules}>
              {/* card 1 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 1:</strong>
                </h3>
                <h4>Parler de soi-même</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Les Salutations</p>
                <p>Se Présenter</p>
                <p>S'exprimer</p>
              </div>

              {/* card 2 */}
              <div
                className={styles.module}
                style={{
                  margin: "0 1rem",
                }}
              >
                <h3>
                  <strong>Module 2:</strong>
                </h3>
                <h4>Faire la communication</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Demander à quelqu'un</p>
                <p>L'invitation</p>
                <p>Faire du shopping</p>
              </div>

              {/* card 3 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 3:</strong>
                </h3>
                <h4>Se situer dans l'espace</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Parler de l'itinéraire</p>
                <p>Comprendre les instructions</p>
                <p>Décrire un lieu</p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* 2md item */}
        <Carousel.Item>
          <div className={styles.container1}>
            {/* first card */}
            <div className={styles.header}>
              {/* 1st line */}
              <p className={styles.title}>
                <span
                  style={{
                    color: "#EF4B2B",
                  }}
                >
                  CEFRL:{" "}
                </span>
                Common European Framework of Reference for Languages
              </p>

              {/* 2nd line */}
              <p className={styles.title}>
                <span
                  style={{
                    color: "#EF4B2B",
                  }}
                >
                  Purpose:
                </span>{" "}
                Standardizes description of French language proficiency
              </p>

              {/* 3rd line */}
              <p className={styles.title}>
                A total of <strong>six levels</strong> being{" "}
                <strong
                  style={{
                    color: "#F4AD28",
                  }}
                >
                  A1, A2, B1, B2, C1, and C2
                </strong>
                , with A1 being the beginner level and C2 the most advanced.
              </p>

              {/* 4th line */}
              <p className={styles.title}>
                Our French courses focus on developing all{" "}
                <strong>four key skills:</strong>{" "}
                <span className={styles.keySkills}>
                  Speaking, Reading, Writing, and Listening.
                </span>
              </p>
            </div>

            {/* text betn */}
            <div className={styles.cefrLevel}>CEFR - A2</div>

            {/* bottom cards */}
            <div className={styles.modules}>
              {/* card 1 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 1:</strong>
                </h3>
                <h4>Parler de soi-même</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Les Salutations</p>
                <p>Se Présenter</p>
                <p>S'exprimer</p>
              </div>

              {/* card 2 */}
              <div
                className={styles.module}
                style={{
                  margin: "0 1rem",
                }}
              >
                <h3>
                  <strong>Module 2:</strong>
                </h3>
                <h4>Faire la communication</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Demander à quelqu'un</p>
                <p>L'invitation</p>
                <p>Faire du shopping</p>
              </div>

              {/* card 3 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 3:</strong>
                </h3>
                <h4>Se situer dans l'espace</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Parler de l'itinéraire</p>
                <p>Comprendre les instructions</p>
                <p>Décrire un lieu</p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* 3rd item */}
        <Carousel.Item>
          <div className={styles.container1}>
            {/* first card */}
            <div className={styles.header}>
              {/* 1st line */}
              <p className={styles.title}>
                <span
                  style={{
                    color: "#EF4B2B",
                  }}
                >
                  CEFRL:{" "}
                </span>
                Common European Framework of Reference for Languages
              </p>

              {/* 2nd line */}
              <p className={styles.title}>
                <span
                  style={{
                    color: "#EF4B2B",
                  }}
                >
                  Purpose:
                </span>{" "}
                Standardizes description of French language proficiency
              </p>

              {/* 3rd line */}
              <p className={styles.title}>
                A total of <strong>six levels</strong> being{" "}
                <strong
                  style={{
                    color: "#F4AD28",
                  }}
                >
                  A1, A2, B1, B2, C1, and C2
                </strong>
                , with A1 being the beginner level and C2 the most advanced.
              </p>

              {/* 4th line */}
              <p className={styles.title}>
                Our French courses focus on developing all{" "}
                <strong>four key skills:</strong>{" "}
                <span className={styles.keySkills}>
                  Speaking, Reading, Writing, and Listening.
                </span>
              </p>
            </div>

            {/* text betn */}
            <div className={styles.cefrLevel}>CEFR - A3</div>

            {/* bottom cards */}
            <div className={styles.modules}>
              {/* card 1 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 1:</strong>
                </h3>
                <h4>Parler de soi-même</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Les Salutations</p>
                <p>Se Présenter</p>
                <p>S'exprimer</p>
              </div>

              {/* card 2 */}
              <div
                className={styles.module}
                style={{
                  margin: "0 1rem",
                }}
              >
                <h3>
                  <strong>Module 2:</strong>
                </h3>
                <h4>Faire la communication</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Demander à quelqu'un</p>
                <p>L'invitation</p>
                <p>Faire du shopping</p>
              </div>

              {/* card 3 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 3:</strong>
                </h3>
                <h4>Se situer dans l'espace</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Parler de l'itinéraire</p>
                <p>Comprendre les instructions</p>
                <p>Décrire un lieu</p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <a class="carousel-control-next" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-next-icon"></span></a>


                  
      </Carousel>
    </>
  );
}

export default Curriculum;
