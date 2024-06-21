import React from "react";
import styles from "./Curriculum.module.css";

const ProficiencyCardJapanese = ({ level, lng, modules }) => (
  <div className={styles.container1}>
    
    {/* first card */}
    <div className={styles.header}>
      <p className={styles.title}>
        <span >JLPT: </span>
        The Japanese-Language Proficiency Test
      </p>
      <p className={styles.title}>
        <span >Purpose:</span> Standardizes
        description of {lng} language proficiency
      </p>
      <p className={styles.title}>
        A total of <strong>five levels</strong> being{" "}
        {/* <strong style={{ color: "#F4AD28" }}>N1, N2, N3, N4, N5</strong> */}
        <strong className={styles.nlistcolor}>N5, N4, N3, N2, N1</strong>
        , with N5 being the beginner level and N1 the most advanced.
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
          <hr className={styles.hrlinecss}/>

          {/* units - content */}
          {module.content.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default ProficiencyCardJapanese;
