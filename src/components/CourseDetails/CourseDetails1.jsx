import React from "react";
import buy from "./CourseDetails1.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Footer2 from "../../components/Footer/Footer2";

const CourseDetails1 = () => {
  return (
    <>
      <div>
        {/*  course - video section */}
        <div className={buy.container11}>
          {/* left section */}
          <div className={buy.left_section}>
            {/* video */}
            <div className={buy.video}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/EQ5g5VDbnG4?si=vsrAzB34Q4naDCE_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            {/* text */}
            <p className={buy.description}>
              This is the description of the course details video. It provides
              an overview of what the course will cover. This is the description
              of the course details video. It provides an overview of what the
              course will cover.
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
                Lifetime course access
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
            <a href="/checkout">
              <button className={buy.subscribeButton}>Subscribe Today</button>
            </a>
          </div>
        </div>

        {/* subscribe button for the footer */}

          <a className={buy.button_container} href="/checkout">
            <img style={{
              width:"30%",
              height:"2%",
              borderRadius:"10px"
            }} src="/Index/subscribe.png" alt="" />
          </a>
      </div>

      <Footer2 />
    </>
  );
};

export default CourseDetails1;
