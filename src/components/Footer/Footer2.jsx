// import foot from "./Footer2.module.css";
import { Helmet } from "react-helmet";
import "./Footer.css";
import React, { useEffect, useRef } from "react";

function Footer() {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default mailto action
    const href = event.currentTarget.href;
    const email = href
      .replace("mailto:", "")
      .replace(/AT/, "@")
      .replace(/DOT/, ".");
    window.location.href = `mailto:${email}`;
  };

  const emailRef = useRef(null);

  useEffect(() => {
    // Ensure emailRef is initialized before accessing current property
    if (emailRef.current) {
      const email = "partner@qurocity.ai".split("").reverse().join("");
      emailRef.current.textContent = email.split("").reverse().join("");
      emailRef.current.href = `mailto:${email.split("").reverse().join("")}`;
    }
  }, []);

  return (
    <>
      <Helmet>
        {/* Open Graph for LinkedIn */}
        <meta property="og:title" content="Qurocity On LinkedIn" />
        <meta property="og:site_name" content="Linkedin" />
        <meta
          property="og:url"
          content="https://www.linkedin.com/company/chalkboard-academy/?originalSubdomain=in"
        />
        <meta
          property="og:description"
          content="Qurocity brings a new era of language learning combining technology and the best educational approaches, leading it to become India’s most preferred language learning app in the educational forefront."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/djov5ngec/image/upload/v1727174509/Qurocity_LinkedIn_Cover_Page_jjgzbz.png"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="app" />
        <meta name="twitter:site" content="https://x.com/cuirotory__" />
        <meta
          name="twitter:description"
          content="As you read this 1.2 billion people are learning a new language..."
        />
        <meta name="twitter:app:name:iphone" content="Qurocity" />
        <meta name="twitter:app:name:ipad" content="Qurocity" />
        <meta name="twitter:app:name:googleplay" content="Qurocity" />
        <meta
          name="twitter:app:id:googleplay"
          content="stage.curiotory.com&pcampaignid=web_share"
        />
        <meta name="twitter:app:country" content="India" />

        {/* Open Graph for Instagram */}
        <meta property="og:title" content="Qurocity On Instagram" />
        <meta property="og:site_name" content="Instagram" />
        <meta
          property="og:url"
          content="https://www.instagram.com/qurocity_/?igsh=MTRxM3A5eXdkNzFzMQ=="
        />
        <meta
          property="og:description"
          content="Curo leads, you learn. Learn languages - anywhere, anytime"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://www.instagram.com/p/C-_1Wn-CgXx/?igsh=dGEzOHA2c3pwcmR6"
        />

        {/* Open Graph for YouTube */}
        <meta property="og:title" content="Qurocity On YouTube" />
        <meta property="og:site_name" content="Youtube Channel" />
        <meta
          property="og:url"
          content="https://www.youtube.com/channel/UC9PdKfuTTo4i3sWd_HGQUFg"
        />
        <meta
          property="og:description"
          content="Qurocity is a vibrant and ambitious start-up looking to reimagine the Edu-Tech space for kids and young adults. We offer a holistic online platform for individuals to learn various Asian, European, and Sign languages – empowering them to scale new heights personally and professionally."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://yt3.googleusercontent.com/2NWz-PG9qo7LNn4lJOaSBpF-U_6FvFiFpwztvxarYiCAtwBIYVhcPNIMmhY9fug3WoMuiFlBlDo=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
        />
        <meta
          property="og:video"
          content="https://youtu.be/P-0LXP8Gvbk?si=ByyteHfdSFy0NQav"
        />

        {/* Open Graph for Facebook */}
        <meta property="og:title" content="Qurocity On Facebook" />
        <meta property="og:site_name" content="Facebook" />
        <meta property="og:url" content="https://www.facebook.com/Curiotory/" />
        <meta
          property="og:description"
          content="Qurocity is an online learning platform that will take you on a joyful ride from Synchronous to Asynchronous learning based on the 'Heuristic approach'."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://scontent.fpnq7-3.fna.fbcdn.net/v/t39.30808-6/451218954_866926035457577_9047302983481556675_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=13WUZD-MFxUQ7kNvgHvMHCn&_nc_ht=scontent.fpnq7-3.fna&oh=00_AYAWXM8Ka4aAB4XfwZH7qUqsU2BfbnR4zkPmAAxcwXM1Vw&oe=66F8879F"
        />

        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16458367327"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16458367327');
    `}
        </script>
      </Helmet>

      <div className="footer">
        <div className="container2">
          <div className="row-up">
            {/* Logo */}
            <div className="ss logo-class col-lg-2">
              <div className="single_footer single_footer1">
                <img
                  className="logofooter"
                  src="/Index/logo-footer.png"
                  alt="Logo"
                />
                <p className="logo-bio">An online language learning platform</p>
                <img src="/Index/iso.png" alt="ISO" />
              </div>
            </div>

            {/* quick links */}
            <div className="col-lg-2 ss">
              <div className="single_footer">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="/meetthetutor">Meet Our Tutor</a>
                  </li>
                  <li>
                    <a href="/press">Press Release</a>
                  </li>
                  {/* <li>
                    <a href="/becometutor">Become a Tutor</a>
                  </li> */}
                  <li>
                    <a href="/life">Life at Qurocity</a>
                  </li>
                  <li>
                    <a href="/careers">Career with Us</a>
                  </li>
                  <li>
                    <a href="/contactus">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Get Qurocity on */}
            <div className="col-lg-2 ss">
              <div className="single_footer">
                <h4>Get Qurocity on</h4>
                <ul>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=stage.curiotory.com&pcampaignid=web_share"
                      target="_blank"
                    >
                      Andriod
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/show/1qL1qOwS5Ptd5Fz2GmxRKh?si=c377a455305e4d33&nd=1&dlsi=81e81a8da74e4d7b"
                      target="_blank"
                    >
                      Spotify Podcasts
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://podcasts.apple.com/in/podcast/japanese-verbal-ventures-soundbyte-hub/id1756575417"
                      target="_blank"
                    >
                      Apple
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* legal links */}
            <div className="ss col-lg-2">
              <div className="single_footer single_footer_address">
                <h4>Legal</h4>

                <ul>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/refund">Refund Policy & NDNC</a>
                  </li>
                  <li>
                    <a href="/terms">Terms And Conditions</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contacting Us */}
            <div className="ss col-lg-2">
              <div className="single_footer single_footer_address">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <a
                      // href="mailto:SupportATcuriotoryDOTcom"
                      href="mailto:partnerATqurocityDOTai"
                      onClick={handleClick}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="email fa fa-envelope"></i>
                      Email us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            {/* social links */}
            {/* <div className="social_profile col-lg-12 col-sm-12 col-xs-12 ">
              <hr
              />
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/company/chalkboard-academy/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin iconlinkdin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/qurocity_?igsh=MTRxM3A5eXdkNzFzMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UC9PdKfuTTo4i3sWd_HGQUFg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/Curiotory/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div> */}

            <div className="social_profile col-lg-12 col-sm-12 col-xs-12 ">
              <hr />
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/company/chalkboard-academy/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin iconlinkdin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/qurocity_?igsh=MTRxM3A5eXdkNzFzMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UC9PdKfuTTo4i3sWd_HGQUFg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Curiotory/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* copyright */}
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className="copyright">
                @2024 Chalkbord Academy Private Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
