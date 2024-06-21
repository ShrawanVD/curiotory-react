import React from "react";
import styles from "./Curriculum.module.css";

const ProficiencyCardMand = ({ level, lng, modules }) => (
  <div className={styles.container1}>
    
    {/* first card */}
    <div className={styles.header}>
      <p className={styles.title}>
        <span >HSK: </span>
        The Hanyu Shuiping Kaoshi, translated as the Chinese Proficiency Test
      </p>
      <p className={styles.title}>
        <span >Purpose:</span> Standardizes
        description of {lng} language proficiency
      </p>
      <p className={styles.title}>
        A total of <strong>six levels</strong> being{" "}
        <strong className={styles.nlistcolor}>HSK 1, HSK 2, HSK 3, HSK 4, HSK 5, HSK 6</strong>
        , with HSK 1 being the beginner level and HSK 6 the most advanced.
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
    <div className={styles.cefrLevel}>HSK - {level}</div>

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

export default ProficiencyCardMand;
