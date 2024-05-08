
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container2">
          <div className="row-up">
            {/* Logo */}
            <div className="ss logo-class col-lg-3">
              <div className="single_footer single_footer1">
                <img src="/Index/logo.png" alt="Logo" />
                <p className="logo-bio">An online language learning platform</p>
              </div>
            </div>

            {/* quick links */}
            <div className="col-lg-3 ss">
              <div className="single_footer">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="/Blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="/About">About Us</a>
                  </li>
                  <li>
                    <a href="/MeetTheTutor">Meet Our Tutor</a>
                  </li>
                  <li>
                    <a href="Becometutor">Become a Tutor</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* legal links */}
            <div className="ss col-lg-3">
              <div className="single_footer single_footer_address">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="/Privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/Refund">Refund Policy & NDNC</a>
                  </li>
                  <li>
                    <a href="/Terms">Terms and Conditions</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contacting Us */}
            <div className="ss col-lg-">
              <div className="single_footer single_footer_address">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <a href="#">
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
              <hr />
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin iconlinkdin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* copyright */}
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className="copyright">@2024 Chalkboard Academy Private Limited</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
