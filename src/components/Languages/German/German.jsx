import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";
import fr from "../languagecss.module.css";
import { useState, useEffect } from "react";
import Rev from "../../LanguagesReviews/Rev";
import Carousel from "react-bootstrap/Carousel";
import ArabicCurr from "../../Curriculum/GermanCurr";
import axios from 'axios';
function German() {
  const [proficiency, setProficiency] = useState("A1");
  const [method, setMethod] = useState("Corporate");
  const [fee, setFee] = useState(0);
  const language = "German";

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

  
// send the form data to DB
const [formData, setFormData] = useState({
  name: "",
  email: "",
  contactNo: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const dataToSend = {
    ...formData,
    fee,
    language
  };

  try {
    // Replace 'YOUR_BACKEND_API_URL' with your actual backend API endpoint
    
    const response = await axios.post("https://backendapi-1bfa.onrender.com/enroll", dataToSend);

    if (response.status === 200) {
      alert("Form submitted successfully");
      // Optionally, you can reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        contactNo: "",
      });
    } else {
      alert("Form submission failed");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Form submission failed");
  }
};
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
              <span className={fr.highlight}>German Culture</span>
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
              Learning German boosts career prospects and provides a gateway to
              one of the world's leading economies. Fluency in German enhances
              both professional opportunities and personal experiences across
              Europe and beyond.
            </p>
          </section>
        </main>
      </div>

      {/* Why learn French section */}
      <div className={fr.learnFrenchContainer}>
        <div className={fr.learnFrenchHeading}>
          <h2>Why Learn German</h2>
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
                  Business Opportunities:
                </span>{" "}
                German is the most widely spoken native language in Europe and
                the official language of Germany, Austria, Switzerland, and
                Liechtenstein. Learning German opens up opportunities for
                business and trade in these economically strong countries
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft2.png"
                alt="Communication"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>Travel and Tourism:</span>{" "}
                Germany attracts millions of tourists each year with its vibrant
                cities, picturesque landscapes, and historical landmarks.
                Knowing German enhances your travel experience, enabling deeper
                interactions with locals and a better understanding of the
                country's culture
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft3.png"
                alt="Economic"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>Cultural Enrichment:</span>{" "}
                German is the language of great classical composers like Bach,
                Beethoven, and Brahms, as well as philosophers such as Kant,
                Nietzsche, and Hegel. Learning German allows access to a rich
                cultural heritage spanning literature, music, art, and
                philosophy.
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
                  Education and Research:
                </span>{" "}
                Germany is renowned for its higher education institutions and
                offers numerous scholarships to international students.
                Proficiency in German can enhance academic and research
                opportunities in fields such as engineering, science, and
                humanities.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft5.png"
                alt="Job"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>Career Advantages:</span>{" "}
                Proficiency in German can boost your career prospects,
                especially in industries such as automotive engineering,
                renewable energy, and technology where German companies play a
                significant role globally. Many multinational corporations also
                seek German-speaking employees for their international
                operations.
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
        <h2>Benefits of learning german language</h2>

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
                    Gateway to Europe:
                  </strong>{" "}
                  German is not only spoken in Germany but also in Austria,
                  Switzerland, Luxembourg, and Liechtenstein. Learning German
                  gives you access to over 100 million native speakers in these
                  countries.
                </p>
                <p>
                  <strong style={{ color: "#F4AD28" }}>
                    Language of Innovation:
                  </strong>{" "}
                  Germany is a hub of technological innovation and research.
                  Learning German can provide access to cutting-edge
                  developments in engineering, manufacturing, and scientific
                  research.
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
                    Academic Excellence:
                  </strong>{" "}
                  Many academic journals and research publications are in
                  German. Proficiency in the language can open doors to
                  prestigious academic institutions and research opportunities.
                </p>
                <p>
                  <strong style={{ color: "#F4AD28" }}>
                    Career Opportunities:
                  </strong>{" "}
                  German companies are leaders in global trade, especially in
                  engineering, automotive, and financial sectors. Proficiency in
                  German enhances your employability and opens doors to
                  international career paths.
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
                  <strong style={{ color: "#EF4B2B" }}>Cultural Depth:</strong>{" "}
                  German literature, philosophy, and arts have made significant
                  contributions to world culture. Fluency in German allows you
                  to appreciate original works and engage with profound
                  philosophical ideas
                </p>
                <p>
                  <strong style={{ color: "#F4AD28" }}>
                    Global Influence:
                  </strong>{" "}
                  Germany plays a pivotal role in European politics, economics,
                  and culture. Mastery of German enables you to understand and
                  engage with global issues from a European perspective.
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email-ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Contact No."
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
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

export default German;
