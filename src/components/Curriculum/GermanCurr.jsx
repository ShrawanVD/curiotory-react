import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProficiencyLevelCard from "./ProficiencyLevelCard";
import styles from "./Curriculum.module.css";

const proficiencyData = [
  // A1 Level
  {
    level: "A1",
    lng: "German",
    modules: [
      {
        title: "Basic Introductions and Daily Life",
        content: [
          "Guten Tag und Abschied (Hello and Goodbye)",
          "Meine Familie und Ich (My Family and I)",
          "Zu Hause (At Home)",
          "Der Tagesablauf (Daily Routine)",
        ],
      },
      {
        title: "Basic Needs and Common Activities",
        content: [
          "In der Stadt (In the City)",
          "Einkaufen (Shopping)",
          "Essen und Trinken (Eating and Drinking)",
          "Freizeit (Free Time)",
        ],
      },
      {
        title: "Interacting with Others",
        content: [
          "In der Schule (At School)",
          "Arbeit (Work)",
          "Urlaub (Holidays)",
          "Gesundheit (Health)",
        ],
      },
    ],
  },

  // A2 Level
  {
    level: "A2",
    lng: "German",
    modules: [
      {
        title: "Expanding Vocabulary and Communication",
        content: [
          "Beschreibungen und Eigenschaften (Descriptions and Characteristics)",
          "Freunde und Beziehungen (Friends and Relationships)",
          "Im Restaurant (At the Restaurant)",
          "Einkaufen gehen (Going Shopping)",
        ],
      },
      {
        title: "Everyday Situations and Travel",
        content: [
          "Verkehrsmittel (Transportation)",
          "Pläne machen (Making Plans)",
          "Wetter und Jahreszeiten (Weather and Seasons)",
          "Bei der Bank und der Post (At the Bank and Post Office)",
        ],
      },
      {
        title: "Cultural Context and Advanced Interactions",
        content: [
          "Feste und Traditionen (Festivals and Traditions)",
          "Der Körper und die Gesundheit (Body and Health)",
          "Probleme und Lösungen (Problems and Solutions)",
          "Bei der Arbeit (At Work)",
        ],
      },
    ],
  },

  // B1 Level
  {
    level: "B1",
    lng: "German",
    modules: [
      {
        title: "Intermediate Communication and Daily Life",
        content: [
          "Vorstellungsrunde und Beziehungen (Introductions and Relationships)",
          "Alltag (Daily Life)",
          "Beschreibungen und Erzählungen (Descriptions and Narratives)",
          "Reisen und Tourismus (Travel and Tourism)",
        ],
      },
      {
        title: "Practical Situations and Expressing Opinions",
        content: [
          "Einkaufen und Konsum (Shopping and Consumption)",
          "Gesundheit und Wohlbefinden (Health and Well-being)",
          "Beruf und Karriere (Work and Career)",
          "Bildung und Lernen (Education and Learning)",
        ],
      },
      {
        title: "Cultural Awareness and Advanced Interactions",
        content: [
          "Medien und Kommunikation (Media and Communication)",
          "Probleme und Lösungsansätze (Problems and Solutions)",
          "Feste und Traditionen (Festivals and Traditions)",
          "Meinungen und Argumentationen (Opinions and Arguments)",
        ],
      },
    ],
  },

  // B2 Level
  {
    level: "B2",
    lng: "German",
    modules: [
      {
        title: "Advanced Communication and Social Issues",
        content: [
          "Persönliche und soziale Beziehungen (Personal and Social Relationships)",
          "Stadt- und Landleben (Urban and Rural Life)",
          "Kultur und Freizeit (Culture and Leisure)",
          "Technologie und Gesellschaft (Technology and Society)",
        ],
      },
      {
        title: "Complex Situations and Professional Settings",
        content: [
          "Bildung und Ausbildung (Education and Training)",
          "Berufswelt (The World of Work)",
          "Wirtschaft und Geschäft (Economy and Business)",
          "Politik und Gesellschaft (Politics and Society)",
        ],
      },
      {
        title: "Global Issues and Cultural Depth",
        content: [
          "Umwelt und Nachhaltigkeit (Environment and Sustainability)",
          "Gesundheit und Lebensstil (Health and Lifestyle)",
          "Literatur und Kino (Literature and Cinema)",
          "Geschichte und Geografie (History and Geography)",
        ],
      },
    ],
  },

  // C1 Level
  {
    level: "C1",
    lng: "German",
    modules: [
      {
        title: "Advanced Communication and Professional Contexts",
        content: [
          "Fortgeschrittene Kommunikation (Advanced Communication)",
          "Arbeitsbeziehungen (Work Relationships)",
          "Schreiben und Präsentationen (Writing and Presentations)",
          "Debatten und Diskussionen (Debates and Discussions)",
        ],
      },
      {
        title: "Cultural Proficiency and Critical Thinking",
        content: [
          "Literatur und Analyse (Literature and Analysis)",
          "Geschichte und Gesellschaft (History and Society)",
          "Kunst und Kultur (Art and Culture)",
          "Kritik und Meinung (Critique and Opinion)",
        ],
      },
      {
        title: "Specialized Topics and Media",
        content: [
          "Wissenschaft und Technologie (Science and Technology)",
          "Wirtschaft und Finanzen (Economy and Finance)",
          "Politik und aktuelle Ereignisse (Politics and Current Affairs)",
          "Umwelt und Nachhaltigkeit (Environment and Sustainability)",
        ],
      },
    ],
  },

  // C2 Level
  {
    level: "C2",
    lng: "German",
    modules: [
      {
        title: "Mastery of Language and Nuanced Expression",
        content: [
          "Mündliche und schriftliche Ausdrucksfähigkeit (Oral and Written Expression)",
          "Sprachliche Nuancen und Register (Nuances and Language Registers)",
          "Literarische Stile und Genres (Literary Styles and Genres)",
          "Rhetorik und Überzeugung (Rhetoric and Persuasion)",
        ],
      },
      {
        title: "In-Depth Analysis and Interpretation",
        content: [
          "Literarische und kritische Analyse (Literary and Critical Analysis)",
          "Kultur- und Sozialwissenschaften (Cultural and Social Studies)",
          "Forschung und Dokumentation (Research and Documentation)",
          "Übersetzung und Dolmetschen (Translation and Interpretation)",
        ],
      },
      {
        title: "Professional and Academic Proficiency",
        content: [
          "Professionelle und akademische Kommunikation (Professional and Academic Communication)",
          "Konferenzen und Veröffentlichungen (Conferences and Publications)",
          "Innovation und Entwicklung (Innovation and Development)",
          "Projekte und Präsentationen (Projects and Presentations)",
        ],
      },
    ],
  },
];

const GermanCurr = () => (
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
        href="https://drive.google.com/file/d/1w2Yn5r_dZJ9zpSzhnBLgScMtL6drvGK5/view?usp=sharing"
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

export default GermanCurr;
