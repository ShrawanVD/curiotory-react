import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";
import { Helmet } from "react-helmet";
import fr from "../languagecss.module.css";
import { useState, useEffect } from "react";
import Rev from "../../LanguagesReviews/Rev";
import Carousel from "react-bootstrap/Carousel";
import ArabicCurr from "../../Curriculum/DanishCurr";
import axios from "axios";
import config from "../../../services/config";

function Danish() {
  const [proficiency, setProficiency] = useState("A1");
  const [method, setMethod] = useState("Corporate");
  const [fee, setFee] = useState(0);
  const language = "Danish";

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
            Learn Danish Online Easily With Qurocity's Expert Guidance
          </title>
          <meta
            name="description"
            content="Learn Danish Online with India's best language learning app, Qurocity—where the synergy of education and technology ensures a seamless learning experience. Mastering Danish is as effortless as enjoying a piece of Danish pastry!

Join Online Danish Classes Now!
"
          />
          <meta
            name="keywords"
            content="learn dutch online, learn dutch for free, learn dutch language, learn dutch for beginners, dutch learning app, dutch learning course"
          />
          <link rel="canonical" href="https://qurocity.ai/learndanish" />
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
              Learn<span className={fr.highlight}> Danish</span> Online Easily
              <br /> With Qurocity's Expert Guidance
            </h1>
            <hr className={fr.horizontalLine} />
            <div className={fr.stats}>
              <span>⭐ 4.5</span>
              <span>• 11,302 students</span>
              <span>• Average duration: 70Hrs</span>
            </div>
            <p>
              Learn Danish Online with India's best language learning app,
              Qurocity—where the synergy of education and technology ensures a
              seamless learning experience. Mastering Danish is as effortless as
              enjoying a piece of Danish pastry!
            </p>
            <p>Join Online Danish Classes Now!
            </p>
            {/* <p>
              Learning Danish offers a gateway to Scandinavia's high-quality
              lifestyle and robust job market. Fluency in Danish enhances career
              prospects and enriches personal experiences in Denmark and beyond.
            </p> */}
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
                <span>Gateway to Scandinavian Culture : </span>
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
                <span>Travel and Cultural Immersion : </span>
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
                <span>Quality of Life : </span>
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
                <span>Educational Excellence : </span>
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
                <span>Business and Career Opportunities : </span>
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
                  greetings, and introductions. Begin to grasp Danish
                  pronunciation and basic grammar structures.
                </p>
                <p>
                  <strong>Cultural Understanding : </strong>
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
                  <strong>Professional Networking : </strong>
                  Develop language skills for professional environments,
                  including job interviews, networking events, and business
                  correspondence in Danish. Build confidence in conducting
                  business with Danish-speaking colleagues and clients.
                </p>
                <p>
                  <strong>Academic Pursuits : </strong>
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
                  <strong>Advanced Language Mastery : </strong>
                  Master complex grammar structures, including verb
                  conjugations, conditional sentences, and passive voice. Engage
                  fluently in discussions, debates, and presentations on diverse
                  topics in Danish.
                </p>
                <p>
                  <strong>Integration and Community Engagement : </strong>
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

export default Danish;
