import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProficiencyCardMand from "./ProficiencyCardMand";
import styles from "./Curriculum.module.css";

const proficiencyData = [
    {
      level: "1",
      lng: "Mandarin",
      modules: [
        {
          title: "Introduction to Basic Mandarin",
          content: [
            "Pinyin & Tones: Learn Mandarin Chinese pronunciation using Pinyin and practice tones.",
            "Basic Vocabulary: Greetings, numbers, days of the week, simple nouns (e.g., family, food).",
            "Grammar: Basic sentence structure (subject + verb + object), basic question formation."
          ]
        },
        {
          title: "Everyday Communication",
          content: [
            "Common Phrases: Polite expressions, introductions, asking for directions, ordering food.",
            "Nouns & Adjectives: Introduction to common nouns and basic adjectives.",
            "Present Tense Verbs: Common verbs in present tense (e.g., 是、有、喜欢)."
          ]
        },
        {
          title: "Practical Applications",
          content: [
            "Daily Life Scenarios: Shopping, transportation, making appointments.",
            "Cultural Insights: Introduction to Chinese culture, customs, and etiquette.",
            "Listening & Speaking Practice: Basic dialogues and role-playing exercises."
          ]
        }
      ]
    },
    {
      level: "2",
      lng: "Mandarin",
      modules: [
        {
          title: "Expanded Vocabulary & Grammar",
          content: [
            "Extended Vocabulary: Expanded topics including weather, hobbies, occupations.",
            "Past Tense: Introduction to past tense (了) and its usage.",
            "Quantifiers & Measure Words: Introduction to measure words and quantifiers."
          ]
        },
        {
          title: "Enhanced Communication Skills",
          content: [
            "Future Tense: Introduction to future tense (会) and expressing intentions.",
            "Comparisons: Comparative structures (比) and describing differences.",
            "Question Words: Introduction to question words (什么、谁、哪里)."
          ]
        },
        {
          title: "Practical Scenarios",
          content: [
            "Travel & Directions: Vocabulary for travel situations, asking for and giving directions.",
            "Health & Emergencies: Vocabulary for medical situations, visiting a doctor.",
            "Cultural Practices: Deeper dive into Chinese holidays, festivals, and traditional arts."
          ]
        }
      ]
    },
    {
      level: "3",
      lng: "Mandarin",
      modules: [
        {
          title: "Intermediate Grammar & Vocabulary",
          content: [
            "Complex Sentences: Building complex sentences using conjunctions (但是、因为).",
            "Subjunctive Mood: Introduction to the subjunctive mood (如果、要是).",
            "Adverbs & Adverbials: Using adverbs to modify verbs, adverbials of time and place."
          ]
        },
        {
          title: "Conversational Fluency",
          content: [
            "Expressing Opinions & Desires: Discussing preferences, giving opinions, making suggestions.",
            "Narrative Skills: Talking about past experiences, anecdotes, and plans.",
            "Indirect Speech: Reporting what others have said (说、告诉)."
          ]
        },
        {
          title: "Applied Contexts",
          content: [
            "Work & Business: Vocabulary related to work environments, job interviews, and office culture.",
            "Media & Current Affairs: Reading and discussing news articles, social issues, and contemporary topics.",
            "Cultural Exploration: Exploring modern Chinese literature, movies, and pop culture."
          ]
        }
      ]
    },
    {
      level: "4",
      lng: "Mandarin",
      modules: [
        {
          title: "Advanced Grammar & Vocabulary",
          content: [
            "Advanced Sentence Structures: Mastery of complex sentence patterns (把、被).",
            "Expressing Conditions & Consequences: Using advanced conditional structures (如果...就...).",
            "Emphasis & Contrast: Expressing contrast and emphasis with 虽然...但是."
          ]
        },
        {
          title: "Advanced Communication Skills",
          content: [
            "Debating & Persuasion: Participating in formal debates, expressing agreement/disagreement.",
            "Formal & Polite Speech: Polite speech (的、了、地) and honorific language (尊敬语).",
            "Written Expression: Writing formal emails, reports, and essays."
          ]
        },
        {
          title: "Cultural Proficiency",
          content: [
            "Literary Analysis: Analyzing Chinese literature (both classical and modern) and understanding themes.",
            "Historical Perspectives: Studying historical events, cultural shifts, and their impact on modern society.",
            "Social Issues & Global Perspectives: Discussing contemporary issues in China and globally."
          ]
        }
      ]
    },
    {
      level: "5",
      lng: "Mandarin",
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
            "Literary Proficiency: Analyzing and appreciating masterpieces of Chinese literature and their impact.",
            "Global Engagement: Contributing actively to global discussions, cross-cultural exchanges, and diplomacy."
          ]
        }
      ]
    },
    {
      level: "6",
      lng: "Mandarin",
      modules: [
        {
          title: "Mastery of Language",
          content: [
            "Native-like Fluency: Achieving near-native proficiency in all language skills (speaking, listening, reading, writing).",
            "Precision in Writing: Writing with accuracy and sophistication across various genres and styles.",
            "Advanced Grammar Proficiency: Perfecting the use of all grammatical structures and registers."
          ]
        },
        {
          title: "Expert Communication",
          content: [
            "Complex Debates & Discussions: Participating in complex debates, discussions, and academic forums.",
            "Cultural Exploration: Leading discussions on cultural, societal, and global issues within Chinese-speaking communities.",
            "Professional Excellence: Applying language skills effectively in professional and academic environments."
          ]
        },
        {
          title: "Cultural Immersion",
          content: [
            "Cultural Insight & Contributions: Contributing to cultural discourse, producing cultural analyses, and engaging in cultural diplomacy.",
            "Literary & Artistic Endeavors: Exploring and contributing to Chinese-language literature, arts, and media.",
            "Community Engagement: Contributing actively to Chinese-speaking communities, fostering cultural exchange and understanding."
          ]
        }
      ]
    }
  ];


  const MandCurr = () => (
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
          href="https://drive.google.com/file/d/1zfmvNjx0U6zqfdmugaTUYt294YckdRLx/view?usp=sharing"
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
            <ProficiencyCardMand
              level={data.level}
              lng={data.lng}
              modules={data.modules}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
  
  export default MandCurr;
  