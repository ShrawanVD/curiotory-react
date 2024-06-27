import { useState } from "react";
import buy from "../CourseDetails.module.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordian2 from "../../../components/Accordian2";
import Footer2 from "../../../components/Footer/Footer2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Reviewsection from "../../../components/Reviewcourse/Reviewcourse";

const GermanCourse = () => {
  // reviews
  const reviews = [
    {
      id: 1,
      text: "Curiotory is the best for learn Mandarin! I never thought I could learn a new language but this app makes it so easy. The lessons are really fun and engaging, and I can now speek basic Mandarin thanks to Curiotory!",
      name: "Amit Sharma ",
      rating: 5,
    },
    {
      id: 2,
      text: "I absolutely love Curiotory for Mandarin learning! The app is so user-friendly and the lessons are well designed. I feel much more confident in my Chinese-speaking abilities now. Highly recommend!",
      name: "Riya Patel ",
      rating: 4,
    },
    {
      id: 3,
      text: "Mandarin has always seemed like a difficult language, but Curiotory makes it accessible and enjoyable! The app's interactive features and cultural insights are really helpfull. Now I can order food in Mandarin!",
      name: "Karan Singh ",
      rating: 5,
    },
    {
      id: 4,
      text: "II'm learning Mandarin with Curiotory and it's been an amazing experience! The lessons are fun and easy to understand. I feel more confident in my language skills after using this app. Highly recommend it!",
      name: "Shreya Gupta ",
      rating: 4,
    },
    {
      id: 5,
      text: "Curiotory is great for learning Mandarin Chinese! The lessons are very informative and the app's interface is user friendly. I've been using it for a few weeks now and I can already see improvment in my language skills.",
      name: "Vikram Rao",
      rating: 4,
    },
    {
      id: 6,
      text: "I've always wanted to learn Mandarin and Curiotory has made it possible! The lessons are structured and easy to follow. I'm now able to have basic conversations in Mandarin. Highly recommended!",
      name: "Neha Gupta ",
      rating: 4,
    },
    {
      id: 7,
      text: "Curiotory is an amazing app for learning Mandarin! The lessons are really interactive and engaging. I've been using it for a while now and I'm impressed with how much I've learn. Definitely worth it!",
      name: "Rohan Patel",
      rating: 4,
    },
    {
      id: 8,
      text: "I'm so glad I found Curiotory for learning Mandarin Chinese! The lessons are well explained and the app is easy to navigate. I've been using it for a few months now and I'm already seeing progress in my language skills.",
      name: "Aisha Khan ",
      rating: 4,
    },
    {
      id: 9,
      text: "I've been using Curiotory to learn Mandarin and I'm really happy with my progress! The lessons are fun and interactive, and I feel more confident in my language abilities. Highly recommend it to anyone interested in learning Mandarin!",
      name: "Aryan Sharma ",
      rating: 4,
    },
    {
      id: 10,
      text: "Curiotory has been a game changer for me in learning Mandarin! The lessons are engaging and the app is easy to use. I've been recommend it to all my friends who want to learn Mandarin. Give it a try!",
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
                <li>1. Technical University of Munich </li>
                <li>2. Heidelberg University </li>
                <li>3. University of Hamburg </li>
                <li>4. Ludwig Maximilian University of Munich </li>
                <li>5. RWTH Aachen University </li>
              </ul>
            </div>
          </div>
        );
      case "tab2":
        return (
          <div className={buy.tabContent}>
            <p>
              The Goethe-Zertifikat, offered by the Goethe-Institute, assesses
              German language skills from beginner (A1) to advanced (C2).
              Covering reading, writing, listening, and speaking, this exam
              enhances job prospects, academic opportunities in Germany, and
              signifies personal and professional growth. There are six levels:
              A1, A2, B1, B2, C1, and C2.
            </p>
          </div>
        );
      case "tab3":
        return (
          <div className={buy.tabContent}>
            <p>
              Proficiency in German significantly enhances travel experiences,
              particularly in Germany, Austria, Switzerland, and parts of
              Belgium and Luxembourg. It simplifies communication with locals,
              helps in navigating public transport, and helps understanding
              signs and menus. German proficiency allows deeper cultural
              immersion, making interactions more meaningful and enjoyable, and
              ensuring a smoother journey through these German-speaking regions.
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

  return (
    <>
      <div>
        {/* cover page  */}

        <div className={buy.coverContainer}>
          <header className={buy.header}>
            <div className={buy.authButtons}>
              <a href="https://curiotory.com/lms">
                <button className={buy.loginButton}>Login</button>
              </a>
              {/* <button className={buy.signUpButton}>Sign Up</button> */}
            </div>
            <a href="/">
              <img
                src="/Index/logo.png"
                alt="Curiotory Logo"
                className={buy.logo}
              />
            </a>
          </header>
          <div className={buy.content}>
            <div className={buy.textSection}>
              <h1>
                Discover <br />
                How Fun and Easy
                <br />
                <span className={buy.highlight}>German </span> Can Be!
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
              Start your German journey with our unique course! Easily learn
              from basics to advanced levels, excel in exams, and strengthen
              your German foundation. Boost your confidence and pave your way to
              fluency. Experience seamless learning and achieve outstanding
              results. Your path to mastering German begins here!
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
