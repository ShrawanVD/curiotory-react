import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";
import { Helmet } from "react-helmet";
import fr from "../languagecss.module.css";
import { useState, useEffect } from "react";
import Rev from "../../LanguagesReviews/Rev";
import Carousel from "react-bootstrap/Carousel";
import ArabicCurr from "../../Curriculum/RussianCurr";
import axios from "axios";
import config from "../../../services/config";

function Russian() {
  const [proficiency, setProficiency] = useState("A1");
  const [method, setMethod] = useState("Corporate");
  const [fee, setFee] = useState(0);
  const language = "Russian";

  const feeMap = {};

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
            Learn Russian Online Easily With Qurocity's Expert Guidance
          </title>
          <meta
            name="description"
            content=" привет! Learn Russian online and advance your career with Qurocity's language learning app-  your essential tool, offering effective methods to accelerate your Russian language learning journey seamlessly.
            Join Online Russian Classes Now!
"
          />
          <meta
            name="keywords"
            content="learn Russian Online, learn russian online course, learn russian free, russian learning for beginners, russian learning online, russian learning app"
          />
          <link rel="canonical" href="https://qurocity.ai/learnrussian" />
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
            <h1>
              Learn<span className={fr.highlight}> Russian</span> Online Easily
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
              {" "}
              привет! Learn Russian online and advance your career with
              Qurocity's language learning app- your essential tool, offering
              effective methods to accelerate your Russian language learning
              journey seamlessly.
            </p>
            <p>Join Online Russian Classes Now!</p>
            {/* <p>
              Learning Russian opens up a wealth of career opportunities and
              cultural experiences, enhancing your global perspective. Fluency
              in Russian connects you to a vast network of speakers and deepens
              your understanding of a rich cultural heritage.
            </p> */}
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
                <span>Global Influence : </span>
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
                <span>Travel and Tourism : </span>
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
                <span>Cultural Richness : </span>
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
                <span>Career Opportunities : </span>
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
                <span>Intellectual Challenge : </span>
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
                  Learn essential vocabulary and phrases for daily interactions,
                  greetings, and introductions. Begin to understand Russian
                  pronunciation and basic grammar structures.
                </p>
                <p>
                  <strong>Cultural Understanding : </strong>
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
                  <strong>Professional Advantages : </strong>
                  Develop language skills for professional contexts, including
                  business meetings, negotiations, and correspondence in
                  Russian. Enhance career prospects in multinational
                  corporations, NGOs, and governmental organizations.
                </p>
                <p>
                  <strong>Literary and Artistic Exploration : </strong>
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
                  <strong>Advanced Language Proficiency : </strong>
                  Master complex grammar structures, including verb aspects,
                  cases, and advanced vocabulary. Engage fluently in debates,
                  discussions, and presentations on diverse topics in Russian.
                </p>
                <p>
                  <strong>Global Perspective : </strong>
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

export default Russian;
