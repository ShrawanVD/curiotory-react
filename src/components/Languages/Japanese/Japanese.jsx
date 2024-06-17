import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";
import fr from "../languagecss.module.css";
import { useState, useEffect } from "react";
import Rev from "../../LanguagesReviews/Rev";
import Carousel from "react-bootstrap/Carousel";
import ArabicCurr from "../../Curriculum/FrenchCurr";

function Japanese() {
  const [proficiency, setProficiency] = useState("A1");
  const [method, setMethod] = useState("Corporate");
  const [fee, setFee] = useState(0);

  const feeMap = {
    N5: {
      Corporate: 36000,
      Student: 25000,
      Exam: 27000,
      Job: 28000,
      Travel: 27000,
      Hobby: 28000,
    },
    N4: {
      Corporate: 38000,
      Student: 25000,
      Exam: 27000,
      Job: 28000,
      Travel: 27000,
      Hobby: 28000,
    },
    N3: {
      Corporate: 40000,
      Student: 28000,
      Exam: 30000,
      Job: 32000,
      Travel: 30000,
      Hobby: 33000,
    },
    N2: {
      Corporate: 45000,
      student: 32000,
      Exam: 36000,
      Job: 36000,
      Travel: 36000,
      Hobby: 38000,
    },
    N1: {
      Corporate: 45000,
      Student: 32000,
      Exam: 36000,
      Job: 38000,
      Travel: 36000,
      Hobby: 38000,
    },
  };

  const calculateFee = () => {
    const baseFee = feeMap[proficiency]?.[method] || 0;
    setFee(baseFee);
  };

  const proficiencyLevels = ["N5", "N4", "N3", "N2", "N1"];
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
              <span className={fr.highlight}>Japanese Culture</span>
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
              Learning Japanese opens doors to a rich cultural tapestry and
              advanced technological innovations. Fluency in Japanese enhances
              career opportunities and personal interactions in Japan and
              globally.
            </p>
          </section>
        </main>
      </div>

      {/* Why learn French section */}
      <div className={fr.learnFrenchContainer}>
        <div className={fr.learnFrenchHeading}>
          <h2>Why Learn Japanese</h2>
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
                <span style={{ fontWeight: "bold" }}>
                  Cultural Fascination:
                </span>
                Japan boasts a rich cultural heritage spanning centuries,
                including traditional arts like tea ceremony, ikebana (flower
                arranging), and kabuki theater, alongside modern cultural
                phenomena like anime and manga. Learning Japanese allows for a
                deeper understanding and appreciation of Japanese culture.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft2.png"
                alt="Communication"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>Travel and Tourism:</span>
                Japan is a popular tourist destination known for its ancient
                temples, stunning gardens, and bustling cities like Tokyo and
                Kyoto. Knowing Japanese enhances travel experiences, enabling
                deeper interactions with locals and a richer exploration of the
                country.
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
                  Business Opportunities:
                </span>
                Japan is a global economic powerhouse with leading industries in
                technology, automotive, and finance. Proficiency in Japanese
                opens doors to career opportunities in Japanese companies and
                facilitates business negotiations and partnerships.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft4.png"
                alt="Scholarship"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>Academic Pursuits:</span>
                Japanese universities are renowned for their academic excellence
                and research contributions in fields like robotics, engineering,
                and medicine. Learning Japanese enables access to academic
                resources, research collaborations, and study abroad programs in
                Japan.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft5.png"
                alt="Job"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>Personal Growth:</span>
                Learning Japanese challenges and expands cognitive abilities,
                including memory retention, problem-solving skills, and cultural
                empathy. It promotes personal growth and enhances global
                perspective through exposure to a different linguistic and
                cultural framework.
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
        <h2>Benefits of learning japanese language</h2>

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
                  <strong style={{ color: "#EF4B2B" }}>
                    Basic Communication:
                  </strong>
                  Learn essential vocabulary and phrases for greetings,
                  introductions, and everyday interactions. Begin to grasp
                  Japanese pronunciation and basic grammar structures.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Cultural Understanding:
                  </strong>
                  Explore Japanese customs, etiquette, and societal norms. Gain
                  insights into Japanese festivals, traditions, and daily life
                  through language learning.
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
                  <strong style={{ color: "#EF4B2B" }}>
                    Professional Advantages:
                  </strong>
                  Develop language skills for professional contexts, including
                  job interviews, business meetings, and presentations in
                  Japanese. Enhance career prospects in international business
                  and cross-cultural environments.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Literary and Media Exploration:
                  </strong>
                  Dive deeper into Japanese literature, films, and media. Read
                  classic literature by authors like Haruki Murakami, watch
                  Japanese cinema, and engage with contemporary Japanese pop
                  culture.
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
                    Advanced Language Proficiency:
                  </strong>
                  Master complex grammar structures, including keigo (polite
                  language), honorifics, and advanced vocabulary. Engage
                  fluently in discussions, debates, and academic discourse in
                  Japanese on diverse topics.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Cultural Integration:
                  </strong>
                  Fully integrate into Japanese society by participating in
                  cultural activities, volunteering, and joining local
                  communities. Contribute to and benefit from cultural
                  exchanges, fostering cross-cultural understanding and global
                  citizenship.
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

export default Japanese;
