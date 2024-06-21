import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProficiencyLevelCard from "./ProficiencyLevelCard";
import styles from "./Curriculum.module.css";

const proficiencyData = [
  
  // Spanish A1 Level
  {
    level: "A1",
    lng: "Spanish",
    modules: [
      {
        title: "Basic Introductions and Daily Life",
        content: [
          "Hola y Adiós (Hello and Goodbye)",
          "Mi Familia y Yo (My Family and I)",
          "En Casa (At Home)",
          "La Rutina Diaria (Daily Routine)",
        ],
      },
      {
        title: "Basic Needs and Common Activities",
        content: [
          "En la Ciudad (In the City)",
          "Las Compras (Shopping)",
          "Comer y Beber (Eating and Drinking)",
          "Tiempo Libre (Free Time)",
        ],
      },
      {
        title: "Interacting with Others",
        content: [
          "En la Escuela (At School)",
          "El Trabajo (Work)",
          "Las Vacaciones (Holidays)",
          "La Salud (Health)",
        ],
      },
    ],
  },

  // Spanish A2 Level
  {
    level: "A2",
    lng: "Spanish",
    modules: [
      {
        title: "Expanding Vocabulary and Communication",
        content: [
          "Descripciones y Características (Descriptions and Characteristics)",
          "Los Amigos y Las Relaciones (Friends and Relationships)",
          "En el Restaurante (At the Restaurant)",
          "De Compras (Shopping)",
        ],
      },
      {
        title: "Everyday Situations and Travel",
        content: [
          "En el Transporte (Transportation)",
          "Hacer Planes (Making Plans)",
          "El Clima y Las Estaciones (Weather and Seasons)",
          "En el Banco y la Oficina de Correos (At the Bank and Post Office)",
        ],
      },
      {
        title: "Cultural Context and Advanced Interactions",
        content: [
          "Fiestas y Tradiciones (Festivals and Traditions)",
          "El Cuerpo y la Salud (Body and Health)",
          "Problemas y Soluciones (Problems and Solutions)",
          "En el Trabajo (At Work)",
        ],
      },
    ],
  },

  // Spanish B1 Level
  {
    level: "B1",
    lng: "Spanish",
    modules: [
      {
        title: "Intermediate Communication and Daily Life",
        content: [
          "Presentaciones y Relaciones Personales (Introductions and Personal Relationships)",
          "Vida Cotidiana (Daily Life)",
          "Descripciones y Narrativas (Descriptions and Narratives)",
          "Viajes y Turismo (Travel and Tourism)",
        ],
      },
      {
        title: "Practical Situations and Expressing Opinions",
        content: [
          "Compras y Consumo (Shopping and Consumption)",
          "La Salud y el Bienestar (Health and Well-being)",
          "Trabajo y Profesiones (Work and Professions)",
          "La Educación y el Aprendizaje (Education and Learning)",
        ],
      },
      {
        title: "Cultural Awareness and Advanced Interactions",
        content: [
          "Medios de Comunicación (Media and Communication)",
          "Problemas y Soluciones (Problems and Solutions)",
          "Fiestas y Tradiciones (Festivals and Traditions)",
          "Opiniones y Argumentación (Opinions and Arguments)",
        ],
      },
    ],
  },

  // Spanish B2 Level
  {
    level: "B2",
    lng: "Spanish",
    modules: [
      {
        title: "Advanced Communication and Social Issues",
        content: [
          "Relaciones Personales y Sociales (Personal and Social Relationships)",
          "Vida Urbana y Rural (Urban and Rural Life)",
          "Cultura y Ocio (Culture and Leisure)",
          "Tecnología y Sociedad (Technology and Society)",
        ],
      },
      {
        title: "Complex Situations and Professional Settings",
        content: [
          "Educación y Formación (Education and Training)",
          "El Mundo Laboral (The World of Work)",
          "Economía y Negocios (Economy and Business)",
          "Política y Sociedad (Politics and Society)",
        ],
      },
      {
        title: "Global Issues and Cultural Depth",
        content: [
          "Medio Ambiente y Sostenibilidad (Environment and Sustainability)",
          "Salud y Estilo de Vida (Health and Lifestyle)",
          "Literatura y Cine (Literature and Cinema)",
          "Historia y Geografía (History and Geography)",
        ],
      },
    ],
  },

  // Spanish C1 Level
  {
    level: "C1",
    lng: "Spanish",
    modules: [
      {
        title: "Advanced Communication and Professional Contexts",
        content: [
          "Comunicación Avanzada (Advanced Communication)",
          "Relaciones Laborales (Work Relationships)",
          "Redacción y Presentaciones (Writing and Presentations)",
          "Debates y Discusiones (Debates and Discussions)",
        ],
      },
      {
        title: "Cultural Proficiency and Critical Thinking",
        content: [
          "Literatura y Análisis (Literature and Analysis)",
          "Historia y Sociedad (History and Society)",
          "El Arte y la Cultura (Art and Culture)",
          "Crítica y Opinión (Critique and Opinion)",
        ],
      },
      {
        title: "Specialized Topics and Media",
        content: [
          "Ciencia y Tecnología (Science and Technology)",
          "Economía y Finanzas (Economy and Finance)",
          "Política y Actualidad (Politics and Current Affairs)",
          "Medio Ambiente y Sustentabilidad (Environment and Sustainability)",
        ],
      },
    ],
  },

  // Spanish C2 Level
  {
    level: "C2",
    lng: "Spanish",
    modules: [
      {
        title: "Mastery of Language and Nuanced Expression",
        content: [
          "Expresión Oral y Escrita (Oral and Written Expression)",
          "Matices y Registros del Lenguaje (Nuances and Language Registers)",
          "Estilos y Géneros Literarios (Literary Styles and Genres)",
          "Retórica y Persuasión (Rhetoric and Persuasion)",
        ],
      },
      {
        title: "In-Depth Analysis and Interpretation",
        content: [
          "Análisis Literario y Crítico (Literary and Critical Analysis)",
          "Estudios Culturales y Sociales (Cultural and Social Studies)",
          "Investigación y Documentación (Research and Documentation)",
          "Traducción y Interpretación (Translation and Interpretation)",
        ],
      },
      {
        title: "Professional and Academic Proficiency",
        content: [
          "Comunicación Profesional y Académica (Professional and Academic Communication)",
          "Conferencias y Publicaciones (Conferences and Publications)",
          "Innovación y Desarrollo (Innovation and Development)",
          "Proyectos y Presentaciones (Projects and Presentations)",
        ],
      },
    ],
  },
];

const SpanishCurr = () => (
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
        href="https://drive.google.com/file/d/1DetO_TYIoXarDw0poNOsihskaTbddKWE/view?usp=sharing"
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

export default SpanishCurr;