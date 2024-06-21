import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Curriculum.module.css";
import ProficiencyCardJapanese from "./ProficiencyCardJapanese";

const proficiencyData = [
    {
      level: "N5",
      lng: "Japanese",
      modules: [
        {
          title: "Introduction to Basic Japanese",
          content: [
            "Hiragana & Katakana: Learn and practice both syllabaries (writing systems) of Japanese.",
            "Basic Vocabulary: Greetings, numbers, days of the week, basic nouns (e.g., family members, food items).",
            "Grammar: Basic sentence structure (subject + object + verb), present tense verbs (masu form), and simple particles (は, が, を)."
          ]
        },
        {
          title: "Everyday Communication",
          content: [
            "Common Phrases: Polite expressions, introductions, asking for directions, and making simple requests.",
            "Nouns & Adjectives: Introduction to adjectives (い-adjectives and な-adjectives) and their basic usage.",
            "Verb Conjugation: Present tense (ます form), past tense (た form), and negative forms (ない form)."
          ]
        },
        {
          title: "Practical Applications",
          content: [
            "Shopping & Dining: Vocabulary for shopping, ordering food, and interacting in restaurants.",
            "Daily Life Scenarios: Talking about hobbies, preferences, describing daily routines.",
            "Cultural Insights: Introduction to Japanese culture, customs, and etiquette (e.g., bowing, gift-giving)."
          ]
        }
      ]
    },
    {
      level: "N4",
      lng: "Japanese",
      modules: [
        {
          title: "Expanded Vocabulary & Grammar",
          content: [
            "Extended Vocabulary: Expanded topics including weather, transportation, occupations, and more detailed descriptions.",
            "Past Tense: Further exploration of past tense verbs (た form) and their usage.",
            "Particles & Counters: Introduction to more particles (に、で、と) and counters for different objects."
          ]
        },
        {
          title: "Enhanced Communication Skills",
          content: [
            "Future Tense: Introduction to future tense (will form) and expressing intentions.",
            "Te-form & Conjunctive Particles: Learning te-form of verbs and its various uses, conjunctions (から、けど).",
            "Casual Speech: Basics of informal speech patterns used among friends and family."
          ]
        },
        {
          title: "Practical Scenarios",
          content: [
            "Travel & Directions: Vocabulary for travel situations, asking for and giving directions.",
            "Health & Emergencies: Vocabulary for medical situations, visiting a doctor.",
            "Cultural Practices: Deeper dive into Japanese holidays, festivals, and traditional arts (e.g., tea ceremony)."
          ]
        }
      ]
    },
    {
      level: "N3",
      lng: "Japanese",
      modules: [
        {
          title: "Intermediate Grammar & Vocabulary",
          content: [
            "Complex Sentences: Building complex sentences using conjunctions (が、けれども) and relative clauses.",
            "Noun Modifiers: Introduction to using nouns as modifiers (の particle).",
            "Conditional Forms: Introduction to conditional forms (たら、なら) and hypothetical situations."
          ]
        },
        {
          title: "Conversational Fluency",
          content: [
            "Expressing Opinions & Desires: Discussing preferences, giving opinions, making suggestions.",
            "Narrative Skills: Talking about past experiences, anecdotes, and plans.",
            "Indirect Speech: Reporting what others have said (と言う、と思う)."
          ]
        },
        {
          title: "Applied Contexts",
          content: [
            "Work & Business: Vocabulary related to work environments, job interviews, and office culture.",
            "Media & Current Affairs: Reading and discussing news articles, social issues, and contemporary topics.",
            "Cultural Exploration: Exploring modern Japanese literature, movies, and pop culture."
          ]
        }
      ]
    },
    {
      level: "N2",
      lng: "Japanese",
      modules: [
        {
          title: "Advanced Grammar & Vocabulary",
          content: [
            "Advanced Sentence Structures: Mastery of complex sentence patterns (passive voice, causative form).",
            "Expressing Conditions & Consequences: Using advanced conditional forms (たら、ば) and cause-effect relationships.",
            "Emphasis & Contrast: Expressing contrast and emphasis with も、しか、はず、さえ."
          ]
        },
        {
          title: "Advanced Communication Skills",
          content: [
            "Debating & Persuasion: Participating in formal debates, expressing agreement/disagreement.",
            "Formal & Polite Speech: Polite speech (です・ます form) and honorific language (尊敬語、謙譲語).",
            "Written Expression: Writing formal emails, reports, and essays."
          ]
        },
        {
          title: "Cultural Proficiency",
          content: [
            "Literary Analysis: Analyzing Japanese literature (both classical and modern) and understanding themes.",
            "Historical Perspectives: Studying historical events, cultural shifts, and their impact on modern society.",
            "Social Issues & Global Perspectives: Discussing contemporary issues in Japan and globally."
          ]
        }
      ]
    },
    {
      level: "N1",
      lng: "Japanese",
      modules: [
        {
          title: "Proficient Grammar & Vocabulary",
          content: [
            "Idiomatic Expressions & Proverbs: Mastering idiomatic expressions, proverbs, and colloquialisms.",
            "Advanced Syntax & Rhetoric: Understanding advanced sentence structures, rhetorical devices.",
            "Technical & Specialized Vocabulary: Expanding vocabulary in specialized fields (science, economics, law)."
          ]
        },
        {
          title: "Advanced Communication Skills",
          content: [
            "Fluency in Complex Conversations: Engaging in nuanced discussions on abstract topics.",
            "Critical Analysis & Evaluation: Analyzing and critiquing complex texts, speeches, and media.",
            "Presentation & Persuasion: Delivering persuasive presentations and speeches with confidence."
          ]
        },
        {
          title: "Cultural Mastery",
          content: [
            "Cultural Integration: Deepening understanding of cultural nuances, traditions, and societal norms.",
            "Literary Proficiency: Analyzing and appreciating masterpieces of Japanese literature and their impact.",
            "Global Engagement: Contributing actively to global discussions, cross-cultural exchanges, and diplomacy."
          ]
        }
      ]
    }
  ];
  


  const JapaneseCurr = () => (
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
          href="https://drive.google.com/file/d/1dCe8Xok6T5vrHzx1Af-ZrNwlps5-9atQ/view?usp=sharing"
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
            <ProficiencyCardJapanese
              level={data.level}
              lng={data.lng}
              modules={data.modules}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
  
  export default JapaneseCurr;
  