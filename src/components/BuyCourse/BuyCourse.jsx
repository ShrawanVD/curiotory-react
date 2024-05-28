import React, { useState } from "react";
import buy from "./BuyCourse.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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

const BuyCourse = () => {
  //   for course highlights
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

  // for job profiles:
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

  return (
    <>
      {/* Course highlight section */}
      <div className={buy.highlight_outer}>
        <h1>Course Highlights</h1>
        <div className={buy.course_highlights}>
          <div className={buy.highlights_section}>
            <HighlightItem
            className={buy.item}
              icon="play_circle"
              title="Learn online"
              description="At your own schedule"
            />
            <HighlightItem
            className={buy.item}
              icon="support_agent"
              title="Placement assistance"
              description="To build your career"
            />
            <HighlightItem
            className={buy.item}
              icon="trending_up"
              title="Beginner friendly"
              description="No prior knowledge required"
            />
            <HighlightItem
            className={buy.item}
              icon="memory"
              title="Learn AI tools"
              description="For a competitive edge"
            />
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
              title="5 projects"
              description="For hands-on practice"
            />
            <HighlightItem
            className={buy.item}
              icon="schedule"
              title="6 weeks duration"
              description="1 hr/day (flexible schedule)"
            />
          </div>
          <div className={buy.highlights_section}>
            <HighlightItem
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
            />
          </div>
        </div>
      </div>





      {/* Modules section */}
      <div className={buy.syllabus_container}>

        {/* Top heading */}
        <h1>Training Syllabus</h1>

        {/* icons */}
        <div className={buy.highlights}>
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
        <p
        className={buy.subheading}
        >
          After completing the training, you can also download videos for future
          reference
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




      {/* company section */}
      <div className={buy.company}>
        <h1>
          Companies <span className={buy.yellow}>Hiring</span> French Experts
        </h1>
        <div className={buy.first_row}>

          {/* first company */}
          <Card className={buy.cardss}>
            <Card.Img
            className={buy.card_img}
              style={{
                width: "80%",
                margin: "0 auto",
                borderRadius: "7px",
              }}
              variant="top"
              src="/Company/decat.png"
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
                    .slice(0, showAllProfiles1 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              {/* <Card.Text>
                
              </Card.Text> */}
              <Button
              className={buy.btn_company}
                style={{
                  width: "50%",
                }}
                variant="primary"
                onClick={toggleProfiles1}
              >
                {showAllProfiles1 ? "View Less" : "View More"}
              </Button>
            </Card.Body>
          </Card>

          {/* second company */}
          <Card className={buy.cardss}>
            <Card.Img
            className={buy.card_img}
              style={{
                width: "80%",
                margin: "0 auto",
                borderRadius: "7px",
              }}
              variant="top"
              src="/Company/capg.png"
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
                    .slice(0, showAllProfiles2 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              <Button
              className={buy.btn_company}
                style={{
                  width: "50%",
                }}
                variant="primary"
                onClick={toggleProfiles2}
              >
                {showAllProfiles2 ? "View Less" : "View More"}
              </Button>
            </Card.Body>
          </Card>

          {/* third company */}
          <Card className={buy.cardss}>
            <Card.Img
            className={buy.card_img}
              style={{
                width: "80%",
                margin: "0 auto",
                borderRadius: "7px",
              }}
              variant="top"
              src="/Company/loreal.png"
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
                    .slice(0, showAllProfiles3 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              <Button
              className={buy.btn_company}
                style={{
                  width: "50%",
                }}
                variant="primary"
                onClick={toggleProfiles3}
              >
                {showAllProfiles3 ? "View Less" : "View More"}
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className={buy.second_row}>

          {/* fourth company */}
          <Card className={buy.cardss} >
            <Card.Img
            className={buy.card_img}
              style={{
                width: "80%",
                margin: "0 auto",
                borderRadius: "7px",
              }}
              variant="top"
              src="/Company/air.png"
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
                    .slice(0, showAllProfiles4 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              {/* <Card.Text>
                
              </Card.Text> */}
              <Button
              className={buy.btn_company}
                style={{
                  width: "50%",
                }}
                variant="primary"
                onClick={toggleProfiles4}
              >
                {showAllProfiles4 ? "View Less" : "View More"}
              </Button>
            </Card.Body>
          </Card>



          {/* fifth company */}
          <Card className={buy.cardss}>
            <Card.Img
            className={buy.card_img}
              style={{
                width: "80%",
                margin: "0 auto",
                borderRadius: "7px",
              }}
              variant="top"
              src="/Company/dassault.png"
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
                    .slice(0, showAllProfiles5 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              {/* <Card.Text>
                
              </Card.Text> */}
              <Button
              className={buy.btn_company}
                style={{
                  width: "50%",
                }}
                variant="primary"
                onClick={toggleProfiles5}
              >
                {showAllProfiles5 ? "View Less" : "View More"}
              </Button>
            </Card.Body>
          </Card>




          {/* sixth company */}
          <Card className={buy.cardss}>
            <Card.Img
            className={buy.card_img}
              style={{
                width: "80%",
                margin: "0 auto",
                borderRadius: "7px",
              }}
              variant="top"
              src="/Company/electric.png"
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
                    .slice(0, showAllProfiles6 ? 9 : 5)
                    .map((profile, index) => (
                      <li key={index}>{profile}</li>
                    ))}
                </ul>
              {/* <Card.Text>
                
              </Card.Text> */}
              <Button
              className={buy.btn_company}
                style={{
                  width: "50%",
                }}
                variant="primary"
                onClick={toggleProfiles6}
              >
                {showAllProfiles6 ? "View Less" : "View More"}
              </Button>
            </Card.Body>
          </Card>




         
        </div>
      </div>
    </>
  );
};

export default BuyCourse;
