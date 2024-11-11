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

const SpanishCourse = () => {
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
      title: "Introduction to Machine Learning",
      topics: [
        "Get Started with Internshala Trainings",
        "What is Machine Learning",
        "How Machine Learning Works",
        "Types of Machine Learning – Supervised and Unsupervised",
      ],
      cnt: "4",
    },
    {
      title: "Data and Interpretation",
      topics: ["Data Collection", "Data Cleaning", "Data Visualization"],
      cnt: "3",
    },
    {
      title: "Introduction to Python",
      topics: [
        "Python Basics",
        "Data Types and Variables",
        "Control Structures",
        "Functions and Modules",
      ],
      cnt: "4",
    },
    {
      title: "Java Basics",
      topics: [
        "Get Started with Internshala Trainings",
        "What is Machine Learning",
        "How Machine Learning Works",
        "Types of Machine Learning – Supervised and Unsupervised",
      ],
      cnt: "4",
    },
    {
      title: "Working with ReactJS",
      topics: ["Data Collection", "Data Cleaning", "Data Visualization"],
      cnt: "3",
    },
    {
      title: "6Introduction to Python",
      topics: [
        "Python Basics",
        "Data Types and Variables",
        "Control Structures",
        "Functions and Modules",
      ],
      cnt: "4",
    },
    {
      title: "7Introduction to Machine Learning",
      topics: [
        "Get Started with Internshala Trainings",
        "What is Machine Learning",
        "How Machine Learning Works",
        "Types of Machine Learning – Supervised and Unsupervised",
      ],
      cnt: "4",
    },
    {
      title: "Computer Fundamentals",
      topics: ["Data Collection", "Data Cleaning", "Data Visualization"],
      cnt: "3",
    },
    {
      title: "9Introduction to Python",
      topics: [
        "Python Basics",
        "Data Types and Variables",
        "Control Structures",
        "Functions and Modules",
      ],
      cnt: "4",
    },
    {
      title: "10Introduction to Machine Learning",
      topics: [
        "Get Started with Internshala Trainings",
        "What is Machine Learning",
        "How Machine Learning Works",
        "Types of Machine Learning – Supervised and Unsupervised",
      ],
      cnt: "4",
    },
    {
      title: "11Object Oriented Programming",
      topics: ["Data Collection", "Data Cleaning", "Data Visualization"],
      cnt: "3",
    },
    {
      title: "12Introduction to Python",
      topics: [
        "Python Basics",
        "Data Types and Variables",
        "Control Structures",
        "Functions and Modules",
      ],
      cnt: "4",
    },
    // Add more modules as needed
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
                <li>1. University of Barcelona </li>
                <li>2. Barcelona School of Economics </li>
                <li>3. University of Valencia </li>
                <li>4. EU Business School, Barcelona </li>
                <li>5. University of Salamanca </li>
              </ul>
            </div>
          </div>
        );
      case "tab2":
        return (
          <div className={buy.tabContent}>
            <p>
              The DELE (Diplomas de Español Como Lengua Extranjera) certifies
              Spanish proficiency for non-native speakers, covering reading,
              writing, speaking, and listening. With six levels (A1-C2), it
              aligns with CEFR standards. Passing the DELE provides an official
              diploma, validating your Spanish competence for academic and
              professional purposes.
            </p>
          </div>
        );
      case "tab3":
        return (
          <div className={buy.tabContent}>
            <p>
              Proficiency in Spanish enhances travel experiences in Spain,
              Mexico, Argentina, Colombia, and other Spanish-speaking countries.
              It simplifies communication with locals, aids in navigating public
              transportation, and enriches cultural interactions. Understanding
              Spanish helps in reading signs, ordering food, and participating
              in local customs, ensuring a smoother, more immersive, and
              enjoyable travel experience across diverse and vibrant
              Spanish-speaking regions.
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
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-SXJ40ZYWNV";
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
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
        <link rel="canonical" href="https://qurocity.ai/course/spanish" />
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
                Hola to Easy
                <br />
                <span className={buy.highlight}>Spanish </span> Learning!
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
          <a href="/checkout/7">
            <button className={buy.learnButton}>Subsrcibe Now </button>
          </a>
        </div>

        {/* Course highlight section */}
        <div className={buy.highlight_outer}>
          <h1>Course Highlights</h1>
          <div className={buy.highlightCourseDetails}>
            <p>
              Begin your Spanish adventure with our one-of-a-kind course!
              Quickly grasp the fundamentals to advance, excel in exams, and
              solidify your Spanish foundation. Gain confidence and set yourself
              on the path to fluency. Enjoy smooth learning and achieve
              outstanding results. Your journey to mastering Spanish begins now!
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
              <p>106 video tutorials</p>
            </div>
            <div className={buy.highlight_item2}>
              <span className={`material-icons ${buy.icon}`}>construction</span>
              <p>5 projects</p>
            </div>
            <div className={buy.highlight_item2}>
              <span className={`material-icons ${buy.icon}`}>memory</span>
              <p>2 AI tools covered</p>
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
                src="https://www.youtube.com/embed/e3QTQXmqWnM?si=i1GosbSYtNN5olin"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            {/* text */}
            <p className={buy.description}>
              Discover the Beauty of Spanish Language and Culture
            </p>
          </div>

          {/* right section */}
          <div className={buy.right_section}>
            <h2 className={buy.heading}>Introduction to Spanish Language</h2>
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
            <a href="/checkout/7">
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
            Companies <span className={buy.yellow}>Hiring</span> Spanish Experts
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
                src="/Company/delloite.png"
                alt="company logo"
                // Deloitte
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
                    "Spanish Language Specialist",
                    "Bilingual Business Analyst ",
                    "Spanish Translator/Interpreter",
                  ]
                    .slice(0, showAllProfiles1 ? 9 : 5)
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
                  width: "60%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/boeing.png"
                alt="company logo"
                // Boeing
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
                    "Spanish Technical Translator",
                    "Bilingual Customer Support Specialist",
                    "International Sales Consultant",
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
                  width: "50%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/pg.png"
                alt="company logo"
                // Procter & Gamble
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
                    "Spanish Market Research Analyst ",
                    "Bilingual Communications Coordinator",
                    "Spanish Localization Specialist",
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
                  width: "70%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/hilton.png"
                alt="company logo"
                // Hilton Worldwide
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
                    "Spanish-speaking Guest Relations Manager",
                    "Bilingual Marketing Coordinator",
                    "Spanish Language Customer Service Representative",
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
                  width: "70%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/pf.jpeg"
                alt="company logo"
                // Pfizer
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
                    "Spanish Medical Translator",
                    "Bilingual Regulatory Affairs Specialist",
                    "Spanish-speaking Clinical Research Associate",
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
                  width: "80%",
                  height: "15%",
                  margin: "2rem auto 1rem",
                  borderRadius: "7px",
                }}
                variant="top"
                src="/Company/ge.png"
                alt="company logo"
                // General Electric (GE)
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
                    "Spanish Technical Support Engineer",
                    "Bilingual Project Manager",
                    "Spanish Documentation Specialist",
                  ]
                    .slice(0, showAllProfiles6 ? 9 : 5)
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

export default SpanishCourse;
