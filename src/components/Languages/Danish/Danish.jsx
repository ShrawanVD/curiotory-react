import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";
import fr from "../languagecss.module.css";
import { useState, useEffect } from "react";
import Rev from "../../LanguagesReviews/Rev";
import Carousel from "react-bootstrap/Carousel";
import ArabicCurr from "../../Curriculum/FrenchCurr";

function Danish() {
  const [proficiency, setProficiency] = useState("A1");
  const [method, setMethod] = useState("Corporate");
  const [fee, setFee] = useState(0);

  const feeMap = {
    A1: {
      Corporate: 36000,
      Student: 21000,
      Exam: 25000,
      Job: 25000,
      Travel: 21000,
      Hobby: 21000,
  },
  A2: {
      Corporate: 36000,
      Student: 21000,
      Exam: 25000,
      Job: 25000,
      Travel: 21000,
      Hobby: 21000,

  },
  B1: {

      Corporate: 38000,
      Student: 24000,
      Exam: 28000,
      Job: 28000,
      Travel: 24000,
      Hobby: 24000,

  },
  B2: {

      Corporate: 38000,
      student: 24000,
      Exam: 28000,
      Job: 28000,
      Travel: 24000,
      Hobby: 24000,

  },
  C1: {

      Corporate: 40000,
      Student: 27000,
      Exam: 31000,
      Job: 31000,
      Travel: 27000,
      Hobby: 27000,

  },
  C2: {

      Corporate: 40000,
      Student: 27000,
      Exam: 31000,
      Job: 31000,
      Travel: 27000,
      Hobby: 27000,

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
              <span className={fr.highlight}>Danish Culture</span>
            </h1>
            <hr className={fr.horizontalLine} />
            <div className={fr.stats}>
              <span>⭐ 4.5</span>
              <span>• 11,302 students</span>
              <span>• Average duration: 70Hrs</span>
            </div>
            <p>
              Learning Danish offers a gateway to Scandinavia's high-quality
              lifestyle and robust job market. Fluency in Danish enhances career
              prospects and enriches personal experiences in Denmark and beyond.
            </p>
          </section>
        </main>
      </div>

      {/* Why learn French section */}
      <div className={fr.learnFrenchContainer}>
        <div className={fr.learnFrenchHeading}>
          <h2>Why Learn Danish</h2>
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
                  Gateway to Scandinavian Culture:
                </span>
                Learning Danish provides insight into Scandinavian culture,
                traditions, and history, fostering a deeper appreciation for
                Denmark's contributions to literature, design, and social
                welfare.
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
                  Travel and Cultural Immersion:
                </span>
                Denmark attracts tourists with its picturesque landscapes,
                historical sites like Viking ruins, and modern architecture.
                Knowing Danish enriches travel experiences, allowing for deeper
                interactions with locals and understanding of Danish culture.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft3.png"
                alt="Economic"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>Quality of Life:</span>
                Denmark consistently ranks high in quality of life indexes due
                to its healthcare, education system, and work-life balance.
                Learning Danish enables integration into Danish society,
                fostering meaningful connections and a comfortable lifestyle.
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
                  Educational Excellence:
                </span>
                Danish universities offer a range of programs taught in English
                and Danish, known for their research excellence and innovation.
                Learning Danish can facilitate academic exchanges and access to
                scholarships in Denmark.
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
                  Business and Career Opportunities:
                </span>
                Denmark boasts a strong economy with global companies in
                industries such as renewable energy, pharmaceuticals, and
                shipping. Proficiency in Danish enhances career prospects and
                opens doors to job opportunities in Denmark and other Nordic
                countries.
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
        <h2>Benefits of learning danish language</h2>

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
                  greetings, and introductions. Begin to grasp Danish
                  pronunciation and basic grammar structures.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Cultural Understanding:
                  </strong>
                  Explore Danish customs, traditions, and social etiquette.
                  Understand cultural nuances that shape daily life in Denmark,
                  such as hygge (coziness) and sustainability practices.
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
                    Professional Networking:
                  </strong>
                  Develop language skills for professional environments,
                  including job interviews, networking events, and business
                  correspondence in Danish. Build confidence in conducting
                  business with Danish-speaking colleagues and clients.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Academic Pursuits:
                  </strong>
                  Enhance language proficiency for studying in Danish
                  universities or pursuing research collaborations. Access
                  academic resources, participate in seminars, and engage with
                  Danish scholars and peers.
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
                    Advanced Language Mastery:
                  </strong>
                  Master complex grammar structures, including verb
                  conjugations, conditional sentences, and passive voice. Engage
                  fluently in discussions, debates, and presentations on diverse
                  topics in Danish.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Integration and Community Engagement:
                  </strong>
                  Fully integrate into Danish society by participating in local
                  activities, volunteering, and joining cultural clubs.
                  Contribute to community initiatives and develop lasting
                  friendships with Danes.
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

export default Danish;
