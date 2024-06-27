import React from "react";
import { Helmet } from "react-helmet";
import Newnavbar from "../NewNavbar/Newnavbar";
import Footer2 from "../Footer/Footer2";
import job from "./Careers.module.css";
import Accordian3Careers from "../Accordian3Careers";

function Careers() {
  const openings = [
    {
      id: 1,
      title: "French Language Interpreter",
      language: "French",
      company: "Colorbar Cosmetics Private Limited",
      Shift: "24/7 rotational shifts",
      salary: "10 LPA",
      duration: "3 Months",
    },
    {
      id: 2,
      title: "Nepali Language Interpreter",
      language: "Nepali",
      company: "Colorbar Cosmetics Private Limited",
      Shift: "24/7 rotational shifts",
      salary: "4.2 LPA",
      duration: "3 Months",
    },
    {
      id: 3,
      title: "Tamil Language Interpreter",
      language: "Tamil",
      company: "Colorbar Cosmetics Private Limited",
      Shift: "24/7 rotational shifts",
      salary: "4.2 LPA",
      duration: "3 Months",
    },
    {
      id: 4,
      title: "Hindi Language Interpreter",
      language: "Hindi",
      company: "Colorbar Cosmetics Private Limited",
      Shift: "24/7 rotational shifts",
      salary: "4.2 LPA",
      duration: "3 Months",
    },
    {
      id: 5,
      title: "Bengali Language Interpreter",
      language: "Bengali",
      company: "Colorbar Cosmetics Private Limited",
      Shift: "24/7 rotational shifts",
      salary: "4.2 LPA",
      duration: "3 Months",
    },
    {
      id: 6,
      title: "Urdu Language Interpreter",
      language: "Urdu",
      company: "Colorbar Cosmetics Private Limited",
      Shift: "24/7 rotational shifts",
      salary: "4.2 LPA",
      duration: "3 Months",
    },
  ];

  const handleViewDetails = (id) => {
    window.location.href = `careers/details/${id}`;
  };

  return (
    <>
      {/* for meta tags  */}
      <Helmet>
        <title>
          Find Language Interpreter Jobs: Remote & In-Office Opportunities
        </title>
        <meta
          name="description"
          content="Want to Land at Your Dream Job as a Language Interpreter? Join Curiotory Today for Hybrid & Remote Language Interpreter Jobs and Take Your Career at a Whole Next Level!"
        />
        <meta
          name="keywords"
          content="language interpreter jobs, language interpreter jobs remote, language interpreter jobs work from home, language interpreter job vacancy, language interpreter job description, language translator job"
        />
      </Helmet>

      <Newnavbar />

      {/* title section */}
      <div className={job.hero}>
        <div className={job.heroContent}>
          <h2 className={job.herotitle}>Kick Start Your Journey With Us!</h2>
        </div>
      </div>

      {/* Steps Section */}

      <div className={job.steps}>
        <div className={job.firstRow}>
          {/* first step */}
          <div className={`${job.resp1} ${job.cover}`}>
            <h3>Step 1:</h3>
            <div className={job.step1}>
              <div className={job.stepContent}>
                <p>Download Curiotory App</p>
                <a
                  href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en-IN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={job.button2}>Download the App</button>
                </a>
              </div>
              <div className={job.stepIcon}>
                <img src="/Careers/step1.png" alt="Menu Section" />
              </div>
            </div>
          </div>

          {/* second step */}
          <div className={job.cover}>
            <h3>Step 2:</h3>
            <div className={job.step2}>
              <div className={job.stepContent}>
                <p>Go to Menu section of the Homepage</p>
              </div>
              <div className={job.stepIcon}>
                <img src="/Careers/step2.png" alt="Menu Section" />
              </div>
            </div>
          </div>

          {/* third step */}
          <div className={job.cover}>
            <h3>Step 3:</h3>
            <div className={job.step3}>
              <div className={job.stepContent}>
                <p>Select the “Career with Us” option</p>
              </div>
              <div className={job.stepIcon}>
                <img src="/Careers/step3.png" alt="Career Option" />
              </div>
            </div>
          </div>
        </div>

        {/* fourth step */}
        <div className={`${job.cover} ${job.resp4}`}>
          <h3>Step 4:</h3>
          <div className={job.step4}>
            <div className={`${job.stepContent} ${job.stepContent4}`}>
              <p>
                Choose your preferred Job title, read the details and
                requirements carefully.{" "}
              </p>
              <p>Apply to the Job role by filling up the form given.</p>
              <p>We'll review your profile and connect with you soon.</p>
              <a
                href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en-IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={job.button2}>Download the App</button>
              </a>
            </div>
            <div className={job.stepIcon}>
              <img src="/Careers/step4.png" alt="Apply" />
            </div>
          </div>
        </div>
      </div>

      {/* job avialable */}
      <div className={job.applyJobContainer}>
        <div className={job.opening}>
          <h2>Latest Opening</h2>
        </div>
        <div className={job.containeropening}>
          {openings.map((opening) => (
            <div
              key={opening.id}
              onClick={() => handleViewDetails(opening.id)}
              className={job.cardopening}
            >
              <h3>{opening.title}</h3>
              {/* <p>{opening.company}</p> */}
              <hr />
              <p>Language: {opening.language}</p>
              <p>Shift : {opening.Shift}</p>
              <p>Salary: {opening.salary}</p>
              {/* <p>{opening.duration}</p> */}
              <div className={job.footeropening}>
                <button
                  onClick={() => handleViewDetails(opening.id)}
                  className={job.buttonopening}
                >
                  View details &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* faq section */}
      <div>
        <div className={job.faqHeadingDivCss}>
          <h2 className={job.faq_heading}>Frequently Asked Questions</h2>
        </div>
        <div className={job.body_faq}>
          <div className={job.image_container}>
            <img src="/Index/faq.png" alt="FAQ FAQs" />
          </div>
          <div className={job.layout}>
            <Accordian3Careers />
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Careers;
