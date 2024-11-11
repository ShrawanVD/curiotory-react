// import Covernav from "../../components/Navv/Covernav";
// import Footer from "../../components/Footer/Footer";
import "./Becometutor.css";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import { Helmet } from "react-helmet";
import Footer2 from "../../components/Footer/Footer2";
import Accordian4BecomeTutor from "../../components/Accordian4BecomeTutor";
import { useEffect } from "react";

function Becometutor() {
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
    <div>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PDFXMX24"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* for meta tags  */}
      <Helmet>
        <title>Here's How You Can Become A Language Tutor At Qurocity</title>
        <meta
          name="description"
          content="You have exceptional and top notch language skills, you excel in language tutoring, your language learning methods are out of the box!, if you happen to have these skills then boom!
Qurocity is the place for you! Join our network of the best language tutors from all over the world and have your chance of making a difference in the linguistics world! "
        />
        <meta
          name="keywords"
          content="language tutor,  language tutor jobs, language tutor jobs online, foreign language tutor jobs, foreign language translator jobs, remote language tutor jobs"
        />
        
        <link rel="canonical" href="https://qurocity.ai/becometutor" />
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16458367327"
        ></script>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16458367327');
    `}
        </script>
      
      </Helmet>

      <Newnavbar />
      <div>
        {/* become tutor step by step guide */}
        <div className="enroll-container section-1">
          <div className="enroll-title">
            <h1 className="text-center pl-3 pr-3 display-4 font-weight-bold">
              {/* How we enroll private tutors? */}
              Here's How You Can Become A Language Tutor At Qurocity
            </h1>
            <p>
              You have exceptional and top notch language skills, you excel in
              language tutoring, your language learning methods are out of the
              box!, if you happen to have these skills then boom!
            </p>
            <p>
              Qurocity is the place for you! Join our network of the best
              language tutors from all over the world and have your chance of
              making a difference in the linguistics world!{" "}
            </p>
          </div>

          {/* cards section for becoming tutor */}

          <div class="stepsSection">
            <div class="stepCard">
              <div class="stepHeader">
                <div class="stepNumber">Step 1</div>
              </div>
              <div class="stepContent">
                <h3>Download Qurocity App from Playstore</h3>
                <div className="downloadButton">
                  <a
                    href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="button2">Download the app</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="stepCard">
              <div class="stepHeader">
                <div class="stepNumber">Step 2</div>
              </div>
              <div class="stepContent">
                <h3>Go to menu section of the homepage</h3>
                <img src="/become tutor/step2img.png" alt="step2" />
              </div>
            </div>
            <div class="stepCard">
              <div class="stepHeader">
                <div class="stepNumber">Step 3</div>
              </div>
              <div class="stepContent">
                <h3>Select the "Become a tutor" option</h3>
                <img src="/become tutor/step3.png" alt="step3" />
              </div>
            </div>
            <div class="stepCard">
              <div class="stepHeader">
                <div class="stepNumber">Step 4</div>
              </div>
              <div class="stepContent">
                <h3>Fill up the Form and wait for the revert back</h3>
                <img src="/become tutor/step4.png" alt="step4" />
              </div>
            </div>
          </div>

          {/* <div className="stepCards">
            <div className="flexbox">
              <div className="flexcard flexcardBlue">
                <div className="flexcardNumber flexcardNumberBlue">Step 01</div>
                <div className="flex flexcardTitle">Download Qurocity app</div>
                <div className="downloadButton">
                  <a
                    href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="button2">Download the app</button>
                  </a>
                </div>
              </div>
              <div className="flexcard flexcardBlue">
                <div className="flexcardNumber flexcardNumberBlue">Step 02</div>
                <div className="flex flexcardTitle">
                  Go to menu section of the homepage
                </div>
                <div className="step2Img">
                  <img src="/become tutor/step2img.png" alt="step2" />
                </div>
              </div>
              <div className="flexcard flexcardBlue">
                <div className="flexcardNumber flexcardNumberBlue">Step 03</div>
                <div className="flex flexcardTitle">
                  Select the “Become a tutor” option
                </div>
                <div className="step2Img">
                  <img src="/become tutor/step3.png" alt="step2" />
                </div>
              </div>
              <div className="flexcard flexcardBlue">
                <div className="flexcardNumber flexcardNumberBlue">Step 04</div>
                <div className="flex flexcardTitle">
                  Fill up the Form and wait for the revert back
                </div>
                <div className="step2Img">
                  <img src="/become tutor/step4.png" alt="step2" />
                </div>
              </div>
            </div>
          </div> */}

          <div className="text-center mt-5 mb-5">
            <a
              href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button2">Download the app</button>
            </a>
            {/* <a className="btn btn-primary regTeacherButton" href="TeacherForm">
              Register as a Teacher
            </a> */}
          </div>
        </div>

        {/* <!-- first section --> */}
        <div className="become-tutor-first-section">
          <div className="left-side">
            <div className="left-main-heading">
              <h2>
                Become a <span className="bold-first">private tutor</span> &amp;
                work from ‘anywhere’
              </h2>
            </div>
            <div className="left-sub-heading">
              <h5>Join one of India’s fastest-growing Edu-Tech platform</h5>
            </div>
            <div className="left-paragraph">
              <p>
                Passionate about starting or skyrocketing your career while
                making a positive impact? You’re at the right place – at the
                right time. If you have the skills, Qurocity makes it easy and
                rewarding to become a private tutor.
              </p>
              <p>
                You can work from home and make a meaningful impact in the lives
                of kids and young adults by teaching foreign languages. All you
                need is a good Internet connection and a passion for sharing
                your knowledge with the next generation.
              </p>
              <br />
            </div>
            <a
              className="register-button"
              href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              Register as a teacher
            </a>
          </div>

          <div className="right-side">
            <img
              loading="lazy"
              decoding="async"
              src="/become tutor/section 1 image.svg"
              alt="become tutor icon"
            />
          </div>
        </div>

        {/* <!-- second section --> */}

        <div className="second-section-become-tutor">
          <div className="left-side">
            <img
              src="/become tutor/section 2 image.svg"
              alt="become tutor right img"
            />
          </div>

          <div className="right-side">
            <h1>
              Don’t just teach -  
              <span className="bold-second"> Enrichen Lives</span>
            </h1>
            <br />
            <br />
            <p>
              What’s a rewarding career if it doesn’t positively impact the
              lives of others and society at large? At Qurocity, you’re not just
              a mere instructor. You’re a mentor who empowers kids to be more
              empathetic and inclusive, helping turn their curiosities into
              invaluable opportunities.
            </p>
          </div>
        </div>

        {/* <!-- third section - same as the first section --> */}

        <div className="third-section">
          <div className="left-side">
            <div className="left-main-heading">
              <h2>
                Go <span className="bold-first">high-tech </span>
                with ease
              </h2>
            </div>
            <div className="left-paragraph">
              <br />
              <p>
                We ensure web/mobile-friendly learning journeys for kids.
                Qurocity’s cutting-edge platform makes it effortless for them to
                access your content on PCs, laptops, mobile devices, etc.
              </p>
            </div>
          </div>

          <div className="right-side">
            <img
              loading="lazy"
              decoding="async"
              width="463"
              height="611"
              src="/become tutor/section 3 image.svg"
              alt="right become tutor"
            />
          </div>
        </div>

        {/* <!-- fourth section same as the second section --> */}

        <div className="second-section-become-tutor secondsectioncss">
          <div className="left-side">
            <img src="/become tutor/section 4 image.svg" alt="become tutor" />
          </div>

          <div className="right-side">
            <h1>
              Get data to
              <span className="bold-second"> make life simpler
              </span>
            </h1>
            <br />
            <br />
            <p>
              We believe in the power of data to transform teaching experiences.
              Qurocity provides access to a wide range of real-time analytics to
              understand learning outcomes and proactively plan remedial
              measures.
            </p>
          </div>
        </div>

        {/* <!-- why become tutor with us? section --> */}

        <div className="why-with-us">
          <div className="heading">
            <h1 className="text-center  ">
              Why become a private tutor with us?
            </h1>
          </div>

          <div className="background">
            <div className="left-side-img">
              <img
                src="/become tutor/why become tutor with us - image.png"
                alt="why become tutor"
              />
            </div>

            <div className="right-side-info">
              <ul>
                <li>
                  Grow your career in one of India’s fastest-growing Edu-Tech
                  networks
                </li>
                <br />
                <li>
                  Meet your income goals by tutoring students at home or online
                </li>
                <br />
                <li>
                  Customize the curriculum with your personal touch to add more
                  value
                </li>
                <br />
                <li>
                  Inspire kids to pick up new skills and make their own path to
                  success
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- phases section --> */}

        {/* <!-- phases section - section 1 --> */}

        {/* faq section */}
        <div>
          <div className="faqHeadingDivCss">
            <h2 className="faq_heading">Frequently Asked Questions</h2>
          </div>
          <div className="body_faq">
            <div className="image_container">
              <img src="/Index/faq.png" alt="FAQ FAQs" />
            </div>
            <div className="layout">
              <Accordian4BecomeTutor />
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Becometutor;
