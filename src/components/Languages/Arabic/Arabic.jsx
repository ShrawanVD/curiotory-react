import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";
import { Helmet } from "react-helmet";
import fr from "../languagecss.module.css";
import { useState, useEffect } from "react";
import Rev from "../../LanguagesReviews/Rev";
import Carousel from "react-bootstrap/Carousel";
import ArabicCurr from "../../Curriculum/ArabicCurr";
import axios from "axios";
import config from "../../../services/config";

function Arabic() {
  const [proficiency, setProficiency] = useState("A1");
  const [method, setMethod] = useState("Corporate");
  const [fee, setFee] = useState(0);
  const language = "Arabic";

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
    addGTM();
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
      language,
    };

    try {
      // Replace 'YOUR_BACKEND_API_URL' with your actual backend API endpoint

      const response = await axios.post(`${config.apiUrl}/enroll`, dataToSend);

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

  const addGTM = () => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-SXJ40ZYWNV";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SXJ40ZYWNV');
    `;
    document.head.appendChild(script2);
  };

  return (
    <>

    {/* Google Tag Manager (noscript) */}
    <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PDFXMX24"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <div className={fr.container}>
        {/* for meta tags  */}
        <Helmet>
          <title>
            Learn Arabic Online Easily With Qurocity's Expert Guidance
          </title>
          <meta
            name="description"
            content="Learn Arabic Online With India's leading language learning app Qurocity- which brings the best of two worlds education and technology to make language learning more precise and easy than ever!

Join Online Arabic Classes Now!
"
          />
          <meta
            name="keywords"
            content="learn arabic online, learn arabic language, arabic learning app, learning arabic for beginners, arabic learning for kids, arabic learning course free"
          />
          <link rel="canonical" href="https://qurocity.ai/learnarabic" />
          {/* Google Tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-16458367327"
          ></script>
          {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
          <script>
            {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16458367327');
    `}
          </script>
        </Helmet>

        {/* new navbar */}
        <Newnavbar />

        {/* language cover page */}
        <main className={fr.main}>
          <section className={fr.hero}>
            {/* <h1>
              Indulge in the epitome of <br />
              <span className={fr.highlight}>Arabic Culture</span>
            </h1> */}
            <h1>
              Learn<span className={fr.highlight}> Arabic</span> Online Easily
              <br /> With Qurocity's Expert Guidance
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
              Learn Arabic Online With India's leading language learning app
              Qurocity- which brings the best of two worlds education and
              technology to make language learning more precise and easy than
              ever!
            </p>
            <p>Join Online Arabic Classes Now!</p>
            {/* <p>
              Learning Arabic unlocks opportunities in diverse and rapidly
              growing markets across the Middle East and North Africa. Fluency
              in Arabic enhances career prospects and deepens cultural
              understanding in a rich and historically significant region.
            </p> */}
          </section>
        </main>
      </div>

      {/* Why learn French section */}
      <div className={fr.learnFrenchContainer}>
        <div className={fr.learnFrenchHeading}>
          <h2>Why Learn Arabic</h2>
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
                <span>Global Influence : </span>
                Arabic is one of the most widely spoken languages globally, with
                over 420 million native speakers across the Middle East, North
                Africa, and beyond. Learning Arabic opens doors to communication
                with diverse Arabic-speaking communities worldwide.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft2.png"
                alt="Communication"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span>Cultural Richness : </span>
                Arabic culture is renowned for its contributions to literature,
                poetry, art, and architecture. Learning Arabic allows for a
                deeper appreciation of classical Arabic literature, such as
                works by Al-Mutanabbi and Al-Jahiz, as well as contemporary
                Arabic music and cinema.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft3.png"
                alt="Economic"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span>Religious Significance : </span>
                Arabic is the language of the Quran, making it essential for
                Muslims worldwide. Understanding Arabic enhances comprehension
                of Islamic teachings, rituals, and religious texts, fostering
                spiritual growth and connection.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft4.png"
                alt="Scholarship"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span>Business and Diplomacy : </span>
                Arabic-speaking countries play significant roles in global
                trade, finance, and diplomacy. Proficiency in Arabic enhances
                career opportunities in sectors such as energy, international
                relations, journalism, and hospitality.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft5.png"
                alt="Job"
                className={fr.learnFrenchIcon}
              />
              <p>
                <span>Intellectual Challenge : </span>
                Learning Arabic offers cognitive benefits, including improved
                memory, problem-solving skills, and multitasking abilities.
                Mastering Arabic script (Arabic alphabet) and grammar structures
                provides a unique linguistic challenge.
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
        <h2>Benefits of learning Arabic language</h2>

        <Carousel
          interval={4000}
          controls={true}
          indicators={false}
          prevLabel={false}
          nextLabel={false}
          prevIcon={
            <svg
              className={fr.prevIcon}
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
              className={fr.nextIcon}
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
                  <strong>Basic Communication : </strong>
                  Learn essential vocabulary, greetings, and basic phrases for
                  daily interactions. Begin to understand Arabic script
                  (Alphabet) and basic grammar structures.
                </p>
                <p>
                  <strong>Cultural Understanding : </strong>
                  Explore Arabic customs, traditions, and societal norms. Gain
                  insights into Arabic hospitality, celebrations, and cultural
                  practices through language learning.
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
                  <strong>Professional Advancement : </strong>
                  Develop language skills for professional contexts, including
                  business meetings, negotiations, and correspondence in Arabic.
                  Enhance career prospects in multinational corporations, NGOs,
                  and governmental organizations.
                </p>
                <p>
                  <strong>Literary Exploration : </strong>
                  Dive deeper into Arabic literature, including classical and
                  contemporary works. Read Arabic poetry, novels, and scholarly
                  texts to deepen language proficiency and cultural
                  understanding.
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
                  <strong>Advanced Language Proficiency : </strong>
                  Master complex grammar structures, including verb
                  conjugations, morphological patterns, and rhetorical devices.
                  Engage fluently in debates, discussions, and academic
                  discourse in Arabic on diverse topics.
                </p>
                <p>
                  <strong>Cross-Cultural Engagement : </strong>
                  Fully integrate into Arabic-speaking communities by
                  participating in cultural events, volunteering, and engaging
                  with local initiatives. Build meaningful relationships and
                  contribute to cross-cultural understanding and collaboration.
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
      {/* <div className={fr.company}>
        <h2>Companies that Hire French Experts</h2>
        <div className={fr.scrollContainer}>
          <div className={`${fr.logos} ${fr.duplicate}`}>
            <img src="./Company/decat.png" alt="Decathlon" />
            <img src="./Company/capg.png" alt="Capgemini" />
            <img src="./Company/loreal.png" alt="Loreal" />
            <img src="./Company/air.png" alt="Air Liquide" />
            <img src="./Company/dassault.png" alt="Dassault Systems" />
            <img src="./Company/sch.png" alt="Schneider Electric" />
            <img src="./Company/decat.png" alt="Decathlon" />
            <img src="./Company/capg.png" alt="Capgemini" />
            <img src="./Company/loreal.png" alt="Loreal" />
            <img src="./Company/air.png" alt="Air Liquide" />
            <img src="./Company/dassault.png" alt="Dassault Systems" />
            <img src="./Company/sch.png" alt="Schneider Electric" />
          </div>
        </div>
      </div> */}

      {/* footer */}
      <Footer2 />
    </>
  );
}

export default Arabic;
