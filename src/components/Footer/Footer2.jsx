// import foot from "./Footer2.module.css";
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
      <div className="footer">
        <div className="container2">
          <div className="row-up">
            {/* Logo */}
            <div className="ss logo-class col-lg-2">
              <div className="single_footer single_footer1">
                <img className="logofooter" src="/Index/logo-footer.png" alt="Logo" />
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
                    <a href="/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="/meetthetutor">Meet Our Tutor</a>
                  </li>
                  <li>
                    <a href="/becometutor">Become a Tutor</a>
                  </li>
                  <li>
                    <a href="/careers">Career with Us</a>
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
                    <a href="https://play.google.com/store/apps/details?id=stage.curiotory.com&pcampaignid=web_share" target="_blank">Andriod</a>
                  </li>
                  <li>
                    <a href="https://open.spotify.com/show/1qL1qOwS5Ptd5Fz2GmxRKh?si=c377a455305e4d33&nd=1&dlsi=81e81a8da74e4d7b" target="_blank">Spotify Podcasts</a>
                  </li>
                  <li>
                    <a href="https://podcasts.apple.com/in/podcast/japanese-verbal-ventures-soundbyte-hub/id1756575417" target="_blank">Apple</a>
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
                    <a
                      href="/privacy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/refund"
                    >
                      Refund Policy & NDNC
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                    >
                      Terms And Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contacting Us */}
            <div className="ss col-lg-2">
              <div className="single_footer single_footer_address">
                <h4
                >
                  Contact Us
                </h4>
                <ul>
                  <li>
                    <a
                      href="mailto:SupportATcuriotoryDOTcom"
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
            <div className="social_profile col-lg-12 col-sm-12 col-xs-12 ">
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
            </div>

            {/* copyright */}
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p
                className="copyright"
              >
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
