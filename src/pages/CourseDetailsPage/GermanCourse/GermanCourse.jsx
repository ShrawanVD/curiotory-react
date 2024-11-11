import { useState } from "react";
import buy from "../CourseDetails.module.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordian2 from "../../../components/Accordian2";
import Footer2 from "../../../components/Footer/Footer2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Reviewsection from "../../../components/Reviewcourse/Reviewcourse";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const GermanCourse = () => {
  // reviews
  const reviews = [
    {
      id: 1,
      text: "Qurocity is the best for learn Mandarin! I never thought I could learn a new language but this app makes it so easy. The lessons are really fun and engaging, and I can now speek basic Mandarin thanks to Qurocity!",
      name: "Amit Sharma ",
      rating: 5,
    },
    {
      id: 2,
      text: "I absolutely love Qurocity for Mandarin learning! The app is so user-friendly and the lessons are well designed. I feel much more confident in my Chinese-speaking abilities now. Highly recommend!",
      name: "Riya Patel ",
      rating: 4,
    },
    {
      id: 3,
      text: "Mandarin has always seemed like a difficult language, but Qurocity makes it accessible and enjoyable! The app's interactive features and cultural insights are really helpfull. Now I can order food in Mandarin!",
      name: "Karan Singh ",
      rating: 5,
    },
    {
      id: 4,
      text: "II'm learning Mandarin with Qurocity and it's been an amazing experience! The lessons are fun and easy to understand. I feel more confident in my language skills after using this app. Highly recommend it!",
      name: "Shreya Gupta ",
      rating: 4,
    },
    {
      id: 5,
      text: "Qurocity is great for learning Mandarin Chinese! The lessons are very informative and the app's interface is user friendly. I've been using it for a few weeks now and I can already see improvment in my language skills.",
      name: "Vikram Rao",
      rating: 4,
    },
    {
      id: 6,
      text: "I've always wanted to learn Mandarin and Qurocity has made it possible! The lessons are structured and easy to follow. I'm now able to have basic conversations in Mandarin. Highly recommended!",
      name: "Neha Gupta ",
      rating: 4,
    },
    {
      id: 7,
      text: "Qurocity is an amazing app for learning Mandarin! The lessons are really interactive and engaging. I've been using it for a while now and I'm impressed with how much I've learn. Definitely worth it!",
      name: "Rohan Patel",
      rating: 4,
    },
    {
      id: 8,
      text: "I'm so glad I found Qurocity for learning Mandarin Chinese! The lessons are well explained and the app is easy to navigate. I've been using it for a few months now and I'm already seeing progress in my language skills.",
      name: "Aisha Khan ",
      rating: 4,
    },
    {
      id: 9,
      text: "I've been using Qurocity to learn Mandarin and I'm really happy with my progress! The lessons are fun and interactive, and I feel more confident in my language abilities. Highly recommend it to anyone interested in learning Mandarin!",
      name: "Aryan Sharma ",
      rating: 4,
    },
    {
      id: 10,
      text: "Qurocity has been a game changer for me in learning Mandarin! The lessons are engaging and the app is easy to use. I've been recommend it to all my friends who want to learn Mandarin. Give it a try!",
      name: "Sneha Patel",
      rating: 4,
    },
  ];

  // --------------------------------------------------------------

  //  course highlights section
  const HighlightItem = ({ icon, title, description }) => {
    return (
      <div className={buy.highlight_item}>
        <span className={`material-icons ${buy.icon}`}>{icon}</span>
        <div className={buy.highlight_text}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  // modules section
  const modules = [
    {
      title: "Introduction to German Language",
      topics: [
        "Overview of German language and culture",
        "Basic greetings and expressions",
        "German alphabet pronunciation",
        "Simple sentence structure and word order",
      ],
      cnt: "4",
    },
    {
      title: "Alphabets and Introduction to Verbs",
      topics: [
        "German alphabet and sounds",
        "Personal pronouns",
        "The verb 'sein' (to be)",
        "The verb 'haben' (to have)",
        "The verb 'gehen' (to go)",
      ],
      cnt: "5",
    },
    {
      title: "Possessive Pronouns",
      topics: [
        "Usage of possessive pronouns",
        "Possessive article in Nominativ case",
        "Comparison with other pronouns",
        "Examples in sentences",
      ],
      cnt: "4",
    },
    {
      title: "Nominativ Case and Articles",
      topics: [
        "Understanding the Nominativ case",
        "Definite articles (der, die, das)",
        "Indefinite articles (ein, eine)",
      ],
      cnt: "3",
    },
    {
      title: "Ja/Nein Frage and W-Frage",
      topics: [
        "Formulating yes/no questions",
        "Formulating W-questions (who, what, where, etc.)",
      ],
      cnt: "2",
    },
    {
      title: "Nominativ and Accusative Case",
      topics: [
        "Differences between Nominativ and Accusative cases",
        "Accusative pronouns (mich, dich, ihn, etc.)",
        "Nominativ pronouns (ich, du, er, etc.)",
      ],
      cnt: "3",
    },
    {
      title: "Food and Drinks Vocabulary",
      topics: [
        "Common food and drink vocabulary",
        "Nouns related to food and drinks",
        "Plural forms of food-related nouns",
        "Phrases for ordering food",
      ],
      cnt: "4",
    },
    {
      title: "Modal Verbs (mögen, wollen, können)",
      topics: [
        "Usage of modal verbs: mögen (like), wollen (want), können (can)",
        "Conjugation of modal verbs",
        "Examples in sentences",
      ],
      cnt: "3",
    },
    {
      title: "Reflexive Verbs",
      topics: [
        "Introduction to reflexive verbs",
        "Common reflexive verbs (sich freuen, sich waschen)",
        "Reflexive pronouns (mich, dich, sich)",
        "Usage in sentences",
      ],
      cnt: "4",
    },
    {
      title: "Time Expressions",
      topics: [
        "Vocabulary and phrases related to time",
        "Expressions for telling time",
      ],
      cnt: "2",
    },
    {
      title: "Separable Verbs",
      topics: [
        "Understanding separable verbs (e.g., aufstehen, einkaufen)",
        "Common examples of separable verbs",
        "Placement of the prefix in sentences",
        "Usage in different tenses",
      ],
      cnt: "4",
    },
    {
      title: "Expressing Likes and Dislikes",
      topics: [
        "Phrases for expressing preferences",
        "Usage of adjectives in expressing likes and dislikes",
        "Common verbs for expressing opinions",
        "Examples in sentences",
      ],
      cnt: "4",
    },
    {
      title: "Making Plans Using Modal Verbs",
      topics: [
        "Making plans with modal verbs",
        "Conjugation and usage of modal verbs for future plans",
        "Examples of planning phrases",
      ],
      cnt: "3",
    },
    {
      title: "Imperative Forms of Verbs",
      topics: [
        "Formation of imperative forms (commands)",
        "Common imperative verbs (e.g., komm, mach)",
        "Usage in giving instructions",
        "Examples in sentences",
      ],
      cnt: "4",
    },
    {
      title: "A Day at Work + Introduction to Prepositions",
      topics: [
        "Vocabulary related to work",
        "Basic prepositions (in, an, auf, etc.)",
        "Describing daily routines",
        "Usage of prepositions in work contexts",
      ],
      cnt: "4",
    },
    {
      title: "Degrees of Comparison",
      topics: [
        "Comparative forms of adjectives",
        "Superlative forms of adjectives",
        "Usage in sentences to compare",
        "Examples of adjectives in comparison",
      ],
      cnt: "4",
    },
    {
      title: "Prepositions of Place",
      topics: [
        "Common prepositions of place (e.g., neben, vor, hinter)",
        "Usage of prepositions in describing locations",
        "Examples in sentences",
      ],
      cnt: "3",
    },
    {
      title: "Review of Grammar Topics",
      topics: [
        "Recap of key grammar points covered",
        "Common mistakes and corrections",
        "Practice exercises",
      ],
      cnt: "3",
    },
    {
      title: "Introduction to Past Tense Partizip II",
      topics: [
        "Formation of Partizip II (past participle)",
        "Usage in forming past tense",
        "Examples in sentences",
        "Common irregular verbs",
      ],
      cnt: "4",
    },
    {
      title: "Connectors und, oder, and aber",
      topics: [
        "Usage of connectors: und (and), oder (or), aber (but)",
        "Sentence structure with connectors",
        "Examples in sentences",
      ],
      cnt: "3",
    },
    {
      title: "Discussion of Accusative, Dativ and Wechsel Prepositions",
      topics: [
        "Overview of Accusative prepositions (für, ohne)",
        "Overview of Dativ prepositions (mit, nach)",
        "Overview of Wechsel prepositions (in, auf)",
      ],
      cnt: "3",
    },
    {
      title: "Studium und Beruf",
      topics: [
        "Vocabulary related to studies (Studium) and professions (Beruf)",
        "Discussing education and careers",
        "Common phrases for talking about jobs",
        "Examples of career-related sentences",
      ],
      cnt: "4",
    },
    {
      title: "Subordinate Clauses with Weil",
      topics: [
        "Formation of subordinate clauses with 'weil' (because)",
        "Usage in sentences",
        "Examples of complex sentences",
        "Common mistakes to avoid",
      ],
      cnt: "4",
    },
    {
      title: "Sätze Verbinden mit Denn",
      topics: [
        "Using 'denn' to connect sentences",
        "Examples and practice sentences",
        "Differences between 'denn' and 'weil'",
      ],
      cnt: "3",
    },
    {
      title: "Review of Grammar Topics",
      topics: [
        "Comprehensive review of all grammar topics covered",
        "Practice exercises",
        "Common mistakes and corrections",
      ],
      cnt: "3",
    },
  ];

  //   toggling between expand more and expand less
  const [showAll, setShowAll] = useState(false);
  const [expandedModuleIndex, setExpandedModuleIndex] = useState(null);

  const toggleModule = (index) => {
    setExpandedModuleIndex(expandedModuleIndex === index ? null : index);
  };

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleViewLess = () => {
    setShowAll(false);
  };

  // company section
  const [showAllProfiles1, setShowAllProfiles1] = useState(false);
  const [showAllProfiles2, setShowAllProfiles2] = useState(false);
  const [showAllProfiles3, setShowAllProfiles3] = useState(false);
  const [showAllProfiles4, setShowAllProfiles4] = useState(false);
  const [showAllProfiles5, setShowAllProfiles5] = useState(false);
  const [showAllProfiles6, setShowAllProfiles6] = useState(false);

  const toggleProfiles1 = () => {
    setShowAllProfiles1(!showAllProfiles1);
  };
  const toggleProfiles2 = () => {
    setShowAllProfiles2(!showAllProfiles2);
  };
  const toggleProfiles3 = () => {
    setShowAllProfiles3(!showAllProfiles3);
  };
  const toggleProfiles4 = () => {
    setShowAllProfiles4(!showAllProfiles4);
  };
  const toggleProfiles5 = () => {
    setShowAllProfiles5(!showAllProfiles5);
  };
  const toggleProfiles6 = () => {
    setShowAllProfiles6(!showAllProfiles6);
  };

  // tab section
  const [activeTab, setActiveTab] = useState("tab1");

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <div className={buy.tabContent}>
            <div className={buy.examContent}>
              <p>Top 5 Universities: </p>
              <ul>
                <li>1. LMU Munich </li>
                <li>2. Technical University of Munich </li>
                <li>3. University of Heidelberg </li>
                <li>4. Humboldt University of Berlin </li>
                <li>5. University of Freiburg </li>
              </ul>
            </div>
          </div>
        );
      case "tab2":
        return (
          <div className={buy.tabContent}>
            <p>
              The Goethe-Institut offers German proficiency exams that assess
              skills in reading, listening, writing, and speaking. The exams
              range from A1 (beginner) to C2 (proficient), following the Common
              European Framework of Reference for Languages (CEFR). Achieving
              higher levels on these exams can open up educational and
              professional opportunities in German-speaking countries, provide a
              standardized measure of language ability, enhance cultural
              integration, and support personal growth.
            </p>
          </div>
        );
      case "tab3":
        return (
          <div className={buy.tabContent}>
            <p>
              Being proficient in German greatly enhances your travel experience
              in Germany and other German-speaking countries. It simplifies
              communication, navigation, and cultural interactions, allowing you
              to understand signs, menus, and local customs more effectively.
              This proficiency makes your journey more seamless and enjoyable,
              especially in cities like Berlin, Munich, and Vienna, where
              English might not be as commonly spoken. It also proves
              advantageous in smaller towns and rural areas, ensuring a richer
              and more authentic experience.
            </p>
          </div>
        );
      default:
        return (
          <div className={buy.tabContent}>
            <p>Exam Tab Content</p>
          </div>
        );
    }
  };
  useEffect(() => {
    addGTM();
  }, []);
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
      <Helmet>
        <title>
          Learn German Online- Language Learning Classes by Qurocity
        </title>
        <meta
          name="description"
          content="Learn German online easily with Qurocity. A German language course which
 makes learning German easier than ever with fun and interactive sessions."
        />
        <meta
          name="keywords"
          content="german learning, learn german, german language app, german language
 course, german Learning classes, learn german online, german language learning"
        />
        <link rel="canonical" href="https://qurocity.ai/course/german" />
        {/* Google Ads Conversion Tracking Script */}
        <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-16458367327/a0t5CM_Xm9MZEN-C-6c9'});`}
        </script>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
      </Helmet>

      <div>
        {/* cover page  */}

        <div className={buy.coverContainer}>
          <header className={buy.header}>
            <div className={buy.authButtons}>
              <a href="https://qurocity.ai/lms">
                <button className={buy.loginButton}>Login</button>
              </a>
              {/* <button className={buy.signUpButton}>Sign Up</button> */}
            </div>
            <a href="/">
              <img
                src="/Index/logo-course.png"
                alt="Qurocity Logo"
                className={buy.logo}
              />
            </a>
          </header>
          <div className={buy.content}>
            <div
              className={buy.textSection}
              style={{
                marginLeft: "5rem",
              }}
            >
              <h1>
                Hallo! <br />
                Let's Simplify Your
                <br />
                <span className={buy.highlight}> German </span>
                Learning Journey!
              </h1>
              {/* <div className={buy.sticky}>
              <a href="/checkout"><button className={buy.learnButton}>Subsrcibe Now </button></a>
              </div> */}
            </div>
            <div className={buy.imageSection}>
              <img
                src="/mascot/croppedMascotNoBackground.png"
                alt="Course Cover"
                className={buy.coverImage}
              />
            </div>
          </div>
        </div>

        {/* subscribe button div */}
        <div
          className={buy.sticky}
          style={{
            marginLeft: "7rem",
          }}
        >
          <a href="/checkout/3">
            <button className={buy.learnButton}>Subsrcibe Now </button>
          </a>
        </div>

        {/* Course highlight section */}
        <div className={buy.highlight_outer}>
          <h1>Course Highlights</h1>
          <div className={buy.highlightCourseDetails}>
            <p>
              Elevate your German skills with Qurocity’s expertly crafted
              course. From foundational basics to advanced fluency, engage with
              interactive lessons and receive tailored feedback from seasoned
              instructors. Experience a seamless learning journey and achieve
              outstanding results. Join our German learning course now!
            </p>
          </div>
          <div className={buy.course_highlights}>
            <div className={buy.highlights_section}>
              <HighlightItem
                className={buy.item}
                icon="play_circle"
                title="25 hours of content"
                description="At your own schedule"
              />

              <HighlightItem
                className={buy.item}
                icon="trending_up"
                title="Practice Reading, writing and Speaking"
                description="At your own pace"
              />
              {/* <HighlightItem
                className={buy.item}
                icon="memory"
                title="Learn AI tools"
                description="For a competitive edge"
              /> */}
            </div>
            <div className={buy.highlights_section}>
              <HighlightItem
                className={buy.item}
                icon="schedule"
                title="Beginner Friendly"
                description="No prior Knowledge required"
              />

              <HighlightItem
                className={buy.item}
                icon="support_agent"
                title="Discover: Books, Travel Guide, Blogs"
                description="Read Anytime, Anywhere"
              />

              {/* <HighlightItem
                className={buy.item}
                icon="schedule"
                title="Beginner Friendly"
                description="No prior Knowledge required"
              /> */}
            </div>
            <div className={buy.highlights_section}>
              <HighlightItem
                className={buy.item}
                icon="smartphone"
                title="Mobile friendly"
                description="No laptop? No problem"
              />
              <HighlightItem
                className={buy.item}
                icon="construction"
                title="Boost Your Vocabulary, Proverbs, and Idioms"
                description="Sound like native"
              />
              {/* <HighlightItem
                className={buy.item}
                icon="workspace_premium"
                title="Certificate of Training"
                description="From Internshala, NSDC & IITM Pravartak"
              />
              <HighlightItem
                className={buy.item}
                icon="question_answer"
                title="Doubt clearing"
                description="Through Q&A forum"
              />
              <HighlightItem
                className={buy.item}
                icon="download"
                title="Downloadable content"
                description="With lifetime access"
              /> */}
            </div>
          </div>
        </div>

        {/* Modules section */}
        <div className={buy.syllabus_container}>
          {/* Top heading */}
          <h1>Training Syllabus</h1>

          {/* icons */}
          <div className={buy.highlights1}>
            <div className={buy.highlight_item2}>
              <span className={`material-icons ${buy.icon}`}>play_circle</span>
              <p>25 video tutorials</p>
            </div>
            <div className={buy.highlight_item2}>
              <span className={`material-icons ${buy.icon}`}>construction</span>
              <p>Blogs</p>
            </div>
            <div className={buy.highlight_item2}>
              <span className={`material-icons ${buy.icon}`}>memory</span>
              <p>Book Recommendation</p>
            </div>
          </div>

          {/* subheading */}
          <p className={buy.subheading}>
            After completing the training, you can also download videos for
            future reference
          </p>

          {/* modules */}
          <div className={buy.modules}>
            {modules
              .slice(0, showAll ? modules.length : 5)
              .map((module, index) => (
                <div key={index} className={buy.module}>
                  <div
                    className={buy.module_header}
                    onClick={() => toggleModule(index)}
                  >
                    <div className={buy.inside}>
                      <h2>{module.title}</h2>
                      <div className={buy.count}>
                        <span
                          className={`material-icons`}
                          style={{
                            color: "#6e6d6d",
                          }}
                        >
                          description
                        </span>
                        <h6>{module.cnt} Topics</h6>
                      </div>
                    </div>
                    <span className={`material-icons`}>
                      {expandedModuleIndex === index
                        ? "expand_less"
                        : "expand_more"}
                    </span>
                  </div>
                  {expandedModuleIndex === index && (
                    <ul className={buy.module_topics}>
                      {module.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>

          {/* button */}
          {showAll ? (
            <button className={buy.view_more} onClick={handleViewLess}>
              View Less
            </button>
          ) : (
            <button className={buy.view_more} onClick={handleViewMore}>
              View More
            </button>
          )}
        </div>

        {/*  course - video section */}
        <div className={buy.container11}>
          {/* left section */}
          <div className={buy.left_section}>
            {/* video */}
            <div className={buy.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/BJTxncjyyQI?si=O5plcg3tuPfHXNw-"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            {/* text */}
            <p className={buy.description}>
              Discover the Beauty of German Language and Culture
            </p>
          </div>

          {/* right section */}
          <div className={buy.right_section}>
            <h2 className={buy.heading}>Introduction to German Language</h2>
            <ul className={buy.highlights}>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className={buy.icon} />{" "}
                Easy payment method
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className={buy.icon} />{" "}
                Quality Hours of Course Content
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className={buy.icon} />{" "}
                Learn anytime, anywhere
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className={buy.icon} />{" "}
                24/7 instant email support
              </li>
            </ul>
            <a href="/checkout/3">
              <button className={buy.subscribeButton}>Subscribe Today</button>
            </a>
          </div>
        </div>

        {/* exam education travel section */}
        <div className={buy.multipleTabsContainer}>
          <div className={buy.tabsContainer}>
            <p
              className={activeTab === "tab1" ? buy.activeTab : buy.tab}
              onClick={() => setActiveTab("tab1")}
            >
              <i
                className={`fas fa-graduation-cap`}
                style={{ fontSize: "30px", marginRight: "7px" }}
              ></i>
              Education
            </p>
            <p
              className={activeTab === "tab2" ? buy.activeTab : buy.tab}
              onClick={() => setActiveTab("tab2")}
            >
              <i
                className={`fas fa-book-open `}
                style={{ fontSize: "30px", marginRight: "7px" }}
              ></i>
              Exam
            </p>
            <p
              className={activeTab === "tab3" ? buy.activeTab : buy.tab}
              onClick={() => setActiveTab("tab3")}
            >
              <i
                className={`fas fa-map-marked-alt`}
                style={{ fontSize: "30px", marginRight: "7px" }}
              ></i>
              Travel
            </p>
          </div>
          <div>{renderContent()}</div>
        </div>

        {/* company section */}
        <div className={buy.company}>
          <h1>
            Companies <span className={buy.yellow}>Hiring</span> German Experts
          </h1>
          <div className={buy.first_row}>
            {/* first company */}
            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "80%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/lufth.png"
                alt="company logo"
                // Lufthansa Group
              />
              <hr
                style={{
                  borderBottom: "1px solid black",
                }}
              />
              <Card.Body
                style={{
                  width: "100%",
                  // height: showAllProfiles1 ? "50rem" : "10rem",
                }}
              >
                <Card.Title className={buy.card_title}>Job Profiles</Card.Title>
                <ul>
                  {[
                    "German Language Flight Attendant",
                    "German Language Sales Representative",
                    "German Language Communication Specialist",
                  ]
                    .slice(0, showAllProfiles6 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              </Card.Body>
            </Card>

            {/* second company */}
            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "80%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/siemens.png"
                alt="company logo"
                // Siemens AG
              />
              <hr
                style={{
                  borderBottom: "1px solid black",
                }}
              />
              <Card.Body
                style={{
                  width: "100%",
                }}
              >
                <Card.Title className={buy.card_title}>Job Profiles</Card.Title>
                <ul>
                  {[
                    "German Language Instructor",
                    "German Technical Support Specialist",
                    "German Language Translator",
                  ]
                    .slice(0, showAllProfiles2 ? 3 : 3)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
                {/* <Button
                  className={buy.btn_company}
                  style={{
                    width: "50%",
                  }}
                  variant="primary"
                  onClick={toggleProfiles2}
                >
                  {showAllProfiles2 ? "View Less" : "View More"}
                </Button> */}
              </Card.Body>
            </Card>

            {/* third company */}
            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "60%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/basf.png"
                alt="company logo"
                // BASF SE
              />
              <hr
                style={{
                  borderBottom: "1px solid black",
                }}
              />
              <Card.Body
                style={{
                  width: "100%",
                }}
              >
                <Card.Title className={buy.card_title}>Job Profiles</Card.Title>
                <ul>
                  {[
                    "German Language Consultant",
                    "German Market Research Analyst ",
                    "German Language Localization Specialist",
                  ]
                    .slice(0, showAllProfiles3 ? 3 : 3)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              </Card.Body>
            </Card>
          </div>

          <div className={buy.second_row}>
            {/* fourth company */}
            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "80%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/volk.png"
                alt="company logo"
                // Volkswagen Group
              />
              <hr
                style={{
                  borderBottom: "1px solid black",
                }}
              />
              <Card.Body
                style={{
                  width: "100%",
                  // height: showAllProfiles1 ? "50rem" : "10rem",
                }}
              >
                <Card.Title className={buy.card_title}>Job Profiles</Card.Title>
                <ul>
                  {[
                    "German Language Trainer",
                    "German Language Interpreter",
                    "German Language Quality Analyst",
                  ]
                    .slice(0, showAllProfiles4 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              </Card.Body>
            </Card>

            {/* fifth company */}
            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "80%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/bayer.png"
                // Bayer AG
              />
              <hr
                style={{
                  borderBottom: "1px solid black",
                }}
              />
              <Card.Body
                style={{
                  width: "100%",
                  // height: showAllProfiles1 ? "50rem" : "10rem",
                }}
              >
                <Card.Title className={buy.card_title}>Job Profiles</Card.Title>
                <ul>
                  {[
                    "German Language Specialist",
                    "German Language Project Manager",
                    "German Language Customer Success Manager",
                  ]
                    .slice(0, showAllProfiles5 ? 3 : 3)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              </Card.Body>
            </Card>

            {/* sixth company */}
            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "60%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/bmw.png"
                alt="company logo"
                // BMW Group
              />
              <hr
                style={{
                  borderBottom: "1px solid black",
                }}
              />
              <Card.Body
                style={{
                  width: "100%",
                  // height: showAllProfiles1 ? "50rem" : "10rem",
                }}
              >
                <Card.Title className={buy.card_title}>Job Profiles</Card.Title>
                <ul>
                  {[
                    "German Language Specialist",
                    "Bilingual Customer Service Representative (German)",
                    "German Content Writer",
                  ]
                    .slice(0, showAllProfiles1 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* review section */}
        <Reviewsection />

        {/* <!-- FAQ SECTION --> */}
        <div className={buy.faqHeadingDivCss}>
          <h1
            className={buy.faq_heading}
            style={{
              color: "black",
              fontWeight: "600",
              fontSize: "2rem",
              texAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h1>
        </div>
        <div className={buy.body_faq}>
          <div className={buy.image_container}>
            <img src="/Index/faq.png" alt="here is an image" />
          </div>
          <div className={buy.layout}>
            <Accordian2 />
          </div>
        </div>

        {/* <!-- FAQ SECTION ENDS --> */}
      </div>

      <Footer2 />
    </>
  );
};

export default GermanCourse;
