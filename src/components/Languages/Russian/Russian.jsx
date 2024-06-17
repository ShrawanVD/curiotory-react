import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";
import fr from "../languagecss.module.css";
import { useState, useEffect } from "react";
import Rev from "../../LanguagesReviews/Rev";
import Carousel from "react-bootstrap/Carousel";
import ArabicCurr from "../../Curriculum/FrenchCurr";

function Russian() {
  const [proficiency, setProficiency] = useState("A1");
  const [method, setMethod] = useState("Corporate");
  const [fee, setFee] = useState(0);

  const feeMap = {
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
              <span className={fr.highlight}>Russian Culture</span>
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
              Learning Russian opens up a wealth of career opportunities and
              cultural experiences, enhancing your global perspective. Fluency
              in Russian connects you to a vast network of speakers and deepens
              your understanding of a rich cultural heritage.
            </p>
          </section>
        </main>
      </div>

      {/* Why learn French section */}
      <div className={fr.learnFrenchContainer}>
        <div className={fr.learnFrenchHeading}>
          <h2>Why Learn Russian</h2>
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
                <span style={{ fontWeight: "bold" }}>Global Influence:</span>
                Russian is one of the most widely spoken languages globally,
                with over 260 million speakers across Russia, Belarus,
                Kazakhstan, and other former Soviet states. Learning Russian
                enhances communication with a significant portion of the world's
                population.
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
                Russia, with its vast landscapes, historical cities like Moscow
                and St. Petersburg, and unique cultural heritage, attracts
                millions of tourists annually. Knowing Russian enriches travel
                experiences and fosters authentic interactions with locals.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft3.png"
                alt="Economic"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>Cultural Richness:</span>
                Russian culture is renowned for its literature, including works
                by Tolstoy, Dostoevsky, and Chekhov, as well as its
                contributions to classical music, ballet, and cinema. Learning
                Russian allows for a deeper appreciation of these cultural
                treasures.
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
                  Career Opportunities:
                </span>
                Proficiency in Russian opens doors to diverse career paths,
                especially in sectors such as diplomacy, international
                relations, journalism, and business. Russian is a critical
                language for careers in global politics and economics.
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
                  Intellectual Challenge:
                </span>
                Learning Russian offers intellectual stimulation through its
                complex grammar, rich vocabulary, and Cyrillic script. Mastering
                Russian provides cognitive benefits and enhances analytical
                thinking skills.
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
        <h2>Benefits of learning russian language</h2>

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
                  Learn essential vocabulary and phrases for daily interactions,
                  greetings, and introductions. Begin to understand Russian
                  pronunciation and basic grammar structures.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Cultural Understanding:
                  </strong>
                  Explore Russian customs, traditions, and social etiquette.
                  Gain insights into Russian history, holidays, and cultural
                  norms that shape contemporary Russian society.
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
                  business meetings, negotiations, and correspondence in
                  Russian. Enhance career prospects in multinational
                  corporations, NGOs, and governmental organizations.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Literary and Artistic Exploration:
                  </strong>
                  Dive deeper into Russian literature, music, and arts. Read
                  iconic works in their original language, appreciate Russian
                  classical music compositions, and enjoy Russian cinema and
                  theater.
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
                  Master complex grammar structures, including verb aspects,
                  cases, and advanced vocabulary. Engage fluently in debates,
                  discussions, and presentations on diverse topics in Russian.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Global Perspective:
                  </strong>
                  Gain a broader understanding of global issues from a Russian
                  perspective. Analyze political developments, economic trends,
                  and cultural influences in Russia and Russian-speaking
                  countries.
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

export default Russian;
