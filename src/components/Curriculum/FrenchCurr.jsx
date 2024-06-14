import React from "react";
import styles from "./Curriculum.module.css";
import Carousel from "react-bootstrap/Carousel";

function FrenchCurr() {
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
      dark
      className={styles.carousel}
        // fade
        // interval={6000}
        controls={true}
        indicators={false}
        prevLabel={false}
        nextLabel={false}
        pause="hover"

        prevIcon={<span aria-hidden="true" className={`carousel-control-prev-icon ${styles.customControlIcon}`} />}
        nextIcon={<span aria-hidden="true" className={`carousel-control-next-icon ${styles.customControlIcon}`} />}

        // prevIcon={<span aria-hidden="true" className={`${styles.carousel-control-prev-icon} ${styles.changed}`} ></span>}
      >
        {/* A1 */}
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
              <div className={`${styles.module} ${styles.respbottomcard2}`}
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

        {/* A2 */}
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
                <h4>Parler du temps</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>La journée</p>
                <p>Décrire une personne</p>
                <p>À l’avenir</p>
              </div>

              {/* card 2 */}
              <div className={`${styles.module} ${styles.respbottomcard2}`}
              >
                <h3>
                  <strong>Module 2:</strong>
                </h3>
                <h4>Les événements dans le temps</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Parler des souvenirs</p>
                <p>Les émotions</p>
                <p>Les projets de l’avenir</p>
              </div>

              {/* card 3 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 3:</strong>
                </h3>
                <h4>L’argumentation</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Les dialogues du quotidien</p>
                <p>Consommer bien</p>
                <p>Notre choix</p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* B1 */}
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
            <div className={styles.cefrLevel}>CEFR - B1</div>

            {/* bottom cards */}
            <div className={styles.modules}>
              {/* card 1 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 1:</strong>
                </h3>
                <h4>S’épanouir</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Gagner le temps</p>
                <p>L’education : La nouvelle forme</p>
                <p>La technologie dans la vie quotidienne</p>
              </div>

              {/* card 2 */}
              <div className={`${styles.module} ${styles.respbottomcard2}`}
              >
                <h3>
                  <strong>Module 2:</strong>
                </h3>
                <h4>Le changement</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Comprendre de l’art</p>
                <p>Les étapes de la revolution</p>
                <p>Le travail ou la passion</p>
              </div>

              {/* card 3 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 3:</strong>
                </h3>
                <h4>L’histoire</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>La Francophonie</p>
                <p>Le patrimoine</p>
                <p>Comment Réagir</p>
              </div>
            </div>
          </div>
        </Carousel.Item>


        {/* B2 */}
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
            <div className={styles.cefrLevel}>CEFR - B2</div>

            {/* bottom cards */}
            <div className={styles.modules}>
              {/* card 1 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 1:</strong>
                </h3>
                <h4>Les sentiments</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Le bonheure</p>
                <p>Le monde change</p>
                <p>L’image : nécessaire ou pas ?</p>
              </div>

              {/* card 2 */}
              <div className={`${styles.module} ${styles.respbottomcard2}`}
              >
                <h3>
                  <strong>Module 2:</strong>
                </h3>
                <h4>La société</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>L’égalité</p>
                <p>La culture</p>
                <p>Le lux et le goût</p>
              </div>

              {/* card 3 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 3:</strong>
                </h3>
                <h4>La science</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>Nos appartenances</p>
                <p>Les recherches</p>
                <p>La santé et le génétique</p>
              </div>
            </div>
          </div>
        </Carousel.Item>


        {/* C1 */}
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
            <div className={styles.cefrLevel}>CEFR - C1</div>

            {/* bottom cards */}
            <div className={styles.modules}>
              {/* card 1 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 1:</strong>
                </h3>
                <h4>Les sentiments</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>L’education</p>
                <p>La famille</p>
                <p>La technologie</p>
              </div>

              {/* card 2 */}
              <div className={`${styles.module} ${styles.respbottomcard2}`}
              >
                <h3>
                  <strong>Module 2:</strong>
                </h3>
                <h4>La société</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>La structure social</p>
                <p>La santé</p>
                <p>Les droits humains</p>
              </div>

              {/* card 3 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 3:</strong>
                </h3>
                <h4>La science</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>La communication</p>
                <p>L’environnement</p>
                <p>Le travail</p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        
        {/* C2 */}
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
            <div className={styles.cefrLevel}>CEFR - C2</div>

            {/* bottom cards */}
            <div className={styles.modules}>
              {/* card 1 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 1:</strong>
                </h3>
                <h4>Les sentiments</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>L’environnement et le developpement</p>
                <p>Le travail</p>
                <p>L’education et la nouvelle génération</p>
              </div>

              {/* card 2 */}
              <div className={`${styles.module} ${styles.respbottomcard2}`}
              >
                <h3>
                  <strong>Module 2:</strong>
                </h3>
                <h4>La société</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>La famille et la société</p>
                <p>La technologie</p>
                <p>La structure social</p>
              </div>

              {/* card 3 */}
              <div className={styles.module}>
                <h3>
                  <strong>Module 3:</strong>
                </h3>
                <h4>La science</h4>
                <hr
                  style={{
                    borderBottom: "1px solid #F4AD28",
                  }}
                />
                <p>La santé et les nourritures</p>
                <p>Les droits humains</p>
                <p>La communication</p>
              </div>
            </div>
          </div>
        </Carousel.Item>


        {/* DELF */}
        {/* A1 */}
        



                  
      </Carousel>
    </>
  );
}

export default FrenchCurr;
