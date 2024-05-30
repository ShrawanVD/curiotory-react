// import foot from "./Footer2.module.css";

function Footer() {
  return (
    <>
      <div
        className="footer"
        style={{
          position:"relative",
          background:
            "linear-gradient(0deg, rgba(255,215,108,1) 45%, rgba(255,189,13,1) 70%)",
        }}
      >
        <div className="container2" style={{
          marginTop:"2rem"
        }}>
          <div className="row-up">
            {/* Logo */}
            <div className="ss logo-class col-lg-3">
              <div className="single_footer single_footer1">
                <img src="/Index/logo.png" alt="Logo" />
                <p
                  style={{
                    color: "black",
                  }}
                  className="logo-bio"
                >
                  An online language learning platform
                </p>
              </div>
            </div>

            {/* quick links */}
            <div className="col-lg-3 ss">
              <div className="single_footer">
                <h4
                  style={{
                    color: "black",
                  }}
                >
                  Quick Links
                </h4>
                <ul>
                  <li>
                    <a
                      style={{
                        color: "black",
                      }}
                      href="/blogs"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "black",
                      }}
                      href="/aboutus"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "black",
                      }}
                      href="/meetthetutor"
                    >
                      Meet Our Tutor
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "black",
                      }}
                      href="becometutor"
                    >
                      Become a Tutor
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* legal links */}
            <div className="ss col-lg-3">
              <div className="single_footer single_footer_address">
                <h4
                  style={{
                    color: "black",
                  }}
                >
                  Legal
                </h4>
                <style>
                  {`
          .sngle footer h4::after {
            content: "";
            display: block;
            background: black;
            height: 2px; /* Example styling */
            width: 100%; /* Example styling */
            margin-top: 5px; /* Example styling */
          }
        `}
                </style>
                <ul>
                  <li>
                    <a
                      style={{
                        color: "black",
                      }}
                      href="/privacy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "black",
                      }}
                      href="/refund"
                    >
                      Refund Policy & NDNC
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "black",
                      }}
                      href="/terms"
                    >
                      Terms And Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contacting Us */}
            <div className="ss col-lg-3">
              <div className="single_footer single_footer_address">
                <h4
                  style={{
                    color: "black",
                  }}
                >
                  Contact Us
                </h4>
                <ul>
                  <li>
                    <a
                      style={{
                        color: "black",
                      }}
                      href="mailto:Support@curiotory.com"
                      target="_blank"
                    >
                      <i className="email fa fa-envelope"></i>
                      Support@curiotory.com
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
                style={{
                  border: "1px solid black",
                }}
              />
              <ul>
                <li>
                  <a
                    style={{
                      color: "black",
                    }}
                    href="https://www.linkedin.com/company/chalkboard-academy/?originalSubdomain=in"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin iconlinkdin"></i>
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      color: "black",
                    }}
                    href="https://www.instagram.com/curiotory_/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      color: "black",
                    }}
                    href="https://www.youtube.com/channel/UC9PdKfuTTo4i3sWd_HGQUFg"
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a
                    style={{
                      color: "black",
                    }}
                    href="https://www.facebook.com/Curiotory/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* copyright */}
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p
                style={{
                  color: "black",
                }}
                className="copyright"
              >
                @2024 Chalkboard Academy Private Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
