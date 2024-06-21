import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProficiencyLevelCard from "./ProficiencyLevelCard";
import styles from "./Curriculum.module.css";

const proficiencyData = [
    // A1 Level
    {
      level: "A1",
      lng: "Russian",
      modules: [
        {
          title: "Basics of Russian Language",
          content: [
            "Learn the Cyrillic alphabet, pronunciation of letters, and basic phonetics.",
            "Common greetings, numbers, days of the week, and basic nouns (e.g., family, food, everyday objects).",
            "Introduction to basic sentence structure, present tense verbs, and simple questions.",
          ],
        },
        {
          title: "Everyday Communication",
          content: [
            "Polite expressions, basic conversational phrases, and common questions/answers.",
            "Gender of nouns, plural forms, and basic adjectives to describe people, places, and things.",
            "Present tense conjugation of regular verbs and introduction to irregular verbs.",
          ],
        },
        {
          title: "Practical Applications",
          content: [
            "Vocabulary for shopping, ordering food, and basic interactions in stores and restaurants.",
            "Asking for and giving directions, understanding public transportation vocabulary.",
            "Introduction to Russian culture, traditions, and etiquette.",
          ],
        },
      ],
    },
  
    // A2 Level
    {
      level: "A2",
      lng: "Russian",
      modules: [
        {
          title: "Expanding Vocabulary & Grammar",
          content: [
            "Household items, clothing, parts of the body, and more descriptive adjectives.",
            "Introduction to past tense verbs and usage in simple sentences.",
            "Basic prepositions and introduction to the nominative and accusative cases.",
          ],
        },
        {
          title: "Enhanced Communication",
          content: [
            "Vocabulary and phrases related to daily activities and routines.",
            "Introduction to future tense verbs and forming simple future sentences.",
            "Understanding and using reflexive verbs in everyday conversations.",
          ],
        },
        {
          title: "Practical Scenarios",
          content: [
            "Vocabulary for medical conditions, emergencies, and visiting a doctor.",
            "Making plans, talking about hobbies, and discussing likes/dislikes.",
            "More in-depth exploration of Russian holidays, cuisine, and customs.",
          ],
        },
      ],
    },
  
    // B1 Level
    {
      level: "B1",
      lng: "Russian",
      modules: [
        {
          title: "Intermediate Grammar & Vocabulary",
          content: [
            "Using conjunctions to form compound and complex sentences.",
            "Understanding and using commands and requests.",
            "Introduction and usage of the genitive and dative cases in context.",
          ],
        },
        {
          title: "Conversational Skills",
          content: [
            "Telling stories, describing past events, and sharing experiences.",
            "Expressing opinions, agreeing/disagreeing, and talking about preferences.",
            "Introduction to reported speech and indirect questions.",
          ],
        },
        {
          title: "Applied Contexts",
          content: [
            "Vocabulary for travel, booking accommodations, and sightseeing.",
            "Discussing professions, education, and workplace interactions.",
            "Deeper dive into Russian literature, music, and films.",
          ],
        },
      ],
    },
  
    // B2 Level
    {
      level: "B2",
      lng: "Russian",
      modules: [
        {
          title: "Advanced Grammar & Vocabulary",
          content: [
            "Understanding the nuances of verb aspects and their correct usage.",
            "Mastery of the instrumental and prepositional cases in various contexts.",
            "Expanding descriptive language for more precise expression.",
          ],
        },
        {
          title: "Complex Communication",
          content: [
            "Developing skills for debates, persuasive speech, and formal discussions.",
            "Using the conditional mood and subjunctive forms to discuss hypothetical situations.",
            "Writing formal letters, essays, and reports with correct structure and style.",
          ],
        },
        {
          title: "Immersive Experiences",
          content: [
            "Reading and understanding Russian newspapers, magazines, and online news.",
            "Discussing cultural events, theater, and art exhibitions.",
            "Advanced vocabulary for professional settings, including business meetings and presentations.",
          ],
        },
      ],
    },
  
    // C1 Level
    {
      level: "C1",
      lng: "Russian",
      modules: [
        {
          title: "Proficient Grammar & Vocabulary",
          content: [
            "Understanding idiomatic expressions, proverbs, and subtle language nuances.",
            "Mastering complex sentence structures and advanced grammatical forms.",
            "Expanding vocabulary related to specific fields of interest or work.",
          ],
        },
        {
          title: "Advanced Communication",
          content: [
            "Engaging in fluent, spontaneous conversations on diverse topics.",
            "Writing detailed essays, research papers, and theses in Russian.",
            "Developing skills for giving detailed presentations and public speaking.",
          ],
        },
        {
          title: "Cultural Proficiency",
          content: [
            "Reading and analyzing classic and contemporary Russian literature.",
            "Understanding historical texts and discussing historical events in detail.",
            "Engaging in in-depth discussions about cultural, social, and political issues.",
          ],
        },
      ],
    },
  
    // C2 Level
    {
      level: "C2",
      lng: "Russian",
      modules: [
        {
          title: "Mastery of Language",
          content: [
            "Achieving near-native fluency, with the ability to understand and use idiomatic expressions effortlessly.",
            "Writing with accuracy and sophistication across various formats and styles.",
            "Perfecting the use of all grammatical structures.",
          ],
        },
        {
          title: "Expert Communication",
          content: [
            "Participating in complex debates and discussions with ease.",
            "Critically analyzing texts, films, and other media.",
            "Using Russian proficiently in a professional environment, including in specialized fields.",
          ],
        },
        {
          title: "Cultural Immersion",
          content: [
            "Deep immersion into Russian culture, customs, and social norms.",
            "In-depth study and discussion of Russian literary works.",
            "Contributing to discussions on Russian culture and making presentations on cultural topics.",
          ],
        },
      ],
    },
  ];

  
  const RussianCurr = () => (
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
          href="https://drive.google.com/file/d/1Ehw06UWigP4Og285GV33N7_uu4oBqv0s/view?usp=sharing"
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
  
  export default RussianCurr;