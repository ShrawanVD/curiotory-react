import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProficiencyLevelCard from "./ProficiencyLevelCard";
import styles from "./Curriculum.module.css";

const proficiencyData = [
    // Portuguese A1 Level
    {
      level: "A1",
      lng: "Portuguese",
      modules: [
        {
          title: "Introduction to Portuguese",
          content: [
            "Alphabet & Pronunciation: Learn the Portuguese alphabet, pronunciation rules, and basic phonetics.",
            "Greetings & Basic Expressions: Common greetings, introductions, and basic conversational phrases.",
            "Simple Grammar: Basic sentence structure, present tense verbs (regular and some irregular), and simple questions."
          ]
        },
        {
          title: "Everyday Communication",
          content: [
            "Vocabulary Expansion: Numbers, days of the week, months, colors, and common nouns.",
            "Noun Gender & Plural Forms: Introduction to gendered nouns (masculine/feminine) and pluralization rules.",
            "Daily Life Scenarios: Vocabulary and phrases for shopping, dining, directions, and transportation."
          ]
        },
        {
          title: "Practical Applications",
          content: [
            "Social Interactions: Polite expressions, making plans, discussing hobbies, and preferences.",
            "Descriptive Language: Basic adjectives, comparisons (comparatives and superlatives), and describing people and places.",
            "Cultural Insights: Introduction to Portuguese-speaking countries, traditions, and cultural etiquette."
          ]
        }
      ]
    },
  
    // Portuguese A2 Level
    {
      level: "A2",
      lng: "Portuguese",
      modules: [
        {
          title: "Expanded Vocabulary & Grammar",
          content: [
            "Extended Vocabulary: Household items, clothing, parts of the body, and more descriptive adjectives.",
            "Past Tense: Introduction to past tense verbs (regular and irregular) and usage in simple sentences.",
            "Prepositions & Articles: Basic prepositions and definite/indefinite articles in context."
          ]
        },
        {
          title: "Enhanced Communication Skills",
          content: [
            "Daily Routines: Vocabulary and phrases related to daily activities, routines, and hobbies.",
            "Future Tense: Introduction to future tense verbs and forming simple future sentences.",
            "Reflexive Verbs: Understanding and using reflexive verbs in everyday conversations."
          ]
        },
        {
          title: "Practical Scenarios",
          content: [
            "Health & Emergencies: Vocabulary for medical conditions, emergencies, and visiting a doctor.",
            "Work & Study: Discussing professions, education, and workplace interactions.",
            "Cultural Exploration: Deeper dive into Portuguese-speaking cultures, literature, music, and films."
          ]
        }
      ]
    },
  
    // Portuguese B1 Level (Intermediate)
    {
      level: "B1",
      lng: "Portuguese",
      modules: [
        {
          title: "Intermediate Grammar & Vocabulary",
          content: [
            "Complex Sentences: Using conjunctions to form compound and complex sentences.",
            "Subjunctive Mood: Introduction to the subjunctive mood and its various uses.",
            "Adjective Agreement & Comparative Forms: Mastery of adjective agreement and forming comparatives/superlatives."
          ]
        },
        {
          title: "Conversational Fluency",
          content: [
            "Narrative Skills: Telling stories, describing past events, and sharing experiences.",
            "Opinions & Debate: Expressing opinions, agreeing/disagreeing, and engaging in debates.",
            "Indirect Speech: Introduction to reported speech and indirect questions."
          ]
        },
        {
          title: "Applied Contexts",
          content: [
            "Travel & Tourism: Vocabulary for travel, booking accommodations, and sightseeing.",
            "Professional Skills: Advanced vocabulary for business settings, meetings, and negotiations.",
            "Media & Current Affairs: Reading and discussing Portuguese news, articles, and contemporary issues."
          ]
        }
      ]
    },
  
    // Portuguese B2 Level (Upper-Intermediate)
    {
      level: "B2",
      lng: "Portuguese",
      modules: [
        {
          title: "Advanced Grammar & Vocabulary",
          content: [
            "Complex Structures: Mastery of complex sentence structures, including conditional sentences.",
            "Modal Verbs & Phrasal Verbs: Understanding and using modal verbs and phrasal verbs in context.",
            "Advanced Adjectives & Adverbs: Expanding descriptive language for more nuanced expression."
          ]
        },
        {
          title: "Advanced Communication",
          content: [
            "Debating & Persuasion: Developing skills for formal debates, persuasive arguments, and discussions.",
            "Writing Skills: Academic writing, formal letters, and business correspondence.",
            "Cultural Literacy: Analysis of Portuguese literature, films, and artistic movements."
          ]
        },
        {
          title: "Cultural Proficiency",
          content: [
            "Literary Analysis: In-depth study and discussion of major Portuguese literary works and authors.",
            "Historical Insights: Understanding historical events, figures, and their impact on Portuguese-speaking societies.",
            "Cultural Debates: Engaging in discussions about cultural, social, and political issues within Portuguese-speaking communities."
          ]
        }
      ]
    },
  
    // Portuguese C1 Level (Advanced)
    {
      level: "C1",
      lng: "Portuguese",
      modules: [
        {
          title: "Proficient Grammar & Vocabulary",
          content: [
            "Idiomatic Expressions & Proverbs: Understanding and using idiomatic expressions and proverbs in context.",
            "Advanced Syntax: Mastery of advanced grammatical structures and sentence patterns.",
            "Technical Vocabulary: Expanding vocabulary related to specific fields of interest or professional domains."
          ]
        },
        {
          title: "Advanced Communication Skills",
          content: [
            "Fluency in Complex Conversations: Engaging in fluent, spontaneous conversations on diverse topics.",
            "Critical Analysis: Analyzing texts, speeches, and media critically and expressing nuanced opinions.",
            "Presentation Skills: Delivering detailed presentations and participating in formal discussions."
          ]
        },
        {
          title: "Cultural Mastery",
          content: [
            "Cultural Integration: Deepening understanding of cultural nuances, traditions, and contemporary issues.",
            "Literary Proficiency: Analysis and interpretation of contemporary and classic Portuguese literature.",
            "Professional Competence: Applying language skills in professional contexts, including negotiations, presentations, and collaborations."
          ]
        }
      ]
    },
  
    // Portuguese C2 Level (Mastery)
    {
      level: "C2",
      lng: "Portuguese",
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
            "Cultural Exploration: Leading discussions on cultural, societal, and global issues within Portuguese-speaking communities.",
            "Professional Excellence: Applying language skills effectively in professional and academic environments."
          ]
        },
        {
          title: "Cultural Immersion",
          content: [
            "Cultural Insight & Contributions: Contributing to cultural discourse, producing cultural analyses, and engaging in cultural diplomacy.",
            "Literary & Artistic Endeavors: Exploring and contributing to Portuguese-language literature, arts, and media.",
            "Community Engagement: Contributing actively to Portuguese-speaking communities, fostering cultural exchange and understanding."
          ]
        }
      ]
    }
  ];
  

const PortugueseCurr = () => (
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
          href=""
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
  
  export default PortugueseCurr;
  