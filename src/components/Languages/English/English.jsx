import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";
import fr from "../languagecss.module.css";
import { useState, useEffect } from "react";
import Rev from "../../LanguagesReviews/Rev";
import Carousel from "react-bootstrap/Carousel";
import ArabicCurr from "../../Curriculum/EnglishCurr";

function English() {
  const [proficiency, setProficiency] = useState("A1");
  const [method, setMethod] = useState("Corporate");
  const [fee, setFee] = useState(0);

  const feeMap = {
    A1: {
      Corporate: 24000,
      Student: 16000,
      Exam: 16000,
      Job: 21000,
      Travel: 16000,
      Hobby: 16000,
    },
    A2: {
      Corporate: 24000,
      Student: 16000,
      Exam: 16000,
      Job: 21000,
      Travel: 16000,
      Hobby: 16000,
    },
    B1: {
      Corporate: 28000,
      Student: 21000,
      Exam: 21000,
      Job: 25000,
      Travel: 21000,
      Hobby: 21000,
    },
    B2: {
      Corporate: 28000,
      student: 21000,
      Exam: 21000,
      Job: 25000,
      Travel: 21000,
      Hobby: 21000,
    },
    C1: {
      Corporate: 30000,
      Student: 23000,
      Exam: 23000,
      Job: 27000,
      Travel: 23000,
      Hobby: 23000,
    },
    C2: {
      Corporate: 30000,
      Student: 23000,
      Exam: 23000,
      Job: 27000,
      Travel: 23000,
      Hobby: 23000,
    },
  };

  const calculateFee = () => {
    const baseFee = feeMap[proficiency]?.[method] || 0;
    setFee(baseFee);
  };

  const proficiencyLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const trainingMethods = [
    "Corporate",
    "Student",
    "Exam",
    "Job",
    "Travel",
    "Hobby",
  ];

  const handleProficiencyChange = (value) => {
    setProficiency(proficiencyLevels[value]);
  };

  const handleMethodChange = (value) => {
    setMethod(trainingMethods[value]);
  };

  useEffect(() => {
    calculateFee();
  }, [proficiency, method]);
  return (
    <>
      <div className={fr.container}>
        {/* new navbar */}
        <Newnavbar />

        {/* language cover page */}
        <main className={fr.main}>
          <section className={fr.hero}>
            <h1>
              Indulge in the epitome of <br />
              <span className={fr.highlight}>English Culture</span>
            </h1>
            <hr className={fr.horizontalLine} />
            <div className={fr.stats}>
              <span>⭐ 4.5</span>
              <span>• 11,302 students</span>
              <span>
                • <a href="#">Average duration: 70Hrs</a>
              </span>
            </div>
            <p>
              Mastering English provides a global advantage in communication,
              career advancement, and cultural understanding. Fluency in English
              opens doors to diverse opportunities worldwide.
            </p>
          </section>
        </main>
      </div>

      {/* Why learn French section */}
      <div className={fr.learnFrenchContainer}>
        <div className={fr.learnFrenchHeading}>
          <h2>Why Learn English</h2>
        </div>
        <div className={fr.whyLearnFrench}>
          <div className={fr.whyLearnFrenchLeft}>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft1.png"
                alt="Diplomacy"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>Global Influence :</span>
                English is one of the most widely spoken languages globally,
                with over 1.5 billion speakers worldwide. Learning English opens
                doors to communication with people from diverse linguistic
                backgrounds and cultures.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft2.png"
                alt="Communication"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Business and Communication :
                </span>
                English is the international language of business, science,
                aviation, diplomacy, and tourism. Proficiency in English
                enhances career opportunities and facilitates effective
                communication in multinational workplaces.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft3.png"
                alt="Economic"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Media and Entertainment :
                </span>
                English-language media, including movies, music, and television
                shows, dominate global entertainment. Learning English provides
                access to a vast array of cultural content and enhances
                enjoyment and understanding of global pop culture.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft4.png"
                alt="Scholarship"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Cultural and Literary Heritage :
                </span>
                English literature has a rich tradition spanning from
                Shakespeare to contemporary authors. Learning English allows for
                a deeper appreciation of literary classics, modern literature,
                and global cultural trends.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft5.png"
                alt="Job"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Education and Academic Pursuits :
                </span>
                Many of the world's top universities and research institutions
                teach in English. Proficiency in English is essential for
                academic success, accessing scholarly publications, and
                participating in international academic exchanges.
              </p>
            </div>
          </div>
          <div className={fr.whyLearnFrenchRight}>
            <img
              src="/Languages/JOBS 1.png"
              alt="Main"
              className={fr.learnFrenchMainImage}
            />
          </div>
        </div>
      </div>

      {/* benefits of learning */}
      <div className={fr.benefitOfLearningSection}>
        <h2>Benefits of learning French language</h2>

        <Carousel
          interval={4000}
          controls={true}
          indicators={false}
          prevLabel={false}
          nextLabel={false}
        >
          <Carousel.Item>
            <div className={fr.benefitsLearningFrench}>
              <div className={fr.benefitLeft}>
                <img
                  src="/Languages/langBenefit1.png"
                  alt="Cultural"
                  className={fr.benefitLeftIcon}
                />
              </div>
              <div className={fr.benefitRight}>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>Basic Communication
                  :</strong>{" "}
                  Learn essential vocabulary, greetings, and phrases for everyday interactions. Develop fundamental skills in listening, speaking, reading, and writing in English.
                </p>
                <p>
                  <strong style={{ color: "#F4AD28" }}>
                  Cultural Understanding
                  :
                  </strong>{" "}
                  Gain insights into English-speaking cultures, traditions, and societal norms. Understand cultural nuances that shape interactions and daily life in English-speaking countries.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={fr.benefitsLearningFrench}>
              <div className={fr.benefitLeft}>
                <img
                  src="/Languages/langBenefit2.png"
                  alt="Cultural"
                  className={fr.benefitLeftIcon}
                />
                {/* <img
                src="/Languages/benefits12.png"
                alt="Global"
                className={fr.benefitLeftIcon}
              /> */}
              </div>
              <div className={fr.benefitRight}>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>Professional Development
                  :</strong>{" "}
                  Acquire language skills for professional contexts, including business meetings, presentations, and negotiations. Enhance career prospects in various industries and multinational companies where English is the primary language.
                </p>
                <p>
                  <strong style={{ color: "#F4AD28" }}>
                  Literary Exploration
                  :
                  </strong>{" "}
                  Explore a wide range of English literature, from classic novels to contemporary poetry and drama. Analyze themes, characters, and literary techniques to deepen language proficiency and cultural understanding.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={fr.benefitsLearningFrench}>
              <div className={fr.benefitLeft}>
                <img
                  src="/Languages/langBenefit3.png"
                  alt="Cultural"
                  className={fr.benefitLeftIcon}
                />
              </div>
              <div className={fr.benefitRight}>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                  Advanced Language Proficiency
                  :
                  </strong>{" "}
                  Master complex grammar structures, idiomatic expressions, and rhetorical devices. Engage fluently in debates, discussions, and academic discourse on diverse topics in English.
                </p>
                <p>
                  <strong style={{ color: "#F4AD28" }}>
                  Cross-Cultural Engagement
                  :
                  </strong>{" "}
                  Fully integrate into English-speaking communities by participating in cultural activities, volunteering, and networking. Develop meaningful connections and contribute to cross-cultural understanding and collaboration.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* calculator  */}
      <div>
        <div className={fr.calculatorContainer}>
          <div className={fr.calOptions}>
            <h3 className={fr.calheading}>CALCULATE FEES</h3>
            <p>
              Below selection will help you get an idea of the proficiency and
              duration and if you plan to train for a particular purpose
            </p>

            <div className={fr.optionGroup}>
              <label>Proficiency</label>
              <div className={fr.checkpoints}>
                {proficiencyLevels.map((level, index) => (
                  <div key={index} className={fr.checkpoint}>
                    {level}
                  </div>
                ))}
              </div>
              <input
                type="range"
                min="0"
                max={proficiencyLevels.length - 1}
                value={proficiencyLevels.indexOf(proficiency)}
                onChange={(e) => handleProficiencyChange(e.target.value)}
              />
            </div>

            <div className={fr.optionGroup}>
              <label>Method of Training</label>
              <div className={fr.checkpoints}>
                {trainingMethods.map((method, index) => (
                  <div key={index} className={fr.checkpoint}>
                    {method}
                  </div>
                ))}
              </div>
              <input
                type="range"
                min="0"
                max={trainingMethods.length - 1}
                value={trainingMethods.indexOf(method)}
                onChange={(e) => handleMethodChange(e.target.value)}
              />
            </div>
          </div>

          <div className={fr.calForm}>
            <div className={fr.result}>
              Your fee is <br />
              <span>{fee}</span>/-
            </div>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email-ID" required />
              <input type="text" placeholder="Contact No." required />
              <button type="submit">Schedule an enquiry</button>
            </form>
          </div>
        </div>
      </div>

      {/* curriculum */}
      <ArabicCurr />

      {/* reviews section */}
      <Rev />

      {/* company logo section */}
      <div className={fr.company}>
        <h2>Companies that Hire French Experts</h2>
        <div className={fr.scrollContainer}>
          <div className={`${fr.logos} ${fr.duplicate}`}>
            <img src="./Company/decat.png" alt="Decathlon" />
            <img src="./Company/capg.png" alt="Capgemini" />
            <img src="./Company/loreal.png" alt="Loreal" />
            <img src="./Company/air.png" alt="Air Liquide" />
            <img src="./Company/dassault.png" alt="Dassault Systems" />
            <img src="./Company/sch.png" alt="Schneider Electric" />
            {/* Duplicate logos for seamless scrolling */}
            <img src="./Company/decat.png" alt="Decathlon" />
            <img src="./Company/capg.png" alt="Capgemini" />
            <img src="./Company/loreal.png" alt="Loreal" />
            <img src="./Company/air.png" alt="Air Liquide" />
            <img src="./Company/dassault.png" alt="Dassault Systems" />
            <img src="./Company/sch.png" alt="Schneider Electric" />
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer2 />
    </>
  );
}

export default English;
