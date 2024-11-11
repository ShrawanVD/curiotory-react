import { useState } from "react";
import buy from "../CourseDetails.module.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordian2 from "../../../components/Accordian2";
import Footer2 from "../../../components/Footer/Footer2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Reviewsection from "../../../components/Reviewcourse/Reviewcourse";
import Reviewcourse from "../../../components/Reviewcourse/Reviewcourse";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const KoreanCourse = () => {
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
      title: "Introduction to Korean Alphabets (Hangul Consonants)",
      topics: [
        "Explore Hangul consonants effortlessly",
        "Master key Korean consonants easily",
        "Deepen your understanding of Korean consonants",
        "Discover more Korean consonants",
        "Master Korean double consonants",
      ],
      cnt: "5",
    },
    {
      title: "Vowels, Batchim, Rules of Word Formation, and Basic Phrases",
      topics: [
        "Master vowels and double vowels in Hangul",
        "Unravel batchim final consonants",
        "Craft words by combining linguistic elements",
        "Enhance skills in Korean word formation",
      ],
      cnt: "4",
    },
    {
      title: "Sino and Native Korean Numbers",
      topics: [
        "Master Korean numbers easily",
        "Explore Sino-Korean numbers",
        "Master daily phrases and number systems",
        "Master math vocabulary in Korean",
        "Master counters in Korean",
        "Explore counters in native and Sino-Korean",
      ],
      cnt: "6",
    },
    {
      title: "Introduction to Essential Korean Verbs and Nouns",
      topics: [
        "Explore key verbs, nouns, and phrases",
        "Learn more Korean action verbs",
        "Boost language skills with essential action verbs",
        "Enhance vocabulary with essential Korean nouns",
        "Master basic Korean phrases",
        "Learn key words and phrases for communication",
      ],
      cnt: "6",
    },
    {
      title: "Constructing Sentences with Future Tense Conjugation",
      topics: [
        "Express future actions in Korean",
        "Conjugate future tense Korean verbs",
        "Learn more about conjugating tenses",
        "Learn formal and informal verb conjugation",
        "Master simple future tense conjugation",
      ],
      cnt: "5",
    },
    {
      title: "Learn About Various Jobs",
      topics: [
        "Explore Korean job titles and career terms",
        "Enhance skills with job titles and terms",
        "Learn essential job-related vocabulary",
        "Unlock a spectrum of job titles",
        "Refine communication with job-related phrases",
      ],
      cnt: "5",
    },
    {
      title: "Body Parts in Korean",
      topics: [
        "Learn human body part vocabulary",
        "Master body part vocabulary and medical phrases",
        "Explore common phrases in healthcare settings",
        "Understand medical terms for effective communication",
        "Practice patient-receptionist conversations",
      ],
      cnt: "5",
    },
    {
      title:
        "Present Tense - Constructing Sentences with Present Tense Conjugation",
      topics: [
        "Master impolite present tense (아/어)",
        "Learn polite present tense (아요/어요)",
        "Craft polite sentences (아요/어요)",
        "Present tense continuous grammar (고 중이에요)",
        "Understand polite form (ㅂ니다/습니다)",
        "Delve into polite form present tense",
        "Navigate present continuous tense (고 있어요)",
      ],
      cnt: "7",
    },
    {
      title: "Learning Vocabulary and Grammar in Past Tense",
      topics: [
        "Past tense conjugation (아/어)",
        "Explore past tense (았다/었다)",
        "Casual and formal past nuances",
        "Practice various past tense forms",
        "Craft sentences in past tense",
        "Learn double past tense",
      ],
      cnt: "6",
    },
    {
      title: "Differentiating '이다' and '아니다' in Korean",
      topics: [
        "Explore 이다/아니다 forms and conjugations",
        "Master past conjugation of 이다/아니다",
        "Difference between 아니다 and 없다",
        "Differentiate 좋다 and 좋아하다",
        "Practice sentences with 좋다 and 좋아하다",
        "Learn grammar (이에요/예요)",
      ],
      cnt: "6",
    },
    {
      title: "Talking About Clothes in Korean",
      topics: [
        "Explore color vocabulary",
        "Learn names of various colors",
        "Attach colors to nouns",
        "Unravel outerwear and accessories vocabulary",
        "Explore clothing-related verbs and adjectives",
        "Practice sentences about fashion",
      ],
      cnt: "6",
    },
    {
      title: "Learning About Games",
      topics: [
        "Explore sports vocabulary",
        "Delve deeper into sports vocabulary",
        "Expand outdoor sports vocabulary",
        "Continue learning sports vocabulary",
        "Understand 잘하다 and 못하다",
        "Master Korean sports-related words",
      ],
      cnt: "6",
    },
    {
      title: "Days of the Week, Months of the Year, and Frequency",
      topics: [
        "Learn days, months, and years in Korean",
        "Discover days of the week",
        "Unlock knowledge of Korean months",
        "Learn time-related vocabulary",
        "Express dates in Korean",
        "Practice phrases about days, dates, and months",
        "Boost skills with practical phrases",
      ],
      cnt: "7",
    },
    {
      title: "Talking About Time in Korean",
      topics: [
        "Explore time, scheduling, and planning",
        "Master telling time in hours",
        "Express minutes in Korean",
        "Learn time expressions, including seconds",
        "Essential time expressions for communication",
        "Master telling time with phrases and expressions",
      ],
      cnt: "6",
    },
    {
      title: "Discussing Food and Ordering Meals in Korean",
      topics: [
        "Explore food-related vocabulary",
        "Learn cooking and kitchen vocabulary",
        "Discover non-vegetarian cuisine vocabulary",
        "Essential phrases for ordering meals",
        "Dining phrases for a better culinary experience",
      ],
      cnt: "5",
    },
    {
      title: "Talking About Neighborhood in Korean",
      topics: [
        "Master direction vocabulary: left, right, straight",
        "Unlock direction terms for smooth communication",
        "Navigate Korea with essential direction phrases",
        "Polish navigation skills with diverse phrases",
        "Enhance conversations with essential phrases",
        "Navigate effortlessly with key direction phrases",
      ],
      cnt: "6",
    },
    {
      title: "Prepositions and Adverbs in Korean",
      topics: [
        "Master Korean prepositions and adverbs",
        "Explore essential grammar",
        "Deepen grammar skills",
        "Expand vocabulary with vital adverbs",
        "Practice with simple sentences",
        "Quick guide to prepositions",
      ],
      cnt: "6",
    },
    {
      title: "Interrogative Words in Korean",
      topics: [
        "Discover interrogative words",
        "Dive deeper into interrogative words",
        "Learn to ask questions in different ways",
        "Master question structures",
        "Boost question-forming skills",
        "Learn final question grammar",
      ],
      cnt: "6",
    },
    {
      title: "Talking About Climate in Korean",
      topics: [
        "Discover weather vocabulary",
        "Discover nature vocabulary",
        "Describe weather",
        "Learn more about weather",
        "Continue describing weather",
      ],
      cnt: "5",
    },
    {
      title: "Important Grammar One Should Know",
      topics: [
        "Discover essential grammar",
        "Master grammar: Or",
        "Discover grammar: Though",
        "Learn 'Gee-mal' usage",
        "Explore advanced grammar",
        "Continue advanced grammar",
      ],
      cnt: "6",
    },
    {
      title: "Learning Nationality in Korean",
      topics: [
        "Explore names for nations",
        "Dive into nationalities",
        "Learn names of languages",
        "Explore cultural symbols and traditions",
      ],
      cnt: "4",
    },
    {
      title: "Learning About Travel and Transportation",
      topics: [
        "Discover travel and transportation",
        "Learn vocabulary for travel and transportation",
        "Boost travel phrases",
        "Explore additional travel phrases",
      ],
      cnt: "4",
    },
    {
      title: "Vocabulary for Hobbies and How to Express It",
      topics: [
        "Boost vocabulary with hobbies",
        "Explore verbs for hobbies",
        "Discover Korean hobbies",
        "Explore language exceptions",
        "Discover verb + 'kee'",
        "More 'kee' examples",
      ],
      cnt: "6",
    },
    {
      title: "Learning About Family and Its Vocabulary",
      topics: [
        "Explore family vocabulary: Parents",
        "Discover family vocabulary: In-Laws",
        "Explore great-grandparents vocab",
        "Explore family phrases",
      ],
      cnt: "4",
    },
    {
      title: "Shopping and Appearances",
      topics: [
        "Explore shopping and appearance",
        "Explore adjectives and market phrases",
        "Explore payment phrases",
        "Detailed appearances vocabulary",
        "Discover appearances vocabulary",
      ],
      cnt: "5",
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
                <li>1. Konkuk University </li>
                <li>2. Pusan National University </li>
                <li>3. University of Seoul </li>
                <li>4. Chung-Ang University </li>
                <li>5. Hanyang University </li>
              </ul>
            </div>
          </div>
        );
      case "tab2":
        return (
          <div className={buy.tabContent}>
            <p>
              TOPIK is a Korean proficiency test for foreigners seeking
              employment, residency, or family reunification in Korea. It has
              two levels, TOPIK I and TOPIK II, with six sublevels (1-6). The
              exam assesses Korean language skills, and your level is determined
              by your total score.
            </p>
          </div>
        );
      case "tab3":
        return (
          <div className={buy.tabContent}>
            <p>
              Proficiency in Korean greatly enhances travel in South Korea,
              where it is the primary language. It simplifies communication with
              locals, helps in understanding signs and menus, and allows deeper
              cultural immersion. Korean proficiency is also beneficial in
              regions with Korean communities, such as parts of China and the
              United States, making interactions smoother and more enjoyable in
              these areas.
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
        <link rel="canonical" href="https://qurocity.ai/course/korean" />
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
                Let's Learn
                <br />
                <span className={buy.highlight}>Korean </span> Together: <br />
                Easy and Fun!
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
            marginLeft: "8rem",
          }}
        >
          <a href="/checkout/5">
            <button className={buy.learnButton}>Subsrcibe Now </button>
          </a>
        </div>

        {/* Course highlight section */}
        <div className={buy.highlight_outer}>
          <h1>Course Highlights</h1>
          <div className={buy.highlightCourseDetails}>
            <p>
              Kickstart Your Korean Learning Adventure Today! From Beginner to
              Advanced Levels, Ace Exams, and Fortify Your Korean Skills. Build
              Confidence and Dive into Fluency. Seamlessly Navigate Your
              Learning Journey and Witness Extraordinary Progress. Your Path to
              Korean Proficiency Begins Now!
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
              <p>137 video tutorials</p>
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
                src="https://www.youtube.com/embed/TZ1Oy5LUVls?si=7JgbC1PpwNn71-dr"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            {/* text */}
            <p className={buy.description}>
              History of Korean Language and Beauty of Hangul
            </p>
          </div>

          {/* right section */}
          <div className={buy.right_section}>
            <h2 className={buy.heading}>Introduction to Korean Language</h2>
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
            <a href="/checkout/5">
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
            Companies <span className={buy.yellow}>Hiring</span> Korean
            Experts
          </h1>
          <div className={buy.first_row}>
            <Card className={buy.cardss}>
              <Card.Img
                className={buy.card_img}
                style={{
                  width: "60%",
                  height:"15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/samsung.png"
                alt="company logo"
                // samsung electronics
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
                    "Korean Language Specialist ",
                    "Korean Market Research Analyst",
                    "Korean Language Instructor",
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
                  width: "50%",
                  height:"15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/lg.png"
                alt="company logo"
                // LG
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
                    "Korean Language Translator",
                    "Korean Customer Service Representative",
                    "Korean Language Content Developer",
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
                  height:"15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/hyundai.png"
                alt="company logo"
                // Hyundai
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
                    "Korean Language Interpreter",
                    "Korean Business Development Manager",
                    "Korean Language Training Coordinator",
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
                  height:"15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/sk.png"
                alt="company logo"
                // SK Group
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
                    "Korean Language Localization Specialist",
                    "Korean Language Technical Support Engineer",
                    "Korean Language Project Manager",
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
                  width: "60%",
                  height:"15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/cj.jpeg"
                alt="company logo"
                // src="/Company/cj.png"
                // CJ corporation
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
                    "Korean Language Editor",
                    "Korean Language Marketing Coordinator",
                    "Korean Language Communication Specialist",
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
                  height:"15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/kia.png"
                alt="company logo"
                // Kia corporation
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
                    "Korean Language Localization Engineer",
                    "Korean Language Sales Representative",
                    "Korean Language Product Manager",
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

export default KoreanCourse;
