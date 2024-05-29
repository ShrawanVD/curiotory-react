import { useState } from "react";
import fr from "./Frenchnew.module.css";

function Frenchnew() {
  const [proficiency, setProficiency] = useState('A1');
  const [duration, setDuration] = useState(3);
  const [method, setMethod] = useState('Corporate');
  const [fee, setFee] = useState(0);

  const feeMap = {
    A1: { 3: { Corporate: 36000, student: 21000, exam: 25000, job: 25000, travel: 21000, hobby: 21000 } },
    A2: { 3: { Corporate: 36000, student: 21000, exam: 25000, job: 25000, travel: 21000, hobby: 21000 }, 10: { student: 21000 } },
    B1: { 3: { Corporate: 38000, student: 24000, exam: 28000, job: 28000, travel: 24000, hobby: 24000 } },
    B2: { 3: { Corporate: 38000, student: 24000, exam: 28000, job: 28000, travel: 24000, hobby: 24000 } },
    C1: { 3: { Corporate: 40000, student: 27000, exam: 31000, job: 31000, travel: 27000, hobby: 27000 } },
    C2: { 3: { Corporate: 40000, student: 27000, exam: 31000, job: 31000, travel: 27000, hobby: 27000 } },
  };

  const calculateFee = () => {
    const baseFee = feeMap[proficiency]?.[duration]?.[method] || 0;
    setFee(baseFee);
  };

  const proficiencyLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const durationValues = [3, 6, 8, 10, 12, 14, 18];
  const trainingMethods = ['Corporate', 'student', 'exam', 'job', 'travel', 'hobby'];

  const handleProficiencyChange = (value) => {
    setProficiency(proficiencyLevels[value]);
  };

  const handleDurationChange = (value) => {
    setDuration(durationValues[value]);
  };

  const handleMethodChange = (value) => {
    setMethod(trainingMethods[value]);
  };
  return (
    <>
      <div className={fr.container}>
        {/* <header className={fr.header}>
          <div className={fr.headerLeft}>
            <img
              src="/Index/logo.png"
              alt="Curiotory Logo"
              className={fr.logo}
            />
          </div>
          <div className={fr.headerRight}>
            <a href="#" className={fr.studentPortal}>
              Student Portal {" >|"}
            </a>
          </div>
        </header> */}
        <header className={fr.header}>
          <div className={fr.logoContainer}>
            <img
              src="/Index/logo.png"
              alt="Curiotory Logo"
              className={fr.logo}
            />
          </div>
          <div className={fr.headerRight}>
            <a href="#" className={fr.studentPortal}>
              Student Portal
            </a>
          </div>
        </header>
        <div className={fr.imgline}>
          <img src="/navbar/navbarLine.png" />
        </div>
        <div className={fr.navList}>
          <nav className={fr.nav}>
            <a href="#">Solutions</a>
            <a href="#">Languages</a>
            <a href="#">Meet Our Tutors</a>
            <a href="#">Blogs</a>
            <a href="#">About us</a>
            <a href="#" className={fr.contactUs}>
              <span>Contact us</span>
            </a>
          </nav>
        </div>
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
        <div className={fr.benefitsLearningFrench}>
          <div className={fr.benefitLeft}>
            <img
              src="/Languages/benefits11.png"
              alt="Cultural"
              className={fr.benefitLeftIcon}
            />
            <img
              src="/Languages/benefits12.png"
              alt="Global"
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
      </div>

      {/* calulator  */}
      <div>
      <div className={fr.calculatorContainer}>
      <div className={fr.calOptions}>
        <h1 className={fr.calheading}>CALCULATE FEES</h1>
        <p>Below selection will help you get an idea of the proficiency and duration and if you plan to train for a particular purpose</p>
        
        <div className={fr.optionGroup}>
          <label>Proficiency</label>
          <div className={fr.checkpoints}>
            {proficiencyLevels.map((level) => (
              <div key={level} className={fr.checkpoint}>
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
            {durationValues.map((months) => (
              <div key={months} className={fr.checkpoint}>
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
            {trainingMethods.map((method) => (
              <div key={method} className={fr.checkpoint}>
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

        <button onClick={calculateFee}>Calculate Fee</button>

        <div className={fr.result}>
          Your fees is {fee}/-
        </div>
      </div>

      <div className={fr.calForm}>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email-ID" required />
          <input type="text" placeholder="Contact No." required />
          <button type="submit">Schedule an enquiry</button>
        </form>
      </div>
    </div>
      </div>
    </>
  );
}

export default Frenchnew;
