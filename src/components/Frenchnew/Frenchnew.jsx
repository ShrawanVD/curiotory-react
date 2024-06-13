import { useState, useEffect } from "react";
import fr from "./Frenchnew.module.css";
import Newnavbar from "../NewNavbar/Newnavbar";
import Curriculum from "../Curriculum/Curriculum";
import Reviewcourse from "../Reviewcourse/Reviewcourse";
import Carousel from "react-bootstrap/Carousel";
import Footer2 from "../Footer/Footer2";

function Frenchnew() {
  const [proficiency, setProficiency] = useState("A1");
  const [duration, setDuration] = useState(3);
  const [method, setMethod] = useState("Corporate");
  const [fee, setFee] = useState(0);

  const feeMap = {
    A1: {
      3: {
        Corporate: 36000,
        Student: 21000,
        Exam: 25000,
        Job: 25000,
        Travel: 21000,
        Hobby: 21000,
      },
      10: {
        Corporate: 10000,
        Student: 21000,
        Exam: 25000,
        Job: 25000,
        Travel: 21000,
        Hobby: 21000,
      },
    },
    A2: {
      3: {
        Corporate: 36000,
        Student: 21000,
        Exam: 25000,
        Job: 25000,
        Travel: 21000,
        Hobby: 21000,
      },
      10: { Student: 21000 },
    },
    B1: {
      3: {
        Corporate: 38000,
        Student: 24000,
        Exam: 28000,
        Job: 28000,
        Travel: 24000,
        Hobby: 24000,
      },
    },
    B2: {
      3: {
        Corporate: 38000,
        student: 24000,
        Exam: 28000,
        Job: 28000,
        Travel: 24000,
        Hobby: 24000,
      },
    },
    C1: {
      3: {
        Corporate: 40000,
        Student: 27000,
        Exam: 31000,
        Job: 31000,
        Travel: 27000,
        Hobby: 27000,
      },
    },
    C2: {
      3: {
        Corporate: 40000,
        Student: 27000,
        Exam: 31000,
        Job: 31000,
        Travel: 27000,
        Hobby: 27000,
      },
    },
  };

  const calculateFee = () => {
    const baseFee = feeMap[proficiency]?.[duration]?.[method] || 0;
    setFee(baseFee);
  };

  const proficiencyLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const durationValues = [3, 6, 8, 10, 12, 14, 18];
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

  const handleDurationChange = (value) => {
    setDuration(durationValues[value]);
  };

  const handleMethodChange = (value) => {
    setMethod(trainingMethods[value]);
  };

  useEffect(() => {
    calculateFee();
  }, [proficiency, duration, method]);

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
              <span className={fr.highlight}>French Culture</span>
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
              Mastering French elevates both career and personal life, offering
              diverse opportunities in India and abroad. Fluency in French
              enhances career prospects and enriches personal experiences
              globally.
            </p>
          </section>
        </main>
      </div>

      {/* Why learn French section */}
      <div className={fr.learnFrenchContainer}>
        <div className={fr.learnFrenchHeading}>
          <h2>Why Learn French</h2>
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
                French, official in 29 countries and key in UN, EU, and Red
                Cross, opens doors in diplomacy, business, and NGOs.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft2.png"
                alt="Communication"
                className={fr.learnFrenchIcon}
              />
              <p>
                Fluent French ensures seamless communication and enriched
                experiences in Francophone regions.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft3.png"
                alt="Economic"
                className={fr.learnFrenchIcon}
              />
              <p>
                French proficiency unlocks markets in France, Africa, bolstering
                economic.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft4.png"
                alt="Scholarship"
                className={fr.learnFrenchIcon}
              />
              <p>
                French proficiency facilitates scholarships, studies in France,
                broadening horizons.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft5.png"
                alt="Job"
                className={fr.learnFrenchIcon}
              />
              <p>
                Multinational demand for French speakers spans sectors like
                tourism, IT.
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
                  <strong style={{ color: "#EF4B2B" }}>Cultural Riches:</strong>{" "}
                  Learning French opens doors to France&apos;s rich culture,
                  literature, and arts.
                </p>
                <p>
                  <strong style={{ color: "#F4AD28" }}>
                    Global Opportunities:
                  </strong>{" "}
                  French is spoken in many countries, enhancing career prospects
                  globally.
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
                  <strong style={{ color: "#EF4B2B" }}>Travel Ease:</strong>{" "}
                  Navigate through French-speaking regions with confidence,
                  making travel more enjoyable.
                </p>
                <p>
                  <strong style={{ color: "#F4AD28" }}>
                    Intellectual Stimulation:
                  </strong>{" "}
                  Mastering a new language sharpens cognitive skills and boosts
                  brain health.
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
                    Language of Diplomacy:
                  </strong>{" "}
                  French, pivotal in global diplomacy, offers a unique edge in
                  diverse professions.
                </p>
                <p>
                  <strong style={{ color: "#F4AD28" }}>
                    Historical Legacy:
                  </strong>{" "}
                  French, rooted in Latin, unveils centuries of European
                  cultural evolution.
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
              <label>Duration in Months</label>
              <div className={fr.checkpoints}>
                {durationValues.map((months, index) => (
                  <div key={index} className={fr.checkpoint}>
                    {months}
                  </div>
                ))}
              </div>
              <input
                type="range"
                min="0"
                max={durationValues.length - 1}
                value={durationValues.indexOf(duration)}
                onChange={(e) => handleDurationChange(e.target.value)}
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
      <Curriculum />

      {/* reviews section */}
      <Reviewcourse />

      {/* company logo section */}
      <div className={fr.company}>
        <h2>COMPANIES THAT HIRE FRENCH EXPERTS</h2>
        <div className={fr.logos}>
                  <img src="./Company/decat.png" alt="Decathlon" />
                  <img src="./Company/capg.png" alt="Capgemini" />
                  <img src="./Company/loreal.png" alt="Loreal" />
                  <img src="./Company/air.png" alt="Air Liquide" />
                  <img src="./Company/dassault.png" alt="Dassault Systems" />
                  <img src="./Company/sch.png" alt="Schneider Electric" />
        </div>
      </div>

      {/* footer */}
      <Footer2 />
    </>
  );
}

export default Frenchnew;
