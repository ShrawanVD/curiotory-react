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

const MandarinCourse = () => {
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
      title: "Ni Hao - A Comprehensive Guide from Greetings to Tones",
      topics: [
        "Mandarin Basics",
        "Essential Phrases: Greetings",
        "More Essential Phrases",
        "Pinyin: Initials and Finals",
        "Mandarin Tones and Syllables",
        "More Chinese Syllables",
      ],
      cnt: "6",
    },
    {
      title: "Ni Hao - From Syllables to Characters in the Classroom",
      topics: [
        "Disyllables Pronunciation",
        "3rd Tone Syllables, Classroom Expressions",
        "More Classroom Expressions",
        "Mandarin Characters Basics",
        "Single-component Characters",
      ],
      cnt: "6",
    },
    {
      title: "Thank You - Exploring Mandarin Dialogues and Pronunciation",
      topics: [
        "'Thank You' and Dialogues",
        "Dialogues and Gestures",
        "Pinyin Initials and Finals",
        "More Pinyin Practice",
        "Chinese Syllables: Initials and Finals",
      ],
      cnt: "6",
    },
    {
      title: "Thank You - Mandarin Grammar, Expressions, and Character Mastery",
      topics: [
        "Grammar Patterns and Pinyin Rules",
        "Tone Marks",
        "Classroom Expressions",
        "Character Strokes",
        "Single-component Characters",
      ],
      cnt: "6",
    },
    {
      title:
        "What is Your Name - Roleplay, Pronunciation, and Self-Introduction",
      topics: [
        "Interrogative Sentences and Roleplay",
        "More Roleplay Exercises",
        "Pronunciation: Z, C, S",
        "Self-Introduction Grammar",
        "Conversation Tips and Tricks",
      ],
      cnt: "6",
    },
    {
      title: "What is Your Name - From Initials to Characters and Tone Changes",
      topics: [
        "Initials: Z, C, S, J, Q, X",
        "Six Initials and Rules",
        "Tone Sandhi of 'bu'",
        "Pinyin Rules",
        "Character Strokes and Single-component Characters",
      ],
      cnt: "6",
    },
    {
      title: "She is my Chinese Teacher - From Classroom to Conversations",
      topics: [
        "Classroom Expressions",
        "Library Conversations",
        "Basic Conversations",
        "Interrogative Pronouns",
        "Interrogative Particle Exercises",
      ],
      cnt: "6",
    },
    {
      title: "She is my Chinese Teacher - From Pinyin to HSK 1 Vocabulary",
      topics: [
        "Pinyin Initials: Zh, Ch, Sh, R",
        "Pronunciation of 'yi'",
        "Y, W Usage",
        "Character Strokes Practice",
        "HSK 1 Vocabulary",
      ],
      cnt: "6",
    },
    {
      title:
        "Her Daughter is Twenty - Age, Office Talk, Numbers, and Vocabulary",
      topics: [
        "Describing Age",
        "Office Conversations",
        "Numbers below 100",
        "Retroflex Final, HSK 1 Vocabulary",
      ],
      cnt: "5",
    },
    {
      title: "Her Daughter is Twenty - Pinyin, Vocabulary, and Strokes",
      topics: [
        "Aspirated vs Unaspirated Initials",
        "Pinyin Rules, Syllable Mark",
        "HSK 1 Vocabulary",
        "Character Strokes Basics",
      ],
      cnt: "5",
    },
    {
      title:
        "I Can Speak Chinese - Conversational Mandarin: From School to Kitchen, Library, and Beyond",
      topics: [
        "'I Can Speak Chinese'",
        "School Conversations",
        "Kitchen Conversations",
        "Library Conversations",
        "Modal Verbs",
        "Interrogative Pronouns",
      ],
      cnt: "6",
    },
    {
      title:
        "I Can Speak Chinese - Role-playing, Characters, Vocabulary, and HSK 1 Preparation",
      topics: [
        "Role-playing Dialogues",
        "Character Strokes Basics",
        "Single-component Characters",
        "HSK 1 Vocabulary",
        "HSK 1 Exam-style Questions",
      ],
      cnt: "6",
    },
    {
      title:
        "What is the Date Today - Dates, Banking, Coffee Chats, and HSK 1 Vocabulary",
      topics: [
        "'What's the Date Today?'",
        "Bank Conversations",
        "Calendar Phrases",
        "Coffee House Conversations",
        "Date Expressions",
        "HSK 1 Vocabulary",
      ],
      cnt: "6",
    },
    {
      title:
        "What is the Date Today - Mastering Months, Days, and Chinese Script Origins",
      topics: [
        "Months of the Year",
        "Days of the Week",
        "Answering Real-life Questions",
        "Fill-in-the-blank Exercises",
        "Radicals in Chinese Characters",
        "History of Chinese Characters",
      ],
      cnt: "6",
    },
    {
      title:
        "I Would Like Some Tea - Restaurants, Living Rooms, Stores, and HSK 1 Vocabulary",
      topics: [
        "Matching Phrases Exercise",
        "Restaurant Conversations",
        "Living Room Conversations",
        "Store Conversations",
        "Modal Verbs",
        "Measure Words, HSK 1 Vocabulary",
      ],
      cnt: "6",
    },
    {
      title:
        "I Would Like Some Tea - Money Matters, Real-Life Questions, Characters, and HSK 1 Vocabulary",
      topics: [
        "Talking About Money",
        "Answering Real-life Questions",
        "Fill-in-the-blanks Exercise",
        "Single Component Characters",
        "Chinese Radicals",
        "HSK 1 Vocabulary",
      ],
      cnt: "6",
    },
    {
      title:
        "Where Does Your Son Work? - Home, Travel, Communication, and HSK 1 Vocabulary",
      topics: [
        "'Where Does Your Son Work?'",
        "Everyday Home Conversations",
        "Railway Station Conversations",
        "Phone Conversations",
        "Mandarin Prepositions",
        "HSK 1 Vocabulary",
      ],
      cnt: "6",
    },
    {
      title:
        "Where Does Your Son Work? - Question Practice, Sentence Completion, and Character Structure",
      topics: [
        "Practice Asking Questions",
        "Answer Questions from Dialogues",
        "Complete the Sentences",
        "Single Compound Characters",
        "Structure of Chinese Characters",
        "Radicals, HSK 1 Vocabulary",
      ],
      cnt: "6",
    },
    {
      title:
        "Can I Sit Here? - Situations and Sentence Structure in Office, Gym, and Library",
      topics: [
        "Asking 'Can I Sit Here?'",
        "Office Conversations",
        "Gym Conversations",
        "Library Conversations",
        "'有 (yǒu)' Sentence Usage",
        "Conjunctions, Modal Verbs, HSK 1 Vocabulary",
      ],
      cnt: "6",
    },
    {
      title:
        "Can I Sit Here? - Dialogue Responses, Pronunciation, and Character Evolution",
      topics: [
        "Answering Dialogue Questions",
        "Fill-in-the-blanks Exercise",
        "Pronunciation of Reduplicated Syllables",
        "Evolution of Chinese Characters",
        "Structure and Radicals of Characters",
        "HSK 1 Vocabulary",
      ],
      cnt: "6",
    },
    {
      title:
        "What is the Time Now - Conversations at Home and Essential Vocabulary",
      topics: [
        "Asking and Telling the Time",
        "Home Conversations",
        "Time-related Expressions",
        "HSK 1 Words and Phrases",
      ],
      cnt: "5",
    },
    {
      title: "What is the Time Now - Time, Questions, and Characters",
      topics: [
        "Time-related Adverbs",
        "Nouns in Sentences",
        "Asking and Answering Questions",
        "Fill-in-the-blanks Exercises",
        "Neutral Tone Syllables",
        "Chinese Characters and Radicals",
      ],
      cnt: "6",
    },
    {
      title:
        "What Will the Weather Be Like? - Weather, Travel, Health, and Grammar",
      topics: [
        "Discussing Future Weather",
        "Travel-related Conversations",
        "Gym-related Dialogues",
        "Health-related Roleplay",
        "Interrogative Pronouns",
        "Adverbs in Sentences",
      ],
      cnt: "6",
    },
    {
      title:
        "What Will the Weather Be Like? - Weather, Pinyin, and Character Insights",
      topics: [
        "Predicting Weather",
        "Fill-in-the-blanks Exercises",
        "Pinyin System Study",
        "History of Chinese Writing",
        "Components of Chinese Characters",
      ],
      cnt: "5",
    },
    {
      title:
        "He is Learning to Cook - Cooking, Calls, Coffee, School, and Exclamations",
      topics: [
        "Cooking Techniques and Recipes",
        "Telephone Conversation Roleplay",
        "Coffee Shop Dialogues",
        "School Office Interactions",
        "Common Exclamations",
        "Negative Sentences in Present Continuous",
      ],
      cnt: "6",
    },
    {
      title:
        "He is Learning to Cook - Numbers, Comprehension, Characters, and Vocabulary",
      topics: [
        "Expressing Telephone Numbers",
        "Comprehension of Text Content",
        "Fill-in-the-blanks Exercise",
        "Radicals of Chinese Characters",
        "HSK 1 Vocabulary Practice",
      ],
      cnt: "5",
    },
    {
      title:
        "She has bought quite a few clothes - Matching Images, Dorm Chat, Workplace Talk, Shopping, and Character Insights",
      topics: [
        "Matching Images with Words",
        "Dormitory Conversations",
        "Workplace Dialogue",
        "Shopping Dialogue",
        "Usage of '了' (le)",
        "Meaning of '后' (hòu)",
      ],
      cnt: "6",
    },
    {
      title:
        "She has bought quite a few clothes - Conversations, Vocabulary Expansion, Romanization, Pronunciation, and Character Origins",
      topics: [
        "Responding in Conversations",
        "Vocabulary with Sentence Completion",
        "Mandarin Romanization System",
        "Pronunciation with Pinyin",
        "History of Chinese Characters",
      ],
      cnt: "5",
    },
    {
      title:
        "I came here by air - Images, Meals, Hotels, Business, Phonetics, Negatives",
      topics: [
        "Matching Words with Images",
        "Mealtime Discussion Phrases",
        "Hotel Dialogues",
        "Corporate Dialogue",
        "Mandarin Phonetic System",
        "Constructing Negative Sentences",
      ],
      cnt: "6",
    },
    {
      title:
        "I came here by air - Scenarios, Vocabulary, Pronunciation, Characters",
      topics: [
        "Answering Scenario Questions",
        "Vocabulary with Sentence Completion",
        "Mandarin Romanization System",
        "Pronunciation with Pinyin",
        "Evolution of Chinese Characters",
        "Chinese Character Radicals",
      ],
      cnt: "6",
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
                <li>1. Jiangsu University</li>
                <li>2. Tsinghua University</li>
                <li>3. Peking University </li>
                <li>4. Shantou University Medical College</li>
                <li>5. University of Hong Kong </li>
              </ul>
            </div>
          </div>
        );
      case "tab2":
        return (
          <div className={buy.tabContent}>
            <p>
              The HSK (Hanyu Shuiping Kaoshi) certifies Mandarin proficiency for
              non-Chinese speakers. With six levels, HSK1 (basic) to HSK6
              (advanced), it measures listening, reading, and writing skills,
              but not speaking. HSK scores are valuable for applying to Chinese
              universities and companies, defining your language competency
              clearly.
            </p>
          </div>
        );
      case "tab3":
        return (
          <div className={buy.tabContent}>
            <p>
              Proficiency in Chinese facilitates seamless travel experiences,
              particularly in China, Taiwan, Hong Kong, and Singapore, where
              Mandarin is widely spoken. It eases communication with locals,
              navigation in public transport, and understanding of cultural
              nuances. From ordering food to bargaining in markets, Chinese
              proficiency enhances immersion and fosters deeper connections with
              the rich heritage of these destinations.
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
        <link rel="canonical" href="https://qurocity.ai/course/mandarin" />

        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
        
        {/* Google Ads Conversion Tracking Script */}
        <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-16458367327/a0t5CM_Xm9MZEN-C-6c9'});`}
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
                marginLeft: "6rem",
              }}
            >
              <h1>
                <span className={buy.highlight}>Mandarin</span>
                <br />
                Made Easy:
                <br />
                Your Friendly
                <br />
                Learning Companion
              </h1>
              {/* <div className={buy.sticky}>
              <a href="/checkout"><button className={buy.learnButton}>Subsrcibe Now </button></a>
              </div> */}
            </div>
            <div
              className={buy.imageSection}
              style={{
                marginRight: "9rem",
              }}
            >
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
            marginLeft: "6rem",
          }}
        >
          <a href="/checkout/6">
            <button className={buy.learnButton}>Subsrcibe Now </button>
          </a>
        </div>

        {/* Course highlight section */}
        <div className={buy.highlight_outer}>
          <h1>Course Highlights</h1>
          <div className={buy.highlightCourseDetails}>
            <p>
              Begin Your Mandarin Adventure! Easily Learn from Basics to
              Advanced, Ace Exams, and Build a Strong Mandarin Foundation. Boost
              Confidence and Kickstart Your Journey to Fluency. Enjoy Smooth
              Learning and See Amazing Results. Start Your Mandarin Mastery
              Today!
            </p>
          </div>
          <div className={buy.course_highlights}>
            <div className={buy.highlights_section}>
              <HighlightItem
                className={buy.item}
                icon="play_circle"
                title="30 hours of content"
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
              <p>174 video tutorials</p>
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
                src="https://www.youtube.com/embed/zd9XnZAl8B0?si=D-daAdwvSwzt59YK"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            {/* text */}
            <p className={buy.description}>
              An Introduction to Mandarin Language and its Culture
            </p>
          </div>

          {/* right section */}
          <div className={buy.right_section}>
            <h2 className={buy.heading}>
              An Introduction to Mandarin Language
            </h2>
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
            <a href="/checkout/6">
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
            Companies <span className={buy.yellow}>Hiring</span> Mandarin
            Experts
          </h1>
          <div className={buy.first_row}>
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
                src="/Company/alibaba.png"
                alt="company logo"
                // Alibaba group
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
                    "Mandarin Language Specialist ",
                    "Mandarin Business Development Manager",
                    "Mandarin Customer Service Representative",
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
                src="/Company/huawei.png"
                alt="company logo"
                // Huawei
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
                    "Mandarin Translator",
                    "Mandarin Marketing Specialist",
                    "Mandarin Technical Support Engineer",
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
                  width: "50%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/pubg.png"
                alt="company logo"
                // Tencent Holdings
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
                    "Mandarin Content Moderator",
                    "Mandarin Social Media Manager",
                    "Mandarin Game Localization Specialist",
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
                  height: "13%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/bkc.png"
                alt="company logo"
                // Bank of China
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
                    "Mandarin Financial Analyst",
                    "Mandarin Relationship Manager",
                    "Mandarin Banking Consultant",
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
                src="/Company/lenevo.png"
                // Lenevo group
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
                    "Mandarin Sales Representative",
                    "Mandarin Product Manager",
                    "Mandarin Market Research Analyst ",
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
                  width: "60%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/byd.png"
                alt="company logo"
                // BYD Company Limited
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
                    "Mandarin Supply Chain Coordinator",
                    "Mandarin Quality Assurance Engineer",
                    "Mandarin Sales Account Manager",
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

export default MandarinCourse;
