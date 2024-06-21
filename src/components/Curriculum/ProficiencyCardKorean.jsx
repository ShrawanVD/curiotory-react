import React from "react";
import styles from "./Curriculum.module.css";

const ProficiencyCardKorean = ({ level, lng, modules }) => (
  <div className={styles.container1}>
    
    {/* first card */}
    <div className={styles.header}>
      <p className={styles.title}>
        <span >TOPIK: </span>
        The Test of Proficiency in Korean
      </p>
      <p className={styles.title}>
        <span >Purpose:</span> Standardizes
        description of {lng} language proficiency
      </p>
      <p className={styles.title}>
        A total of <strong>six levels</strong> being{" "}
        <strong className={styles.nlistcolor}>TOPIK 1, TOPIK 2, TOPIK 3, TOPIK 4, TOPIK 5, TOPIK 6</strong>
        , with TOPIK 1 being the beginner level and TOPIK 6 the most advanced.
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
    <div className={styles.cefrLevel}>{level}</div>

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

export default ProficiencyCardKorean;
