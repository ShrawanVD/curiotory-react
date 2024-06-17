import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProficiencyLevelCard from "./ProficiencyLevelCard";
import styles from "./Curriculum.module.css";

const proficiencyData = [
  {
    level: "A1",
    lng: "English",
    modules: [
      {
        title: "Introduction to Basic English",
        content: [
          "Alphabet & Pronunciation: Learn the English alphabet and practice basic pronunciation.",
          "Basic Vocabulary: Greetings, numbers, days of the week, simple nouns (e.g., family, food).",
          "Grammar: Present simple tense (affirmative, negative, questions), basic sentence structures.",
        ],
      },
      {
        title: "Everyday Communication",
        content: [
          "Common Phrases: Polite expressions, introductions, asking for directions, ordering food.",
          "Nouns & Adjectives: Introduction to common nouns and basic adjectives.",
          "Present Continuous Tense: Basic usage of present continuous tense (affirmative, negative, questions).",
        ],
      },
      {
        title: "Practical Applications",
        content: [
          "Daily Life Scenarios: Shopping, transportation, making appointments.",
          "Cultural Insights: Introduction to English-speaking cultures, customs, and etiquette.",
          "Listening & Speaking Practice: Basic dialogues and role-playing exercises.",
        ],
      },
    ],
  },
  {
    level: "A2",
    lng: "English",
    modules: [
      {
        title: "Expanded Vocabulary & Grammar",
        content: [
          "Extended Vocabulary: Topics including weather, hobbies, occupations.",
          "Past Simple Tense: Introduction to past simple tense (regular and irregular verbs).",
          "Prepositions: Basic usage of prepositions of time, place, and movement.",
        ],
      },
      {
        title: "Enhanced Communication Skills",
        content: [
          "Future Tense: Introduction to future tense (will + base verb) and expressing intentions.",
          "Comparatives & Superlatives: Comparative structures (more, less, -er) and superlatives (most, least).",
          "Question Forms: Introduction to question words (what, where, when, who, how).",
        ],
      },
      {
        title: "Practical Scenarios",
        content: [
          "Travel & Directions: Vocabulary for travel situations, asking for and giving directions.",
          "Health & Emergencies: Vocabulary for medical situations, visiting a doctor.",
          "Cultural Practices: Deeper dive into English-speaking holidays, festivals, and traditions.",
        ],
      },
    ],
  },
  {
    level: "B1",
    lng: "English",
    modules: [
      {
        title: "Intermediate Grammar & Vocabulary",
        content: [
          "Complex Sentences: Building complex sentences using conjunctions (and, but, because).",
          "Present Perfect Tense: Introduction to present perfect tense (have/has + past participle).",
          "Modal Verbs: Basic usage of modal verbs (can, could, may, might, must).",
        ],
      },
      {
        title: "Conversational Fluency",
        content: [
          "Expressing Opinions & Desires: Discussing preferences, giving opinions, making suggestions.",
          "Narrative Skills: Talking about past experiences, anecdotes, and plans.",
          "Indirect Speech: Reporting what others have said (say, tell, ask).",
        ],
      },
      {
        title: "Applied Contexts",
        content: [
          "Work & Business: Vocabulary related to work environments, job interviews, and office culture.",
          "Media & Current Affairs: Reading and discussing news articles, social issues, and contemporary topics.",
          "Cultural Exploration: Exploring modern English literature, movies, and pop culture.",
        ],
      },
    ],
  },
  {
    level: "B2",
    lng: "English",
    modules: [
      {
        title: "Advanced Grammar & Vocabulary",
        content: [
          "Advanced Sentence Structures: Mastery of complex sentence patterns and subordination.",
          "Conditionals: Using conditional sentences (zero, first, second, third conditionals).",
          "Passive Voice: Introduction to passive voice (be + past participle) and its usage.",
        ],
      },
      {
        title: "Advanced Communication Skills",
        content: [
          "Debating & Persuasion: Participating in formal debates, expressing agreement/disagreement.",
          "Formal & Polite Speech: Polite speech (formal tone, indirect requests) and diplomatic language.",
          "Written Expression: Writing formal emails, reports, and essays.",
        ],
      },
      {
        title: "Cultural Proficiency",
        content: [
          "Literary Analysis: Analyzing English literature (both classic and contemporary) and understanding themes.",
          "Historical Perspectives: Studying historical events, cultural shifts, and their impact on modern society.",
          "Social Issues & Global Perspectives: Discussing contemporary issues in English-speaking countries and globally.",
        ],
      },
    ],
  },
  {
    level: "C1",
    lng: "English",
    modules: [
      {
        title: "Proficient Grammar & Vocabulary",
        content: [
          "Idiomatic Expressions & Colloquialisms: Mastering idiomatic expressions, phrasal verbs, and colloquial language.",
          "Advanced Syntax & Rhetoric: Understanding advanced sentence structures, rhetorical devices.",
          "Technical & Specialized Vocabulary: Expanding vocabulary in specialized fields (science, economics, law).",
        ],
      },
      {
        title: "Advanced Communication Skills",
        content: [
          "Fluency in Complex Conversations: Engaging in nuanced discussions on abstract topics.",
          "Critical Analysis & Evaluation: Analyzing and critiquing complex texts, speeches, and media.",
          "Presentation & Persuasion: Delivering persuasive presentations and speeches with confidence.",
        ],
      },
      {
        title: "Cultural Mastery",
        content: [
          "Cultural Integration: Deepening understanding of cultural nuances, traditions, and societal norms in English-speaking contexts.",
          "Literary Proficiency: Analyzing and appreciating masterpieces of English literature and their impact.",
          "Global Engagement: Contributing actively to global discussions, cross-cultural exchanges, and diplomacy in English.",
        ],
      },
    ],
  },
  {
    level: "C2",
    lng: "English",
    modules: [
      {
        title: "Mastery of Language",
        content: [
          "Native-like Fluency: Achieving near-native proficiency in all language skills (speaking, listening, reading, writing).",
          "Precision in Writing: Writing with accuracy and sophistication across various genres and styles.",
          "Advanced Grammar Proficiency: Perfecting the use of all grammatical structures and registers.",
        ],
      },
      {
        title: "Expert Communication",
        content: [
          "Complex Debates & Discussions: Participating in complex debates, discussions, and academic forums.",
          "Cultural Exploration: Leading discussions on cultural, societal, and global issues within English-speaking communities.",
          "Professional Excellence: Applying language skills effectively in professional and academic environments.",
        ],
      },
      {
        title: "Cultural Immersion",
        content: [
          "Cultural Insight & Contributions: Contributing to cultural discourse, producing cultural analyses, and engaging in cultural diplomacy in English-speaking contexts.",
          "Literary & Artistic Endeavors: Exploring and contributing to English-language literature, arts, and media.",
          "Community Engagement: Contributing actively to English-speaking communities, fostering cultural exchange and understanding.",
        ],
      },
    ],
  },
];

const EnglishCurr = () => (
  <>
    {/* heading */}
    <div className={styles.head}>
      <h3
        style={{
          textDecoration: "underline",
        }}
      >
        Curriculum
      </h3>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1ndboc29hqaYU0OyHd6b6zOQngAWJlS7a/view?usp=sharing"
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

export default EnglishCurr;
