import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";
import fr from "../languagecss.module.css";
import { useState, useEffect } from "react";
import Rev from "../../LanguagesReviews/Rev";
import Carousel from "react-bootstrap/Carousel";
import ArabicCurr from "../../Curriculum/MandCurr";
import axios from 'axios';
function Mandarin() {
  const [proficiency, setProficiency] = useState("A1");
  const [method, setMethod] = useState("Corporate");
  const [fee, setFee] = useState(0);
  const language = "Mandarin";

  const feeMap = {
    HSK1: {
      Corporate: 36000,
      Student: 25000,
      Exam: 27000,
      Job: 28000,
      Travel: 27000,
      Hobby: 28000,
  },
  HSK2: {
      Corporate: 38000,
      Student: 25000,
      Exam: 27000,
      Job: 28000,
      Travel: 27000,
      Hobby: 27000,

  },
  HSK3: {

      Corporate: 40000,
      Student: 28000,
      Exam: 30000,
      Job: 32000,
      Travel: 30000,
      Hobby: 33000,

  },
  HSK4: {

      Corporate: 42000,
      student: 30000,
      Exam: 33000,
      Job: 33000,
      Travel: 33000,
      Hobby: 36000,

  },
  HSK5: {

      Corporate: 45000,
      Student: 32000,
      Exam: 36000,
      Job: 38000,
      Travel: 36000,
      Hobby: 38000,

  },
  HSK6: {

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

  const proficiencyLevels = ["HSK1", "HSK2", "HSK3", "HSK4", "HSK5", "HSK6"];
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
              <span className={fr.highlight}>Mandarin Culture</span>
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
              Learning Mandarin connects you with one of the world's largest
              economies and a rich cultural heritage. Fluency in Mandarin
              enhances career prospects and personal experiences across China
              and beyond
            </p>
          </section>
        </main>
      </div>

      {/* Why learn French section */}
      <div className={fr.learnFrenchContainer}>
        <div className={fr.learnFrenchHeading}>
          <h2>Why Learn Mandarin</h2>
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
                Mandarin Chinese is the most spoken language in the world with
                over a billion native speakers. Learning Mandarin opens doors to
                communication with people not only in China but also in Taiwan,
                Singapore, Malaysia, and among Chinese diaspora communities
                worldwide.
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
                China is a popular tourist destination with its ancient
                landmarks like the Great Wall and Forbidden City, vibrant cities
                such as Beijing and Shanghai, and picturesque landscapes.
                Knowing Mandarin enriches travel experiences, enabling deeper
                interactions with locals and cultural immersion.
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
                China is the world's second-largest economy and a major player
                in global trade and manufacturing. Proficiency in Mandarin
                enhances career prospects in diverse industries such as finance,
                technology, tourism, and international business.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft4.png"
                alt="Scholarship"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span style={{ fontWeight: "bold" }}>Cultural Richness:</span>
                Mandarin Chinese is intertwined with a rich cultural heritage
                spanning over 5,000 years. Learning Mandarin allows for a deeper
                understanding of Chinese history, philosophy, literature
                (including classical works), art, and traditions.
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
                Learning Mandarin challenges the mind and expands cognitive
                abilities, including memory retention, problem-solving skills,
                and cultural empathy. It promotes personal growth and enhances
                global perspective through exposure to a different linguistic
                and cultural framework.
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
        <h2>Benefits of learning mandarin language</h2>

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
                  Learn essential vocabulary, greetings, and basic phrases for
                  daily interactions. Begin to grasp Mandarin pronunciation
                  (pinyin) and basic sentence structures.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Cultural Understanding:
                  </strong>
                  Explore Chinese customs, etiquette, and societal norms. Gain
                  insights into Chinese festivals, traditions, and everyday life
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
                  business meetings, negotiations, and presentations in
                  Mandarin. Enhance career prospects in multinational
                  corporations, Chinese companies, and diplomatic services.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Literary and Media Exploration:
                  </strong>
                  Dive deeper into Chinese literature, films, and media. Read
                  classic Chinese literature, watch Chinese cinema, and engage
                  with contemporary Chinese culture, including pop culture
                  trends.
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
                  Master complex grammar structures, including advanced
                  vocabulary, idiomatic expressions, and formal writing (hanzi
                  characters). Engage fluently in discussions, debates, and
                  academic discourse in Mandarin on diverse topics.
                </p>
                <p>
                  <strong style={{ color: "#EF4B2B" }}>
                    Cultural Integration:
                  </strong>
                  Fully integrate into Chinese society by participating in
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

export default Mandarin;
