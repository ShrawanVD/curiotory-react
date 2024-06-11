import React from "react";
import styles from "./Curriculum.module.css";

function Curriculum() {
  return (
    <div className={styles.container}>

        {/* first card */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          CEFRL:
          <span className={styles.cefrlText}>
            Common European Framework of Reference for Languages
          </span>
        </h2>
        <p>
          <strong>Purpose:</strong> Standardizes description of French language
          proficiency
        </p>
        <p>
          A total of <strong>six levels</strong> being{" "}
          <strong style={{
            color:"#F4AD28"
          }}>A1, A2, B1, B2, C1, and C2</strong>, with A1 being the
          beginner level and C2 the most advanced.
        </p>
        <p>
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
          <h3>Module 1:</h3>
          <h4>Parler de soi-même</h4>
          <hr />
          <p>Les Salutations</p>
          <p>Se Présenter</p>
          <p>S'exprimer</p>
        </div>

        {/* card 2 */}
        <div className={styles.module}>
          <h3>Module 2:</h3>
          <h4>Faire la communication</h4>
          <hr />
          <p>Demander à quelqu'un</p>
          <p>L'invitation</p>
          <p>Faire du shopping</p>
        </div>

        {/* card 3 */}
        <div className={styles.module}>
          <h3>Module 3:</h3>
          <h4>Se situer dans l'espace</h4>
          <hr />
          <p>Parler de l'itinéraire</p>
          <p>Comprendre les instructions</p>
          <p>Décrire un lieu</p>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
