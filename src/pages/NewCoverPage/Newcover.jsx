import Newnavbar from "../../components/NewNavbar/Newnavbar";
import newcover from "./Newcover.module.css";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazyload";
import { Player } from "@lottiefiles/react-lottie-player";
import Courselist from "../../components/CourseList/Courselist";
import Accordion from "../../components/Accordion";
import { useState, useEffect } from "react";
import "../Home/Home.css";
import Popup from "../../components/Popup/Popup";

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
import Footer2 from "../../components/Footer/Footer2";
import CounsellingForm from "../../components/CounsellingForm/CounsellingForm";

function Newcover() {
  // pop up

  const [showPopup, setShowPopup] = useState(false);

  // ----------------

  const [showNewCard, setShowNewCard] = useState(false);

  // Handle next slide (right arrow)
  const handleNext = () => {
    setShowNewCard(true); // Show the second card
  };

  // Handle previous slide (left arrow)
  const handlePrev = () => {
    setShowNewCard(false); // Show the first card
  };

  const handleCardClick = () => {
    setShowNewCard(!showNewCard);
  };


  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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
    // Show main content after splash screen duration
    const timer = setTimeout(() => {
      setShowDiv1(false);
      setShowDiv2(true);

      // Show popup a few seconds after splash screen hides
      const popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 2000); // Adjust this delay as needed

      return () => clearTimeout(popupTimer);
    }, 2000); // Splash screen duration (2 seconds)

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

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
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
        {/* Canonical Link */}
        <link rel="canonical" href="https://qurocity.ai/" />

        {/* Breadcrumb Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Learn Korean",
                item: "https://qurocity.ai/korean",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Learn English",
                item: "https://qurocity.ai/english",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Learn French",
                item: "https://qurocity.ai/french",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Learn German",
                item: "https://qurocity.ai/german",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Learn Spanish",
                item: "https://qurocity.ai/spanish",
              },
            ],
          })}
        </script>

        {/* Google Ads Conversion Tracking Script */}
        <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-16458367327/a0t5CM_Xm9MZEN-C-6c9'});`}
        </script>

      </Helmet>

      {/* mascot splash screen */}
      {showDiv1 && (
        <div>
          <div className={newcover.mascotDiv}>
            <LazyLoad height={200} offset={100}>
              <img
                src="/mascot/newSpare1.gif"
                className="msacot-video"
                type="gif"
                alt="mascot curo"
              />
            </LazyLoad>
          </div>
        </div>
      )}

      {/* content */}
      {showDiv2 && (
        <div>
          <Newnavbar className={newcover.newnewnav} />

          {/* cover page  */}
          <div className={newcover.covernewdiv}>
            <div className={newcover.coverleftnewside}>
              <div
                className={`${newcover.covernewcard} ${
                  showNewCard ? newcover.slideOut : newcover.slideIn
                }`}
              >
                {showNewCard ? (
                  <>
                    {/* <div className={newcover.newcardImageContainer}>
                      <img
                        src="/Index/curoCoversmallimg.png"
                        alt="top right"
                        className={newcover.newcardImage}
                      />
                    </div> */}
                    <h2 className={newcover.covernewheading1}>
                      What Makes Qurocity the Top Choice for Language Learning:
                    </h2>

                    <hr className={newcover.divi} />
                    <div className={newcover.covernewFirstContainer}>
                      <p>
                        At Qurocity, we stand out from competitors by offering a
                        flexible and convenient language learning course that
                        allows you to learn languages online at home, fitting
                        seamlessly into your busy schedule, unlike traditional
                        fixed offline classes. Our platform features highly
                        qualified tutors and cutting-edge technology, ensuring
                        engaging and motivating language lessons that enhance
                        your learning experience. Moreover, our foreign language
                        courses are enriched with culturally rich content,
                        preparing you for real-world communication and
                        interactions, making our language learning platform the
                        ideal choice for beginners and seasoned learners alike.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* <div className={newcover.newcardImageContainer}>
                      <img
                        src="/Index/curoCoversmallimg.png"
                        alt="top right"
                        className={newcover.newcardImage}
                      />
                    </div> */}
                    <h2 className={newcover.covernewheading}>
                      Achieve Global Excellence with Qurocity’s Language
                      Learning Courses
                    </h2>
                    <hr className={newcover.divi} />
                    <p className={newcover.covernewsubheading}>
                      Learn Asian, European and Many More Second Languages
                      Anytime, Anywhere
                    </p>
                    <p className={newcover.covernewdescription}>
                      Qurocity, your go-to app for second language learning, is
                      here to transform your language journey! Our dynamic
                      foreign language courses feature bite-sized, interactive
                      lessons, audiobooks, cultural blogs and more crafted by
                      top language experts. Whether you're looking to upskill
                      for your career, connect with new cultures, or simply
                      enjoy the art of language, Qurocity offers an unparalleled
                      learning experience that fits right in your pocket.
                    </p>
                    <a
                      href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en"
                      target="_blank"
                      className={newcover.firstBtn}
                    >
                      <button className={newcover.covernewdownloadButton}>
                        Download the app now!
                      </button>
                    </a>
                  </>
                )}

                {/* Next Icon */}
                <div
                  className={newcover.nextIconContainer}
                  onClick={handleCardClick}
                >
                  <i
                    style={{
                      color: "#00046C",
                    }}
                    class="fa-solid fa-chevron-right div_next"
                  ></i>
                </div>
              </div>
            </div>
            <div className={newcover.covernewrightside}>
              <img
                src="/Index/coverpagenewimg.png"
                alt="Qurocity cover"
                className={newcover.rightImage}
              />
            </div>
          </div>

          {/* mobile screen first content */}
          <div className={newcover.covernewdiv1}>
            <div className={newcover.coverleftnewside}>
              <div
                className={`${newcover.covernewcard} ${
                  showNewCard ? newcover.slideOut : newcover.slideIn
                }`}
                onClick={handleCardClick}
              >
                {showNewCard ? (
                  <>
                    {/* <div className={newcover.newcardImageContainer}>
                      <img
                        src="/Index/curoCoversmallimg.png"
                        alt="top right"
                        className={newcover.newcardImage}
                      />
                    </div> */}
                    <h2 className={newcover.covernewheading2}>
                      What Makes Qurocity the Top Choice for Language Learning:
                    </h2>
                    <div className={newcover.covernewFirstContainer}>
                      <div className={newcover.covernewFirstsubContainer}>
                        <p>
                          At Qurocity, we stand out from competitors by offering
                          a flexible and convenient language learning course
                          that allows you to learn languages online at home,
                          fitting seamlessly into your busy schedule, unlike
                          traditional fixed offline classes. Our platform
                          features highly qualified tutors and cutting-edge
                          technology, ensuring engaging and motivating language
                          lessons that enhance your learning experience.
                          Moreover, our foreign language courses are enriched
                          with culturally rich content, preparing you for
                          real-world communication and interactions, making our
                          language learning platform the ideal choice for
                          beginners and seasoned learners alike.
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* <div className={newcover.newcardImageContainer}>
                      <img
                        src="/Index/curoCoversmallimg.png"
                        alt="top right"
                        className={newcover.newcardImage}
                      />
                    </div> */}
                    <h2 className={newcover.covernewheadingsub}>
                      Achieve Global Excellence with Qurocity’s Language
                      Learning Courses
                    </h2>
                    <hr />
                    <p className={newcover.covernewsubheadingsub}>
                      Learn Asian, European and Many More Second Languages
                      Anytime, Anywhere
                    </p>
                    <p className={newcover.covernewdescriptionsub}>
                      Qurocity, your go-to app for second language learning, is
                      here to transform your language journey! Our dynamic
                      foreign language courses feature bite-sized, interactive
                      lessons, audiobooks, cultural blogs and more crafted by
                      top language experts. Whether you're looking to upskill
                      for your career, connect with new cultures, or simply
                      enjoy the art of language, Qurocity offers an unparalleled
                      learning experience that fits right in your pocket.
                    </p>

                    <a
                      href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en"
                      target="_blank"
                      className={newcover.firstBtn}
                    >
                      <button className={newcover.covernewdownloadButton}>
                        Download the app now!
                      </button>
                    </a>
                  </>
                )}
              </div>
            </div>
            {/* Next Icon */}
            {/* <div
              className={newcover.nextIconContainer1}
              onClick={handleCardClick}
            >
              <i
                style={{
                  color: "#00046C",
                }}
                class="fa-solid fa-chevron-right div_next"
              ></i>
            </div> */}

            {/* Left Arrow */}
            {showNewCard && (
              <div className={newcover.prevIconContainer} onClick={handlePrev}>
                <i
                  style={{ color: "#00046C" }}
                  className="fa-solid fa-chevron-left div_prev"
                ></i>
              </div>
            )}

            {/* Right Arrow */}
            {!showNewCard && (
              <div className={newcover.nextIconContainer1} onClick={handleNext}>
                <i
                  style={{ color: "#00046C" }}
                  className="fa-solid fa-chevron-right div_next"
                ></i>
              </div>
            )}
            <div className={newcover.covernewrightside}>
              <img
                src="/Index/coverpagenewimg.png"
                alt="Qurocity cover"
                color="black"
                className={newcover.rightImage}
              />
            </div>
          </div>

          
          {/* whtsapp icon */}
          <a
            href="https://api.whatsapp.com/send?phone=9373902340&text=Hello%21%20Can you assist me in..."
            target="_blank"
            className={newcover.whtsapp_href}
          >
            <div className={newcover.whatsapp}>
              <img
                width="65"
                height="65"
                src="https://img.icons8.com/color/48/whatsapp--v1.png"
                alt="whatsapp--v1"
              />

              <p>Contact Us</p>
            </div>
          </a>

          {/* counselling form */}
          {/* <CounsellingForm /> */}

          {/* course list */}
          <Courselist />

          {/* lottie player animation */}
          <div>
            <div className={newcover.lottie}>
              <LazyLoad
                height={200}
                offset={100}
                className={newcover.lottieSection}
              >
                <Player
                  autoplay
                  loop
                  src="/lottiePlayer/proFinal.json"
                  className={newcover.iframeLottie}
                />
              </LazyLoad>
            </div>
            <div className={newcover.downloadButton}>
              <div className={newcover.coverpageButton}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en"
                >
                  <button>Download the app</button>
                </a>
              </div>
            </div>
          </div>

          {/* Newsppr section */}
          <div className={newcover.newsppr}>
            <div className={newcover.pprLayout}>
              <h3>Featured in Top Columns</h3>

              {/* TOI */}
              <div className={newcover.pprContent}>
                <div className={newcover.pprLeft}>
                  <img src="/Index/TOI.webp" alt="Featured in Times of India" />
                </div>
                <div className={newcover.pprRight}>
                  <p>
                    Meet our versatile and revolutionary Founder & CEO of
                    Qurocity- The ultimate language learning app, Mrs Sheetal
                    Ramkumar Featured on Times Of India For{" "}
                    <a
                      target="_blank"
                      href="https://timesofindia.indiatimes.com/business/india-business/most-inspiring-entrepreneurs-to-watch-in-2024/articleshow/111340764.cms"
                    >
                      “The Most Inspiring Entrepreneurs to watch in 2024”
                    </a>
                    . Her phenomenal leadership skills and vision of building
                    Bharat’s first language learning app has created a much
                    greater impact on our team and other aspiring entrepreneurs
                    too. Her success story is truly inspiring and makes us want
                    to believe in ourselves too. Under her leadership in
                    revolutionizing edutech, Qurocity has been able to cater to
                    people all over the world, who are willing to make a change
                    in their life through language learning and that's how
                    Qurocity became the forefront of language education. To dive
                    into the journey of Qurocity read more :{" "}
                    <a
                      target="_blank"
                      href="https://timesofindia.indiatimes.com/business/india-business/most-inspiring-entrepreneurs-to-watch-in-2024/articleshow/111340764.cms"
                    >
                      Times Of India
                    </a>
                  </p>
                </div>
              </div>

              <hr className={newcover.newsppr_hr} />

              {/* Eco Times */}
              <div className={newcover.pprContentRight}>
                <div className={newcover.pprRight}>
                  <p>
                    We are thrilled to announce that Qurocity- The Ultimate
                    Language Learning Platform is featured in The Economic
                    Times' prestigious list of{" "}
                    <a href="https://economictimes.indiatimes.com/news/india/most-trusted-brands-to-watch-in-2024/articleshow/111409176.cms?from=mdr">
                      "The Most Trusted Brands To Watch in 2024"!{" "}
                    </a>{" "}
                    This recognition highlights our unwavering commitment to
                    delivering top-notch services and building trust with our
                    valued customers. Being spotlighted by such a renowned
                    publication underscores our dedication to excellence and
                    innovation. We are immensely grateful to our fantastic team
                    for their continued support and trust. Stay tuned as we
                    continue to bring to you the best of linguistics ever known!
                    Here’s to much more achievements to come in the future for
                    Qurocity! Want to Read more:{" "}
                    <a href="https://economictimes.indiatimes.com/news/india/most-trusted-brands-to-watch-in-2024/articleshow/111409176.cms?from=mdr">
                      Economic Times
                    </a>
                  </p>
                </div>
                <div className={newcover.pprLeft}>
                  <img src="/Index/ET.webp" alt="New Featured Image" />
                </div>
              </div>

              <hr className={newcover.newsppr_hr} />

              {/* ISO certified: */}
              <div className={newcover.iso}>
                <div className={newcover.pprLeft}>
                  <img src="/Index/ISO-Qurocity.jpg" alt="ISO - Qurocity" />
                </div>
                <div className={newcover.pprRight}>
                  <p>
                    <strong className={newcover.iso_head}>
                      Qurocity: ISO Certified and Trusted for Language Learning
                      Excellence
                    </strong>
                    <br />
                    <br />
                    At Qurocity, we are proud to be ISO certified, demonstrating
                    our unwavering commitment to quality and excellence in
                    language education. This prestigious compliance
                    certification reflects our dedication to providing top-notch
                    courses, reliable service, and continuous improvement. With
                    precise quality assurance systems in place, our ISO
                    certification ensures that you receive a world-class
                    learning experience according to your needs. Trust Qurocity
                    to be your partner in achieving your language learning goals
                    with the assurance of our trusted and credible standards.
                  </p>
                </div>
              </div>

              <hr className={newcover.newsppr_hr} />
            </div>
          </div>

          {/* Key benefits section */}
          <div>
            <div className={newcover.solcontainer}>
              {/* <h2 className={newcover.solheader}>
                Our Solutions
              </h2> */}
              <h2 className={newcover.solheader}>
                Key Features of Qurocity’s Foreign Language Courses
              </h2>
              <div className={newcover.solution}>
                <div className={newcover.iconContainer}>
                  <LazyLoad offset={100}>
                    <img
                      width="173"
                      height="187"
                      src="/Index/Picture1.png"
                      alt="1st solution"
                    />
                  </LazyLoad>
                </div>
                <p className={newcover.text}>
                  There are no age restrictions or skill gaps to learning new
                  languages. We help you take control of your life and unlock
                  your growth potential.
                </p>
              </div>
              <div className={newcover.solution2}>
                <p className={newcover.text}>
                  Multilingual students are better equipped to ace academics and
                  internationalize their careers. We help turn simple
                  curiosities into life-changing realities.
                </p>
                <div className={newcover.iconContainer}>
                  <LazyLoad offset={100}>
                    <img
                      width="220"
                      height="146"
                      src="/Index/Picture2.png"
                      alt="2nd solution"
                    />
                  </LazyLoad>
                </div>
              </div>
              <div className={newcover.solution}>
                <div className={newcover.iconContainer}>
                  <LazyLoad height={200} offset={100}>
                    <img
                      width="151"
                      height="186"
                      src="/Index/Picture3.png"
                      alt="3rd solution"
                    />
                  </LazyLoad>
                </div>
                <p className={newcover.text}>
                  There are no age restrictions or skill gaps to learning new
                  languages. We help you take control of your life and unlock
                  your growth potential.
                </p>
              </div>
            </div>
          </div>

          {/* sliding languages */}
          <div className="sliding-section">
            <div className="sliding-section-heading">
              {/* <h2>Languages we teach</h2> */}
              <h2>Foreign Languages to channelize your linguistics career </h2>
            </div>
            <div className="sliding-container">
              <Slider {...settings}>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266pxpx"
                        src="/Index/Group-292.png"
                        alt="French"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-293.png"
                        alt="German"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-294.png"
                        alt="Dutch"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-295.png"
                        alt="Portuguese"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-296.png"
                        alt="Russian"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-297.png"
                        alt="Japanese"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-298.png"
                        alt="Korean"
                      />
                    </LazyLoad>
                  </a>
                </div>

                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266pxpx"
                        src="/Index/Group-292.png"
                        alt="French"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-293.png"
                        alt="German"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-294.png"
                        alt="Dutch"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-295.png"
                        alt="Portuguese"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-296.png"
                        alt="Russian"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-297.png"
                        alt="Japanese"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="sliding-card">
                  <a>
                    <LazyLoad height={200} offset={100}>
                      <img
                        width="216px"
                        height="266px"
                        src="/Index/Group-298.png"
                        alt="Korean"
                      />
                    </LazyLoad>
                  </a>
                </div>
              </Slider>
            </div>
          </div>

          {/* wondering how learning */}
          <div className={newcover.wonderingContainer}>
            <h2>
              Wondering how learning a foreign language is going to benefit you
              ?
            </h2>
            <hr />
            <div className="container1">
              <div className="container-cards">
                <LazyLoad offset={100}>
                  <img
                    width="97"
                    height="74"
                    src="/Index/learn foreign - 1.png"
                    alt="Academic Excellance"
                  />
                </LazyLoad>
                <h3>Academic Excellence</h3>
                <p>
                  Ace exams like SAT & GRE and outperform the rest in
                  school/college interviews.
                </p>
              </div>
              <div className="container-cards">
                <LazyLoad offset={100}>
                  <img
                    width="97"
                    height="74"
                    src="/Index/learn foreign - 2.png"
                    alt="Dream Careers"
                  />
                </LazyLoad>

                <h3>Dream Careers</h3>
                <p>
                  Boost your resume to world-className standards and apply for
                  international job positions.
                </p>
              </div>
              <div className="container-cards">
                <LazyLoad offset={100}>
                  <img
                    width="97"
                    height="74"
                    src="/Index/learn foreign - 3.png"
                    alt="Real-Life Skills"
                  />
                </LazyLoad>

                <h3>Real-Life Skills</h3>
                <p>
                  Pick up valuable skills, such as multitasking,
                  problem-solving, conflict management, etc.
                </p>
              </div>
              <div className="container-cards">
                <LazyLoad offset={100}>
                  <img
                    width="97"
                    height="74"
                    src="/Index/learn foreign - 4.png"
                    alt="Cognitive Focus"
                  />
                </LazyLoad>

                <h3>Cognitive Focus</h3>
                <p>
                  Raise your level of cognitive intelligence and sharpen your
                  overall thinking process.
                </p>
              </div>
              <div className="container-cards">
                <LazyLoad offset={100}>
                  <img
                    width="97"
                    height="74"
                    src="/Index/learn foreign - 5.png"
                    alt="Self-Confidence Boost"
                  />
                </LazyLoad>

                <h3>Self-Confidence Boost</h3>
                <p>
                  Amplify your confidence levels to easily maximize strengths
                  and manage weaknesses.
                </p>
              </div>
              <div className="container-cards">
                <LazyLoad offset={100}>
                  <img
                    width="97"
                    height="74"
                    src="/Index/learn foreign - 6.png"
                    alt="Cultural Empathy"
                  />
                </LazyLoad>

                <h3>Cultural Empathy</h3>
                <p>
                  Gain a deeper cultural perspective of diverse cultures and be
                  more empathetic.
                </p>
              </div>
            </div>
          </div>

          {/* Why online lang */}
          <div className={newcover.wonderingContainer}>
            {/* <h2>
              Why Online Language Learning Triumphs Over Traditional Centers
            </h2> */}
            <h2 color="#00046C">Why Our Online Language Learning Triumphs</h2>
            <hr color="#00046C" />
            <div className="foreign-lang-container">
              <div className="foreign-lang-left-container">
                <ul>
                  <li>
                    Personalized curriculums for that focused or targeted
                    learning or choose from our full length courses as well.
                  </li>
                  <li>
                    Flexible learning and assessments by tutors with native
                    proficiency and teaching experience
                  </li>
                  <li>
                    No learning delays or disruptions with latest tools for LMS
                    and passive learning.
                  </li>
                </ul>
              </div>
              <div className="foreign-lang-right-container">
                <LazyLoad offset={100}>
                  <img
                    width="370"
                    src="/Index/online.png"
                    alt="Online Language Learning Triumphs"
                  />
                </LazyLoad>
              </div>
            </div>
          </div>

          {/* Why we stand out */}
          <div className="stand-out-section">
            <div className="stand-out-left-section">
              <div className="stand-out-text">
                <h2
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  Why we stand out
                </h2>
              </div>
              <div className="stand-out-images">
                <LazyLoad offset={100}>
                  <img
                    width="274px"
                    height="446px"
                    src="/Index/why we stand out section.png"
                    alt="We Stand Out!"
                  />
                </LazyLoad>
              </div>
            </div>
            <div className="stand-out-right-section">
              <div className="stand-out-container">
                <div className="stand-out-card borderone">
                  <div className="stand-out-left-part">
                    <h3>Learning from the best</h3>
                  </div>
                  <div className="stand-out-right-part">
                    <p>
                      Learn from native language & Indian teachers passionate
                      about empowering youngsters to break global barriers.
                    </p>
                  </div>
                </div>
                <hr className="divider-stand-out-card" />
                <div className="stand-out-card">
                  <div className="stand-out-left-part">
                    <h3>Customize as per your goals</h3>
                  </div>
                  <div className="stand-out-right-part">
                    <p>
                      Customize the course based on your personal and
                      professional goals to make the learning journey more
                      focused.
                    </p>
                  </div>
                </div>
                <hr className="divider-stand-out-card" />
                <div className="stand-out-card">
                  <div className="stand-out-left-part">
                    <h3>Continuous improvement</h3>
                  </div>
                  <div className="stand-out-right-part">
                    <p>
                      Take formative periodic tests & quizzes to continuously
                      improve with real-time analytics for in-depth reports
                      about your learning.
                    </p>
                  </div>
                </div>
                <hr className="divider-stand-out-card" />
                <div className="stand-out-card">
                  <div className="stand-out-left-part">
                    <h3>Everything’s user-friendly</h3>
                  </div>
                  <div className="stand-out-right-part">
                    <p>
                      Attend live, interactive, and dynamic lectures with
                      device-friendly course material and modules for self-paced
                      learning.
                    </p>
                  </div>
                </div>
                <hr className="divider-stand-out-card" />
                <div className="stand-out-card">
                  <div className="stand-out-left-part">
                    <h3>Been there, done that</h3>
                  </div>
                  <div className="stand-out-right-part">
                    <p>
                      Be a part of a learning ecosystem that is backed by two
                      decades of niche experience in the online education space.
                    </p>
                  </div>
                </div>
                <hr className="divider-stand-out-card" />
                <div className="stand-out-card borderlast">
                  <div className="stand-out-left-part">
                    <h3>Meaningful preparation</h3>
                  </div>
                  <div className="stand-out-right-part">
                    <p>
                      Prepare for all globally-recognized language
                      certifications – our courses are aligned with the
                      framework of your respective country.
                    </p>
                  </div>
                </div>
                <hr className="divider-stand-out-card" />
              </div>
            </div>
          </div>

          {/* 11 foreign languages */}
          <div>
            <div className={newcover.foreignContainer}>
              <h2 className={newcover.foreignTitle}>
                11{" "}
                <span
                  className={newcover.foreignHighlight}
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  foreign language
                </span>{" "}
                learning courses for unlocking attractive opportunities.
              </h2>
              <p className={newcover.foreignSubtitle}>
                However, like any life-changing skill, learning new languages is
                a journey that demands proper guidance and expertise. Qurocity
                can provide the ideal platform for learning languages the right
                way.
              </p>
              <div className={newcover.mascotLang}>
                <div className={newcover.mascotImg}>
                  <LazyLoad offset={100}>
                    <img src="/mascot/CapLift_crop.gif" alt="curo mascot" />
                  </LazyLoad>
                </div>
                <div className={newcover.euroAsianlang}>
                  <div className={newcover.euroLang}>
                    <h3>European Languages</h3>
                    <div className={newcover.euroLangList}>
                      <a href="/learnfrench">
                        <h4>French</h4>
                      </a>
                      <a href="/learngerman">
                        <h4>German</h4>
                      </a>
                      <a href="/learnrussian">
                        <h4>Russian</h4>
                      </a>
                      <a href="/learnspanish">
                        <h4>Spanish</h4>
                      </a>
                      <a href="/learndutch">
                        <h4>Dutch</h4>
                      </a>
                      <a href="/learnportuguese">
                        <h4>Portuguese</h4>
                      </a>
                      <a href="/learnenglish">
                        <h4>English</h4>
                      </a>
                      <a href="/learndanish">
                        <h4>Danish</h4>
                      </a>
                    </div>
                  </div>
                  <div className={newcover.euroLang}>
                    <h3>Asian Languages</h3>
                    <div className={newcover.asianLangList}>
                      <a href="/learnjapanese">
                        <h4>Japanese</h4>
                      </a>
                      <a href="/learnmandarin">
                        <h4>Mandarin</h4>
                      </a>
                      <a href="/learnkorean">
                        <h4>Korean</h4>
                      </a>
                      <a href="/learnarabic">
                        <h4>Arabic</h4>
                      </a>
                      <a href="/underDevelopment">
                        <h4>Hindi</h4>
                      </a>
                      <a href="/underDevelopment">
                        <h4>Sanskrit</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- GET STARTED SECTION --> */}

          <div className="get-started">
            {/* style={{background: '#ffc653'}} */}
            <div className="left-side">
              <div className="heading">
                <h2>Fuel your global dreams by learning foreign languages</h2>
                <br />
              </div>

              <div className="info">
                <ul>
                  <li>World-class virtual teaching platform</li>
                  <hr className="info-divider" />
                  <li>Course flexibility and customization</li>
                  <hr className="info-divider" />
                  <li>Free demo class for any language</li>
                </ul>
              </div>

              <a
                className="register-button"
                href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register as a teacher
              </a>
            </div>

            <div className="right-side">
              <img
                src="/Index/cropped-img.JPG"
                alt="Register as a Teacher with us"
              />
            </div>
          </div>

          {/* <!-- REVIEWS SECTION --> */}

          <div className="review-swiper-css">
            <div className="stand-out-text">
              <h4
                style={{
                  fontSize: "2rem",
                  color: "#00046C",
                }}
              >
                What Learner&apos;s say!
              </h4>
            </div>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              // navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false, // Resume autoplay after interaction
              }}
              onSwiper={(swiper) => console.log(swiper)}
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
                    <img
                      src="/Index/review - swapna.png"
                      alt="Swapna Jain Review Online Language Learning"
                    />
                  </div>
                  <div className="name">Swapna Jain</div>
                  <div className="designation">
                    Korean TOPIK 1 Level 1 - Brewer – Maine, US
                  </div>
                  <div className="reviews">
                    <p>
                      Being part of a big organization, one of my 2023 goals was
                      to learn a foreign language. So, I got to learn from Priya
                      Nagpal, my Korean tutor at Qurocity. And what an
                      experience it has been! I like everything about the
                      course.I would recommend Qurocity and Priya Nagpal to
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
                      alt="Reeva Arsingha Review Online Language Learning"
                    />
                  </div>
                  <div className="name">Reeva Arsinghakar</div>
                  <div className="designation">
                    Spanish B1 - Akola Maharashtra
                  </div>
                  <div className="reviews">
                    <p>
                      “Firstly, it was a lot of fun to learn with Qurocity. The
                      teaching process was perfect, and the tutor ensured I was
                      thoroughly engaged. So I enjoyed it a lot! Their material
                      helped me a lot too. Moreover, the platform is very
                      organized and systematic. It was overall a great learning
                      experience.”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="profile-picture">
                    <img
                      src="/Index/review - riya.png"
                      alt="Riya Malhotra Review Online Language Learning"
                    />
                  </div>
                  <div className="name">Riya Malhotra</div>
                  <div className="designation">German A1 - Germany</div>
                  <div className="reviews">
                    <p>
                      “The German course was very good. I also found it very
                      convenient as I could attend the course per my schedule.
                      As I am studying medicine in Germany my language knowledge
                      came handy. My tutor, Disha, was kind enough to make
                      adjustments many times so that I could easily recover
                      whenever I missed a session. I am definitely satisfied!”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* <!-- FAQ SECTION --> */}
          <div>
            <div className="faqHeadingDivCss">
              <h4
                style={{
                  color: "#00046C",
                }}
                className="faq-heading"
              >
                Frequently Asked Questions
              </h4>
            </div>
            <div className="body-faq">
              <div className="image-container">
                <img src="/Index/faq.png" alt="FAQ FAQs" />
              </div>
              <div className="layout">
                <Accordion />
              </div>
            </div>
          </div>

          {/* counselling form */}
          <CounsellingForm />

          {/* footer */}
          <Footer2 />
        </div>
      )}

      {/* Show popup after delay */}
      {showPopup && <Popup onClose={closePopup} />}
    </>
  );
}

export default Newcover;
