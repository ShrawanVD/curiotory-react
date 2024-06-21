import React from "react";
import styles from "./Curriculum.module.css";

const ProficiencyLevelCard = ({ level, lng, modules }) => (
  <div className={styles.container1}>
    
    {/* first card */}
    <div className={styles.header}>
      <p className={styles.title}>
        <span >CEFRL: </span>
        Common European Framework of Reference for Languages
      </p>
      <p className={styles.title}>
        <span >Purpose:</span> Standardizes
        description of {lng} language proficiency
      </p>
      <p className={styles.title}>
        A total of <strong>six levels</strong> being{" "}
        <strong className={styles.nlistcolor}>A1, A2, B1, B2, C1, and C2</strong>
        , with A1 being the beginner level and C2 the most advanced.
      </p>
      <p className={styles.title}>
        Our {lng} course focus on developing all{" "}
        <strong>four key skills:</strong>
        <span className={styles.keySkills}>
          {" "}
          Speaking, Reading, Writing, and Listening.
        </span>
      </p>
    </div>

    {/* level text */}
    <div className={styles.cefrLevel}>CEFR - {level}</div>

    {/* proficiency cards */}
    <div className={styles.modules}>
      {modules.map((module, index) => (
        <div
          key={index}
          className={`${styles.module} ${
            modules.length === 3 && index === 1 ? styles.respbottomcard2 : ""
          }`}
        >
          <h3>
            <strong>Module {index + 1}:</strong>
          </h3>

          {/* title */}
          <h4>{module.title}</h4>
          <hr className={styles.hrlinecss} />

          {/* units - content */}
          {module.content.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default ProficiencyLevelCard;
