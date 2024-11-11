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

const EnglishCourse = () => {
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
      title: "Start a Comprehensive English Language Journey",
      topics: [
        "Comprehensive Introduction",
        "Self-Introduction",
        "Daily Routines",
        "Fundamentals",
        "Parts of Speech",
        "Advanced Parts of Speech",
      ],
      cnt: "6",
    },
    {
      title: "Pronouns, Subjects, and Vocabulary",
      topics: [
        "Pronouns",
        "Relative and Interrogative Pronouns",
        "Reflexive and Indefinite Pronouns",
        "Subjects and Objects",
        "Simple and Compound Subjects",
        "Vowels and Consonants",
        "Vocabulary Expansion",
      ],
      cnt: "7",
    },
    {
      title: "Pronouns, Adjectives, Articles, and Pronunciation",
      topics: [
        "Pronouns",
        "Adjectives",
        "Advanced Adjectives",
        "Quality, Quantity, Superlative, and Comparative Adjectives",
        "Articles",
        "Using 'The'",
        "Advanced 'The'",
        "Pronunciation of 'T' and 'D'",
      ],
      cnt: "8",
    },
    {
      title: "Pronunciation Guide, Idioms, and Communication Tips",
      topics: [
        "Tricky Words",
        "Advanced Pronunciation",
        "Idioms and Phrases",
        "Communication Tips",
        "Common Grammar Errors",
      ],
      cnt: "5",
    },
    {
      title: "Mastering English Verbs",
      topics: [
        "Verbs and Tenses",
        "Action, Linking, and Auxiliary Verbs",
        "Helping Verbs 'Is,' 'Am,' 'Are'",
        "Helping Verbs 'Was' and 'Were'",
        "Helping Verbs 'Has,' 'Have,' 'Had'",
        "Auxiliary Verbs 'Do,' 'Does,' 'Did'",
      ],
      cnt: "6",
    },
    {
      title: "Mastering Modal Verbs",
      topics: [
        "Modal Verbs 'Can'",
        "Modal Verbs 'Could'",
        "Modal Verbs 'Will'",
        "Modal Verbs 'Would'",
        "Modal Verbs 'Shall' and 'Should'",
        "Modal Verbs 'May,' 'Might,' 'Must'",
      ],
      cnt: "6",
    },
    {
      title: "Mastering Adverbs and 'To + Verb' Construction",
      topics: [
        "Adverbs",
        "Types of Adverbs",
        "Adverb Placement",
        "Adverb Formation",
        "'To + Verb' Construction",
      ],
      cnt: "5",
    },
    {
      title: "Mastering English Prepositions",
      topics: [
        "Prepositions",
        "'Into' vs. 'Inside' and 'With' vs. 'By'",
        "Preposition 'From'",
        "'Between' vs. 'Among'",
        "'Through' vs. 'Across,' 'Onto' vs. 'Upon'",
        "'Above' vs. 'Over' and 'To'",
      ],
      cnt: "6",
    },
    {
      title: "Differentiating English Prepositions",
      topics: [
        "'About' vs. 'After'",
        "'Against,' 'Around,' 'Along,' and 'Before'",
        "'Beneath,' 'Beside,' and 'Beyond'",
        "'During,' 'For,' 'Near,' 'Next to'",
        "'Out' vs. 'Outside,' 'Past,' 'Towards'",
        "'Within' vs. 'Without,' 'Behind,' 'Throughout,' 'In Spite Of'",
      ],
      cnt: "6",
    },
    {
      title: "Idioms, Prepositions, Conjunctions, and Paired Words",
      topics: [
        "Idioms",
        "Prepositions and Conjunctions",
        "Paired Words",
        "More Paired Words",
        "Even More Paired Words",
        "Conjunctions for Time, Cause, and Reason",
      ],
      cnt: "6",
    },
    {
      title: "Conjunctions and Interjections",
      topics: [
        "Conjunctions",
        "Differentiating Phrases and Clauses",
        "More Conjunctions",
        "Conjunctions 'Even Though,' 'As If,' 'Otherwise,' 'If,' 'Likewise,' 'Still'",
        "Interjections",
        "Advanced Interjections",
      ],
      cnt: "6",
    },
    {
      title: "Interjections, Sentence Types, and Pronunciation",
      topics: [
        "Interjections",
        "More Interjections",
        "Sentence Types",
        "Sentence Structure",
        "Pronunciation",
        "More Pronunciation",
      ],
      cnt: "6",
    },
    {
      title: "Mispronunciations, Subject-Verb Agreement, and Paired Words",
      topics: [
        "Mispronounced Words",
        "Subject-Verb Agreement",
        "Paired Words",
        "Subject-Verb Agreement with Quantity and Amount",
        "More Subject-Verb Agreement",
      ],
      cnt: "5",
    },
    {
      title: "Vocabulary and Present Tenses",
      topics: [
        "Vocabulary",
        "Tenses",
        "Simple Present Tense",
        "Present Continuous Tense",
        "Present Perfect Tense",
        "Present Perfect Continuous Tense",
      ],
      cnt: "6",
    },
    {
      title: "Past and Future Tenses",
      topics: [
        "Simple Past Tense",
        "Past Perfect Tense",
        "Past Continuous Tense",
        "Past Perfect Continuous Tense",
        "Simple Future Tense",
      ],
      cnt: "5",
    },
    {
      title: "Future Tenses and Active/Passive Voice",
      topics: [
        "Future Perfect Tense",
        "Future Continuous Tense",
        "Future Perfect Continuous Tense",
        "Grammar Practice",
        "Active and Passive Voice",
        "Advanced Active and Passive Voice",
      ],
      cnt: "6",
    },
    {
      title: "Passive Voice and Tenses",
      topics: [
        "Passive Voice in Negative Sentences",
        "Negative Questions in Passive Voice",
        "Present Perfect Tense",
        "Active and Passive Voices",
        "Past Continuous",
      ],
      cnt: "5",
    },
    {
      title: "Active/Passive Voices and Modal Verbs",
      topics: [
        "Past Perfect",
        "Future Simple",
        "Future Perfect",
        "Modal Verbs in Passive Voice",
        "Advanced Modal Verbs",
      ],
      cnt: "5",
    },
    {
      title: "Grammar, Conditionals, and Sentences",
      topics: [
        "Active and Passive Voice Review",
        "Conditionals",
        "Second Conditional",
        "Third Conditional",
        "Advanced Grammar Practice",
        "Sentence Construction",
      ],
      cnt: "6",
    },
    {
      title: "Phrasal Verbs, Types of Sentences, and Grammar Practice",
      topics: [
        "Phrasal Verbs",
        "Advanced Phrasal Verbs",
        "Types of Sentences",
        "Grammar Practice",
        "Advanced Grammar Practice",
        "Practical Grammar Practice",
      ],
      cnt: "6",
    },
    {
      title: "Speaking, Communication, Writing, and Grammar Practice",
      topics: [
        "Speaking Practice",
        "Practical Communication Skills",
        "Writing Practice",
        "Grammar Practice",
        "Advanced Grammar Practice",
        "Practical Grammar Practice",
      ],
      cnt: "6",
    },
    {
      title: "Recap, Everyday English, and Cultural Insights",
      topics: ["Recap", "Everyday English", "Cultural Insights"],
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
                <li>
                  1.{" "}
                  <a
                    href="https://www.topuniversities.com/universities/university-oxford"
                    style={{ color: "rgb(49, 123, 241)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of Oxford
                  </a>{" "}
                  (Oxford, United Kingdom) location{" "}
                </li>
                <li>
                  2.{" "}
                  <a
                    href="https://www.topuniversities.com/universities/yale-university"
                    style={{ color: "rgb(49, 123, 241)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yale University
                  </a>{" "}
                  (New Haven, United States){" "}
                </li>
                <li>
                  3.{" "}
                  <a
                    href="https://www.topuniversities.com/universities/university-california-berkeley-ucb"
                    style={{ color: "rgb(49, 123, 241)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of California, Berkeley (UCB)
                  </a>{" "}
                  (Berkeley, United States){" "}
                </li>
                <li>
                  4.{" "}
                  <a
                    href="https://www.topuniversities.com/universities/harvard-university"
                    style={{ color: "rgb(49, 123, 241)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Harvard University
                  </a>
                  (Cambridge, United States){" "}
                </li>
                <li>
                  5.{" "}
                  <a
                    href="https://www.topuniversities.com/universities/university-cambridge"
                    style={{ color: "rgb(49, 123, 241)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of Cambridge
                  </a>{" "}
                  (Cambridge, United Kingdom)
                </li>
              </ul>
              <br />
              <p>
                Eligibility for top English programs requires excellent academic
                records and strong English proficiency.{" "}
              </p>
            </div>
          </div>
        );
      case "tab2":
        return (
          <div className={buy.tabContent}>
            <p>
              The IELTS (International English Language Testing System) is a
              popular English proficiency test for students aiming to study
              abroad. It assesses academic English skills in speaking, reading,
              writing, and listening. Accepted in 140 countries, including the
              US, UK, Canada, and Australia.{" "}
            </p>
            <p>
              The TOEFL® (Test of English as a Foreign
              Language) assesses Reading, Listening, Speaking, and Writing
              skills in English, and is accepted by over 11,500 universities in
              160+ countries, including the USA, UK, and Canada.{" "}
            </p>
          </div>
        );
      case "tab3":
        return (
          <div className={buy.tabContent}>
            <p>
              Being proficient in English greatly enhances travel experiences,
              especially in countries like the US, Australia, Germany, the
              Netherlands, the UK, Ireland, Singapore, Switzerland and many
              more. In these places, English is widely spoken and often used in
              business and education, making navigation, communication, and
              cultural immersion much smoother. From restaurant menus in Munich
              to bilingual education in Singapore, English proficiency ensures a
              seamless and enriching travel experience.
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
        <link rel="canonical" href="https://qurocity.ai/course/english" />
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
            <div className={buy.textSection}>
              <h1>
                Say <br />
                Goodbye to Difficult
                <br />
                <span className={buy.highlight}>English</span> Learning!
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
            marginLeft: "5rem",
          }}
        >
          <a href="/checkout/1">
            <button className={buy.learnButton}>Subsrcibe Now</button>
          </a>
        </div>

        {/* Course highlight section */}
        <div className={buy.highlight_outer}>
          <h1>Course Highlights</h1>
          <div className={buy.highlightCourseDetails}>
            <p>
              Start your A1 English journey with our unique course! Easily learn
              the basics, excel in A1 exams, and strengthen your English
              foundation. Boost your confidence and begin your path to fluency.
              Experience seamless learning and achieve remarkable results. Your
              English mastery journey begins here!
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
              <p>125 video tutorials</p>
            </div>
            <div className={buy.highlight_item2}>
              <span className={`material-icons ${buy.icon}`}>construction</span>
              <p>Blogs</p>
            </div>
            <div className={buy.highlight_item2}>
              <span className={`material-icons ${buy.icon}`}>memory</span>
              <p>Books Recommendation</p>
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
                src="https://www.youtube.com/embed/EQ5g5VDbnG4?si=vsrAzB34Q4naDCE_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            {/* text */}
            <p className={buy.description}>
              An Introduction to English Language
            </p>
          </div>

          {/* right section */}
          <div className={buy.right_section}>
            <h2 className={buy.heading}>An Introduction to English</h2>
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
            <a href="/checkout/1">
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
        {/* <div className={buy.company}>
          <h1>
            Companies <span className={buy.yellow}>Hiring</span> English Experts
          </h1>
          <div className={buy.first_row}>
           

            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "80%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/google.png"
                alt="company logo"
                // google
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
                    "Content Writer ",
                    "Marketing Communications Specialist",
                    "Customer Support Representative",
                  ]
                    .slice(0, showAllProfiles1 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              </Card.Body>
            </Card>

            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "80%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/microsoft.png"
                alt="company logo"
                // Microsoft
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
                    "Human Resources Specialist",
                    "Travel Advisor",
                    "Customer Service Representative",
                    "Translator",
                    "Sales Representative",
                    "Hotel Manager",
                    "Travel Coordinator",
                    "Translator",
                    "Translator",
                  ]
                    .slice(0, showAllProfiles2 ? 3 : 3)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              </Card.Body>
            </Card>

            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "80%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/ibm.png"
                alt="company logo"
                // IBM
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
                    " Technical Content Developer",
                    "Communication Manager",
                    "Customer Success Specialist",
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
            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "80%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/apple.png"
                alt="company logo"
                // Apple
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
                    "Content Editor",
                    "Customer Support Advisor",
                    "Marketing Copywriter",
                  ]
                    .slice(0, showAllProfiles4 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              </Card.Body>
            </Card>

            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "80%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/amazon.png"
                alt="company logo"
                // Amazon
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
                    "Content Moderator",
                    "Customer Service Associate",
                    "Marketing Communications Specialist ",
                  ]
                    .slice(0, showAllProfiles5 ? 3 : 3)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              </Card.Body>
            </Card>

            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "80%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/meta.png"
                alt="company logo"
                // Facebook
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
                    "Marketing Communications Specialist ",
                    "Content Reviewer",
                    " Customer Support Specialist",
                  ]
                    .slice(0, showAllProfiles6 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div> */}

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

export default EnglishCourse;
