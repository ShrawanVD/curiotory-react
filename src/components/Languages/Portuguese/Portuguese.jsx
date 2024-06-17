import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";
import fr from "../languagecss.module.css";
import { useState, useEffect } from "react";
import Rev from "../../LanguagesReviews/Rev";
import Carousel from "react-bootstrap/Carousel";
import ArabicCurr from "../../Curriculum/PortugueseCurr";
function Portuguese() {
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
              <span className={fr.highlight}>Portuguese Culture</span>
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
              Learning Portuguese opens doors to vibrant cultures and booming
              economies in Europe and South America. Fluency in Portuguese
              enhances career prospects and enriches personal experiences in
              diverse regions.
            </p>
          </section>
        </main>
      </div>

      {/* Why learn French section */}
      <div className={fr.learnFrenchContainer}>
        <div className={fr.learnFrenchHeading}>
          <h2>Why Learn Portuguese</h2>
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
                <span style={{ fontWeight: "bold" }}>Global Reach:</span>
                Portuguese is the sixth most spoken language in the world, with
                over 260 million speakers across countries like Brazil,
                Portugal, Mozambique, Angola, and more. Learning Portuguese
                opens doors to diverse cultures and communities globally.
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
                Portugal and Brazil attract millions of tourists annually with
                their stunning landscapes, vibrant cities, and UNESCO World
                Heritage sites. Knowing Portuguese enriches travel experiences
                and facilitates authentic interactions with locals.
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
                Brazil, the largest Portuguese-speaking country, is a major
                player in the global economy, particularly in agriculture,
                mining, and technology. Proficiency in Portuguese enhances
                opportunities for business partnerships and career advancement
                in these sectors.
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
                  Educational Opportunities:
                </span>
                Portuguese is an official language of organizations like the
                Community of Portuguese Language Countries (CPLP), offering
                scholarships and academic exchanges. Learning Portuguese opens
                doors to study opportunities in diverse fields.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft5.png"
                alt="Job"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>Cultural Enrichment:</span>
                Portuguese culture is rich in music (like bossa nova and fado),
                literature (with writers like José Saramago and Machado de
                Assis), and arts. Learning Portuguese allows for a deeper
                appreciation of these cultural treasures.
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
        <h2>Benefits of learning portuguese language</h2>

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
                  greetings, and introductions. Begin to grasp Portuguese
                  pronunciation and basic grammar structures.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Travel Readiness:
                  </strong>
                  Develop language skills to navigate travel situations
                  confidently, such as asking for directions, ordering food, and
                  shopping. Practice listening and speaking to improve
                  comprehension and fluency.
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
                    Cultural Immersion:
                  </strong>
                  Dive deeper into Portuguese-speaking cultures through
                  literature, music, and traditions. Explore Brazilian and
                  Portuguese festivals, cuisine, and customs to gain insights
                  into cultural norms and social dynamics.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Professional Advantages:
                  </strong>
                  Expand vocabulary and improve language proficiency for
                  professional contexts. Enhance communication skills for
                  business meetings, negotiations, and presentations in
                  Portuguese-speaking environments.
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
                    Advanced Language Skills:
                  </strong>
                  Master complex grammar structures, including verb
                  conjugations, subjunctive mood, and conditional sentences.
                  Engage in discussions, debates, and presentations in
                  Portuguese on diverse topics.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Academic and Research Opportunities:
                  </strong>
                  Gain proficiency to study or conduct research in
                  Portuguese-speaking countries. Access academic resources,
                  attend lectures, and collaborate with peers and professors in
                  Portuguese.
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

export default Portuguese;
