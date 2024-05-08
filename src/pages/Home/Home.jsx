import Accordion from "../../components/Accordion";
import Footer from "../../components/Footer/Footer";
import Navv from "../../components/Navv/Navv";
import "./Home.css";
import { useState, useEffect } from "react";

// adding swiper
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// adding react-slick for sliding section
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Settings } from "@mui/icons-material";

function Home() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  // for infinite slike
  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    arrows: false,
    swipe: false,
    slidesToShow: 6,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  useEffect(() => {
    // After 1 second, hide div1 and show div2
    const timer = setTimeout(() => {
      setShowDiv1(false);
      setShowDiv2(true);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* mascot splash screen */}
      {showDiv1 && (
        <div>
          <div className="mascot-div">
            <img
              src="/mascot/newSpare1.gif"
              className="msacot-video"
              type="gif"
            />
          </div>
        </div>
      )}

      {showDiv2 && (
        <div>
          <Navv />
          <div>
            {/* <!-- cover page section --> */}

            <div className="cover-page">
              <div className="mascot-cover">
                <img src="/mascot/curo2.gif" />
              </div>
              <h1>An online language learning platform</h1>
              <div className="coverpage-para">
                <p>
                  Curious about learning new languages? Transform it into a
                  life-changing opportunity.
                </p>
              </div>
              <div className="coverpage-button">
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSezEFqtQiqJFcT8NcVjkoYIjZylKeMNOqP1fRuh8CxFhfgxkg/viewform"
                >
                  <button>Get Started</button>
                </a>
              </div>
            </div>

            {/* <!-- sliding section --> */}
            <div className="sliding-section">
              <div className="sliding-section-heading">
                <h1>Language we teach</h1>
              </div>
              <div className="sliding-container">
                <Slider {...settings}>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266pxpx"
                        src="/Index/Group-292.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-293.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-294.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-295.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-296.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-297.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-298.png"
                      />
                    </a>
                  </div>

                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266pxpx"
                        src="/Index/Group-292.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-293.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-294.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-295.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-296.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-297.png"
                      />
                    </a>
                  </div>
                  <div className="sliding-card">
                    <a>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-298.png"
                      />
                    </a>
                  </div>
                </Slider>
              </div>
            </div>

            {/* <!-- language Solution --> */}
            <div className="lang-sol">
              <div className="heading-lang-sol">
                <h1>Language Solutions</h1>
              </div>
              <div className="lang-card">
                <div className="cards">
                  <img width="173" height="187" src="/Index/Picture1.png" />
                  <h4>Cohorts</h4>
                  <p>
                    There are no age restrictions or skill gaps to learning new
                    languages. We help you take control of your life and unlock
                    your growth potential.
                  </p>
                </div>
                <div className="cards">
                  <img width="282" height="186" src="/Index/Picture2.png" />
                  <h4>School & College Partnerships</h4>
                  <p>
                    Multilingual students are better equipped to ace academics
                    and internationalize their careers. We help turn simple
                    curiosities into life-changing realities.
                  </p>
                </div>
                <div className="cards">
                  <img width="151" height="186" src="/Index/Picture3.png" />
                  <h4>Corporate Training</h4>
                  <p>
                    There are no age restrictions or skill gaps to learning new
                    languages. We help you take control of your life and unlock
                    your growth potential.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- learn foreign language section --> */}
            <div className="learn-foriegn-lang-section">
              <div className="learn-foriegn-lang">
                <div className="learn-foriegn-lang-heading">
                  <h1>Why learn foreign languages?</h1>
                </div>
                <div className="learn-foriegn-lang-container">
                  <div className="container1">
                    <div className="container-cards">
                      <img
                        width="97"
                        height="74"
                        src="/Index/learn foreign - 1.png"
                      />
                      <h1>Academic Excellence</h1>
                      <p>
                        Ace exams like SAT & GRE and outperform the rest in
                        school/college interviews.
                      </p>
                    </div>
                    <div className="container-cards">
                      <img
                        width="97"
                        height="74"
                        src="/Index/learn foreign - 2.png"
                      />
                      <h1>Dream Careers</h1>
                      <p>
                        Boost your resume to world-className standards and apply
                        for international job positions.
                      </p>
                    </div>
                    <div className="container-cards">
                      <img
                        width="97"
                        height="74"
                        src="/Index/learn foreign - 3.png"
                      />
                      <h1>Real-Life Skills</h1>
                      <p>
                        Pick up valuable skills, such as multitasking,
                        problem-solving, conflict management, etc.
                      </p>
                    </div>
                    <div className="container-cards">
                      <img
                        width="97"
                        height="74"
                        src="/Index/learn foreign - 4.png"
                      />
                      <h1>Cognitive Focus</h1>
                      <p>
                        Raise your level of cognitive intelligence and sharpen
                        your overall thinking process.
                      </p>
                    </div>
                    <div className="container-cards">
                      <img
                        width="97"
                        height="74"
                        src="/Index/learn foreign - 5.png"
                      />
                      <h1>Self-Confidence Boost</h1>
                      <p>
                        Amplify your confidence levels to easily maximize
                        strengths and manage weaknesses.
                      </p>
                    </div>
                    <div className="container-cards">
                      <img
                        width="97"
                        height="74"
                        src="/Index/learn foreign - 6.png"
                      />
                      <h1>Cultural Empathy</h1>
                      <p>
                        Gain a deeper cultural perspective of diverse cultures
                        and be more empathetic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ------ why foreign lang centers.... section --> */}

            <div className="foreign-lang-section">
              <div className="foreign-lang-section-heading">
                <h1>Why foreign language centres are not suitable?</h1>
              </div>
              <div className="foreign-lang-container">
                <div className="foreign-lang-left-container">
                  <h4>
                    Learning foreign languages is a no-brainer. It empowers
                    individuals of all ages, personally and professionally, to
                    maximize their potential for success on the path they
                    choose.
                  </h4>
                  <br />
                  <p>
                    However, like any life-changing skill, learning new
                    languages is a journey that demands proper guidance and
                    expertise. Else, you’ll face barriers that can stop you dead
                    in your tracks. These include:
                  </p>
                </div>
                <div className="foreign-lang-right-container">
                  <div className="foreign-lang-sub-contianer">
                    <img
                      width="140px"
                      height="83px"
                      src="/Index/why foreign - 1.png"
                    />
                    <p>
                      Generic, one-size-fits-all curriculum instead of
                      personalized courses
                    </p>
                  </div>
                  <div className="foreign-lang-sub-contianer">
                    <img
                      width="140px"
                      height="83px"
                      src="/Index/why foreign - 2.png"
                    />
                    <p>
                      Rigid learning assessment by tutors with limited
                      proficiency & low experience levels
                    </p>
                  </div>
                  <div className="foreign-lang-sub-contianer">
                    <img
                      width="140px"
                      height="83px"
                      src="/Index/why foreign - 3.png"
                    />
                    <p>
                      Outdated remote technology set-ups that cause learning
                      delays & disruptions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- why we stand out --> */}
            <div className="stand-out-section">
              <div className="stand-out-left-section">
                <div className="stand-out-text">
                  <h1>Why we stand out</h1>
                </div>
                <div className="stand-out-images">
                  <img
                    width="274px"
                    height="446px"
                    src="/Index/why we stand out section.png"
                  />
                </div>
              </div>
              <div className="stand-out-right-section">
                <div className="stand-out-container">
                  <div className="stand-out-card">
                    <div className="stand-out-left-part">
                      <h1>Learning from the best</h1>
                    </div>
                    <div className="stand-out-right-part">
                      <p>
                        Learn from native language & Indian teachers passionate
                        about empowering youngsters to break global barriers.
                      </p>
                    </div>
                  </div>
                  <div className="stand-out-card">
                    <div className="stand-out-left-part">
                      <h1>Customize as per your goals</h1>
                    </div>
                    <div className="stand-out-right-part">
                      <p>
                        Customize the course based on your personal and
                        professional goals to make the learning journey more
                        focused.
                      </p>
                    </div>
                  </div>
                  <div className="stand-out-card">
                    <div className="stand-out-left-part">
                      <h1>Continuous improvement</h1>
                    </div>
                    <div className="stand-out-right-part">
                      <p>
                        Take formative periodic tests & quizzes to continuously
                        improve with real-time analytics for in-depth reports
                        about your learning.
                      </p>
                    </div>
                  </div>
                  <div className="stand-out-card">
                    <div className="stand-out-left-part">
                      <h1>Everything’s user-friendly</h1>
                    </div>
                    <div className="stand-out-right-part">
                      <p>
                        Attend live, interactive, and dynamic lectures with
                        device-friendly course material and modules for
                        self-paced learning.
                      </p>
                    </div>
                  </div>
                  <div className="stand-out-card">
                    <div className="stand-out-left-part">
                      <h1>Been there, done that</h1>
                    </div>
                    <div className="stand-out-right-part">
                      <p>
                        Be a part of a learning ecosystem that is backed by two
                        decades of niche experience in the online education
                        space.
                      </p>
                    </div>
                  </div>
                  <div className="stand-out-card">
                    <div className="stand-out-left-part">
                      <h1>Meaningful preparation</h1>
                    </div>
                    <div className="stand-out-right-part">
                      <p>
                        Prepare for all globally-recognized language
                        certifications – our courses are aligned with the
                        framework of your respective country.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- 11 foreign language section --> */}
            <div className="various-lang">
              <div
                className="foreign-lang-border"
                style={{
                  backgroundImage: "url('/mascot/20imagemascot.png')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "auto",
                }}
              >
                <div className="foreign-lang">
                  <h1>
                    11{" "}
                    <span style={{ color: "#ff7439" }}>foreign language</span>{" "}
                    learning courses for unlocking attractive opportunities.
                  </h1>
                </div>
                <div className="foreign-lang-content">
                  <div className="foreign-lang-content-para">
                    <p>
                      However, like any life-changing skill, learning new
                      languages is a journey that demands proper guidance and
                      expertise. Curiotory can provide the ideal platform for
                      learning languages the right way.
                    </p>
                  </div>
                  <div className="european-lang-section">
                    <div className="european-lang-left-part">
                      <h2>
                        European{" "}
                        <span style={{ color: "#2f327d" }}>Languages</span>
                      </h2>
                    </div>
                    <div className="european-lang-right-part">
                      <a id="afterbutton" href="./html/french.html">
                        <button className="lang-button">French</button>
                      </a>
                      <a id="afterbutton" href="./html/german.html">
                        <button className="lang-button">German</button>
                      </a>
                      <a id="afterbutton" href="./html/dutch.html">
                        <button className="lang-button">Dutch</button>
                      </a>
                      <a id="afterbutton" href="./html/russian.html">
                        <button className="lang-button">Russian</button>
                      </a>
                      <a id="afterbutton" href="./html/spanish.html">
                        <button className="lang-button">Spanish</button>
                      </a>
                      <a id="afterbutton" href="./html/english.html">
                        <button className="lang-button">English</button>
                      </a>
                      <a id="afterbutton" href="./html/portuguese.html">
                        <button className="lang-button">Portuguese</button>
                      </a>
                    </div>
                  </div>
                  <div className="asian-lang-section">
                    <div className="asian-lang-left-part">
                      <h2>
                        Asian{" "}
                        <span style={{ color: "#2f327d" }}>Languages</span>
                      </h2>
                    </div>
                    <div className="asian-lang-right-part">
                      <a id="afterbutton" href="./html/mandarin.html">
                        <button className="lang-button">Mandarin</button>
                      </a>
                      <a id="afterbutton" href="./html/korean.html">
                        <button className="lang-button">Korean</button>
                      </a>
                      <a id="afterbutton" href="./html/arabic.html">
                        <button className="lang-button">Arabic</button>
                      </a>
                      <a id="afterbutton" href="./html/japanese.html">
                        <button className="lang-button">Japanese</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- GET STARTED SECTION --> */}

            <div className="get-started">
              <div className="left-side">
                <div className="heading">
                  <h1>Fuel your global dreams by learning foreign languages</h1>
                  <br />
                </div>

                <div className="info">
                  <ul>
                    <li>World-className virtual teaching platform</li>
                    <hr className="info-divider" />
                    <li>Course flexibility and customization</li>
                    <hr className="info-divider" />
                    <li>Free demo className for any language</li>
                  </ul>
                </div>

                <a
                  className="register-button"
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSezEFqtQiqJFcT8NcVjkoYIjZylKeMNOqP1fRuh8CxFhfgxkg/viewform"
                >
                  Register as a teacher
                </a>
              </div>

              <div className="right-side">
                <img src="/Index/cropped-img.JPG" alt="" />
              </div>
            </div>

            {/* <!-- REVIEWS SECTION --> */}

            <div className="review-swiper-css">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                // navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false, // Resume autoplay after interaction
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="profile-picture">
                      <img src="/Index/review - swapna.png" alt="Swapna Jain" />
                    </div>
                    <div className="name">Swapna Jain</div>
                    <div className="designation">
                      Korean TOPIK 1 Level 1 - Brewer – Maine, US
                    </div>
                    <div className="reviews">
                      <p>
                        Being part of a big organization, one of my 2023 goals
                        was to learn a foreign language. So, I got to learn from
                        Priya Nagpal, my Korean tutor at Curiotory. And what an
                        experience it has been! I like everything about the
                        course.I would recommend Curiotory and Priya Nagpal to
                        everyone!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="profile-picture">
                      <img
                        src="/Index/review - reeva.png"
                        alt="Reeva Arsingha"
                      />
                    </div>
                    <div className="name">Reeva Arsinghakar</div>
                    <div className="designation">
                      Spanish B1 - Akola Maharashtra
                    </div>
                    <div className="reviews">
                      <p>
                        “Firstly, it was a lot of fun to learn with Curiotory.
                        The teaching process was perfect, and the tutor ensured
                        I was thoroughly engaged. So I enjoyed it a lot! Their
                        material helped me a lot too. Moreover, the platform is
                        very organized and systematic. It was overall a great
                        learning experience.”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="profile-picture">
                      <img src="/Index/review - riya.png" alt="Riya Malhotra" />
                    </div>
                    <div className="name">Riya Malhotra</div>
                    <div className="designation">German A1 - Germany</div>
                    <div className="reviews">
                      <p>
                        “The German course was very good. I also found it very
                        convenient as I could attend the course per my schedule.
                        As I am studying medicine in Germany my language
                        knowledge came handy. My tutor, Disha, was kind enough
                        to make adjustments many times so that I could easily
                        recover whenever I missed a session. I am definitely
                        satisfied!”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="profile-picture">
                      <img
                        src="/Index/review - bhavana.png"
                        alt="Bhawana Pawar HR"
                      />
                    </div>
                    <div className="name">Bhawana Pawar HR</div>
                    <div className="designation">
                      Jabil Manufacturing Pvt. Ltd. - Mandarin (Ranjangaon,
                      Maharashtra)
                    </div>
                    <div className="reviews">
                      <p>
                        “We are happy to receive Curiotory language service, as
                        our teams gained a lot of knowledge. It went a long way
                        to help improve their efficiency at work . We hope to
                        work again with Curiotory in future &nbsp;.”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
                ...
              </Swiper>
            </div>

            {/* <!-- REVIEWS SECTION ENDS --> */}

            {/* <!-- FAQ SECTION --> */}
            <div className="faqHeadingDivCss">
              <h1
                className="faq-heading"
                style={{ color: "#002e5b", texAlign: "center" }}
              >
                Frequently Asked Questions
              </h1>
            </div>
            <div className="body-faq">
              <div className="image-container">
                <img src="/Index/faq.png" alt="here is an image" />
              </div>
              <div className="layout">
                <Accordion />
              </div>
            </div>

            {/* <!-- FAQ SECTION ENDS --> */}
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
