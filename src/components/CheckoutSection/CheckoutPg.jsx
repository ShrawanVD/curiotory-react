import React from "react";
import Newnavbar from "../NewNavbar/Newnavbar";
import Footer2 from "../Footer/Footer2";
// import job from "./Careers.module.css";

function Careers() {
  return (
    <>
      <Newnavbar />

      {/* title section */}
      <div className={job.title}>
        <h1 style={{ color: "#2f327d" }}>
          How to Kick Start Your Journey With US?
        </h1>
      </div>

      {/* steps */}

      {/* 1st step */}
      <div className={job.first}>
        <div className={job.left}>
          <h3>Step 1:</h3>
          <p>Download Curiotory App</p>
        </div>

        <div className={`${job.downloadButton} ${job.right}`}>
          <a
            href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en-IN"
            target="_blank"
          >
            <button className={job.button2}>Download the App</button>
          </a>
        </div>
      </div>

      {/* 2nd step */}
      <div
        className={job.second}
        style={{
          marginTop: "4rem",
        }}
      >
        <div className={job.left}>
          <img
            className={job.img}
            src="/Careers/step2.png"
            alt="step2"
          />
        </div>

        <div className={job.right}>
          <h3>Step 2:</h3>
          <p>Go to Menu section of the Homepage</p>
        </div>
      </div>

      {/* 3rd step */}
      <div
        className={job.third}
        style={{
          marginTop: "4rem",
        }}
      >
        <div className={job.left}>
          <h3>Step 3:</h3>
          <p>Select the “Career with Us” option</p>
        </div>

        <div className={job.right}>
          <img className={job.img} src="/Careers/step3.png" alt="step2" />
        </div>
      </div>

      {/* 4th step */}
      <div
        className={job.fourth}
        style={{
          marginTop: "4rem",
        }}
      >
        <div className={job.left}>
          <img className={job.img} src="/Careers/step4.png" alt="step2" />
        </div>

        <div className={job.right}>
          <h3>Step 4:</h3>
          <p>
            Choose your preferred Job title, read the details, requirements
            carefully. Apply to the Job role by filling up the form given. We'll
            review your profile and connect with you soon.
          </p>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Careers;
