import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProficiencyLevelCard from "./ProficiencyLevelCard";
import styles from "./Curriculum.module.css";


const proficiencyData = [
  // Dutch A1 Level
  {
    level: "A1",
    lng: "Dutch",
    modules: [
      {
        title: "Basics of Dutch Language",
        content: [
          "Alphabet & Pronunciation: Learn the Dutch alphabet, pronunciation rules, and basic phonetics.",
          "Basic Vocabulary: Common greetings, numbers, days of the week, and basic nouns.",
          "Simple Grammar: Introduction to basic sentence structure, present tense verbs, and simple questions.",
        ],
      },
      {
        title: "Everyday Communication",
        content: [
          "Common Phrases: Polite expressions, basic conversational phrases, and common Q&A.",
          "Nouns & Adjectives: Gender of nouns, plural forms, and basic adjectives.",
          "Verb Conjugation: Present tense conjugation of regular verbs and introduction to irregular verbs.",
        ],
      },
      {
        title: "Practical Applications",
        content: [
          "Shopping & Dining: Vocabulary for shopping, ordering food, and basic interactions.",
          "Directions & Transportation: Asking for and giving directions, understanding public transportation vocabulary.",
          "Cultural Insights: Introduction to Dutch culture, traditions, and etiquette.",
        ],
      },
    ],
  },

  // Dutch A2 Level
  {
    level: "A2",
    lng: "Dutch",
    modules: [
      {
        title: "Expanding Vocabulary & Grammar",
        content: [
          "Extended Vocabulary: Household items, clothing, parts of the body, and more descriptive adjectives.",
          "Past Tense: Introduction to past tense verbs and usage in simple sentences.",
          "Prepositions & Articles: Basic prepositions and definite/indefinite articles in context.",
        ],
      },
      {
        title: "Enhanced Communication",
        content: [
          "Daily Routines: Vocabulary and phrases related to daily activities and routines.",
          "Future Tense: Introduction to future tense verbs and forming simple future sentences.",
          "Reflexive Verbs: Understanding and using reflexive verbs in everyday conversations.",
        ],
      },
      {
        title: "Practical Scenarios",
        content: [
          "Health & Emergencies: Vocabulary for medical conditions, emergencies, and visiting a doctor.",
          "Social Interactions: Making plans, talking about hobbies, and discussing likes/dislikes.",
          "Cultural Practices: More in-depth exploration of Dutch holidays, cuisine, and customs.",
        ],
      },
    ],
  },

  // Dutch B1 Level (Intermediate)
  {
    level: "B1",
    lng: "Dutch",
    modules: [
      {
        title: "Intermediate Grammar & Vocabulary",
        content: [
          "Complex Sentences: Using conjunctions to form compound and complex sentences.",
          "Imperative Mood: Understanding and using commands and requests.",
          "Adjective Agreement & Comparative Forms: Mastery of adjective agreement and forming comparatives/superlatives.",
        ],
      },
      {
        title: "Conversational Skills",
        content: [
          "Narrative Skills: Telling stories, describing past events, and sharing experiences.",
          "Opinions & Preferences: Expressing opinions, agreeing/disagreeing, and talking about preferences.",
          "Indirect Speech: Introduction to reported speech and indirect questions.",
        ],
      },
      {
        title: "Applied Contexts",
        content: [
          "Travel & Tourism: Vocabulary for travel, booking accommodations, and sightseeing.",
          "Work & Study: Discussing professions, education, and workplace interactions.",
          "Cultural Exploration: Deeper dive into Dutch literature, music, and films.",
        ],
      },
    ],
  },

  // Dutch B2 Level (Upper-Intermediate)
  {
    level: "B2",
    lng: "Dutch",
    modules: [
      {
        title: "Advanced Grammar & Vocabulary",
        content: [
          "Subordinate Clauses: Mastery of subordinate clauses and their correct usage.",
          "Modal Verbs: Understanding and using modal verbs in various contexts.",
          "Advanced Adjectives & Adverbs: Expanding descriptive language for more precise expression.",
        ],
      },
      {
        title: "Complex Communication",
        content: [
          "Debating & Persuasion: Developing skills for debates, persuasive speech, and formal discussions.",
          "Hypothetical Scenarios: Using the conditional mood and subjunctive forms to discuss hypothetical situations.",
          "Formal Writing: Writing formal letters, essays, and reports with correct structure and style.",
        ],
      },
      {
        title: "Immersive Experiences",
        content: [
          "Media & News: Reading and understanding Dutch newspapers, magazines, and online news.",
          "Cultural Events: Discussing cultural events, theater, and art exhibitions.",
          "Professional Interaction: Advanced vocabulary for professional settings, including business meetings and presentations.",
        ],
      },
    ],
  },

  // Dutch C1 Level (Advanced)
  {
    level: "C1",
    lng: "Dutch",
    modules: [
      {
        title: "Proficient Grammar & Vocabulary",
        content: [
          "Subtle Nuances: Understanding idiomatic expressions, proverbs, and subtle language nuances.",
          "Advanced Syntax: Mastering complex sentence structures and advanced grammatical forms.",
          "Specialized Vocabulary: Expanding vocabulary related to specific fields of interest or work.",
        ],
      },
      {
        title: "Advanced Communication",
        content: [
          "Fluency in Conversation: Engaging in fluent, spontaneous conversations on diverse topics.",
          "Academic Writing: Writing detailed essays, research papers, and theses in Dutch.",
          "Presentation Skills: Developing skills for giving detailed presentations and public speaking.",
        ],
      },
      {
        title: "Cultural Proficiency",
        content: [
          "Literary Analysis: Reading and analyzing classic and contemporary Dutch literature.",
          "Historical Contexts: Understanding historical texts and discussing historical events in detail.",
          "Cultural Debates: Engaging in in-depth discussions about cultural, social, and political issues.",
        ],
      },
    ],
  },

  // Dutch C2 Level (Mastery)
  {
    level: "C2",
    lng: "Dutch",
    modules: [
      {
        title: "Mastery of Language",
        content: [
          "Complete Fluency: Achieving near-native fluency, with the ability to understand and use idiomatic expressions effortlessly.",
          "Precision in Writing: Writing with accuracy and sophistication across various formats and styles.",
          "Advanced Grammar Mastery: Perfecting the use of all grammatical structures.",
        ],
      },
      {
        title: "Expert Communication",
        content: [
          "Complex Debates: Participating in complex debates and discussions with ease.",
          "Critical Analysis: Critically analyzing texts, films, and other media.",
          "Professional Proficiency: Using Dutch proficiently in a professional environment, including in specialized fields.",
        ],
      },
      {
        title: "Cultural Immersion",
        content: [
          "Cultural Integration: Deep immersion into Dutch culture, customs, and social norms.",
          "Advanced Literary Studies: In-depth study and discussion of Dutch literary works.",
          "Cultural Contributions: Contributing to discussions on Dutch culture and making presentations on cultural topics.",
        ],
      },
    ],
  },
];

const DutchCurr = () => (
  <>
    {/* heading */}
    <div className={styles.head}>
      <h3
      >
        Curriculum
      </h3>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1ciN5htNC2yo2K1oRMBZq71KFHcho6E78/view?usp=sharing"
        rel="noopener noreferrer"
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

export default DutchCurr;
