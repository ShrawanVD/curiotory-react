import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProficiencyLevelCard from "./ProficiencyLevelCard";
import styles from "./Curriculum.module.css";

const proficiencyData = [
  // A1
  {
    level: "A1",
    lng: "French",
    modules: [
      {
        title: "Parler de soi-même",
        content: [
          "Les Salutations",
          "Se Présenter",
          "S'exprimer",
        ],
      },
      {
        title: "Faire la communication",
        content: [
          "Demander à quelqu'un",
          "L'invitation",
          "Faire du shopping",
        ],
      },
      {
        title: "Se situer dans l'espace",
        content: [
          "Parler de l'itinéraire",
          "Comprendre les instructions",
          "Décrire un lieu",
        ],
      },
    ],
  },
  // A2
  {
    level: "A2",
    lng: "French",
    modules: [
      {
        title: "Parler du temps",
        content: [
          "La journée",
          "Décrire une personne",
          "À l’avenir",
        ],
      },
      {
        title: "Les événements dans le temps",
        content: [
          "Parler des souvenirs",
          "Les émotions",
          "Les projets de l’avenir",
        ],
      },
      {
        title: "L’argumentation",
        content: [
          "Les dialogues du quotidien",
          "Consommer bien",
          "Notre choix",
        ],
      },
    ],
  },
  // B1
  {
    level: "B1",
    lng: "French",
    modules: [
      {
        title: "S’épanouir",
        content: [
          "Gagner le temps",
          "L’education : La nouvelle forme",
          "La technologie dans la vie quotidienne",
        ],
      },
      {
        title: "Le changement",
        content: [
          "Comprendre de l’art",
          "Les étapes de la revolution",
          "Le travail ou la passion",
        ],
      },
      {
        title: "L’histoire",
        content: [
          "La Francophonie",
          "Le patrimoine",
          "Comment Réagir",
        ],
      },
    ],
  },
  // B2
  {
    level: "B2",
    lng: "French",
    modules: [
      {
        title: "Les sentiments",
        content: [
          "Le bonheure",
          "Le monde change",
          "L’image : nécessaire ou pas ?",
        ],
      },
      {
        title: "La société",
        content: [
          "L’égalité",
          "La culture",
          "Le lux et le goût",
        ],
      },
      {
        title: "La science",
        content: [
          "Nos appartenances",
          "Les recherches",
          "La santé et le génétique",
        ],
      },
    ],
  },
  // C1
  {
    level: "C1",
    lng: "French",
    modules: [
      {
        title: "Les sentiments",
        content: [
          "L’education",
          "La famille",
          "La technologie",
        ],
      },
      {
        title: "La société",
        content: [
          "La structure social",
          "La santé",
          "Les droits humains",
        ],
      },
      {
        title: "La science",
        content: [
          "La communication",
          "L’environnement",
          "Le travail",
        ],
      },
    ],
  },
  // C2
  {
    level: "C2",
    lng: "French",
    modules: [
      {
        title: "Les sentiments",
        content: [
          "L’environnement et le developpement",
          "Le travail",
          "L’education et la nouvelle génération",
        ],
      },
      {
        title: "La société",
        content: [
          "La famille et la société",
          "La technologie",
          "La structure social",
        ],
      },
      {
        title: "La science",
        content: [
          "La santé et les nourritures",
          "Les droits humains",
          "La communication",
        ],
      },
    ],
  },
];

const FrenchCurr = () => (
  <>
    {/* heading */}
    <div className={styles.head}>
      <h3
      >
        Curriculum
      </h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1L6s4jP5igc_etdTb0xVe1PpqDCT62GZ6/view?usp=sharing"
      >
        <button>
          <strong>
            Download <br />
            Curriculum
          </strong>
        </button>
      </a>
    </div>

    {/* carousel */}
    <Carousel
      dark
      className={styles.carousel}
      controls={true}
      indicators={false}
      prevLabel={false}
      nextLabel={false}
      pause="hover"
      
      // thin prev and next icons
      prevIcon={
        <svg
        className={styles.prevIcon}
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 512 376.83"
        >
          <path
            fill-rule="nonzero"
            d="M156.88 372.7a12.026 12.026 0 0 0 17.09 1.06c5-4.47 5.46-12.2 1.04-17.25L38.96 200.69h460.89c6.71 0 12.15-5.5 12.15-12.28 0-6.77-5.44-12.27-12.15-12.27H38.95L175.01 20.32c4.42-5.05 3.96-12.78-1.04-17.25-5.01-4.47-12.66-4-17.09 1.05l-153.67 176c-4.17 4.55-4.32 11.64-.17 16.39L156.88 372.7z"
          />
        </svg>
      }
      nextIcon={
        <svg
          className={styles.nextIcon}
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 512 376.83"
        >
          <path
            fill-rule="nonzero"
            d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"
          />
        </svg>
      }
      
      // bold prev and next icons
      // prevIcon={
      //   <svg
      //     className={styles.prevIcon}
      //     xmlns="http://www.w3.org/2000/svg"
      //     viewBox="0 0 448 512"
      //   >
      //     <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" strokeWidth="1"/>
      //   </svg>
      // }
      // nextIcon={
      //   <svg
      //     className={styles.nextIcon}
      //     xmlns="http://www.w3.org/2000/svg"
      //     viewBox="0 0 448 512"
      //   >
      //     <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" strokeWidth="1"/>
      //   </svg>
      // }
    >
      {proficiencyData.map((data, index) => (
        <Carousel.Item key={index}>
          <ProficiencyLevelCard
            level={data.level}
            lng={data.lng}
            modules={data.modules}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  </>
);

export default FrenchCurr;
